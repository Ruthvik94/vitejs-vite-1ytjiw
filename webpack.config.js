import path from 'path';
import webpack from 'webpack';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BUILD_DIR = path.resolve(
  __dirname,
  './web/webroot/_ui/responsive/common/'
);
const JS_PATH = path.resolve(BUILD_DIR, './js/react/');

export default {
  entry: {
    index: './src/App.jsx',
    customTable: './src/CustomTable/CustomTable.jsx',
    wizard: './src/Wizard/Wizard.jsx',
  },
  mode: 'development',
  output: {
    path: JS_PATH,
    filename: '[name].bundle.js',
    publicPath: '_ui/responsive/common/js/react/',
    compareBeforeEmit: true,
  },
  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.svg$/, /\.png$/],
        type: 'asset/resource',
        generator: {
          filename: '../../images/[hash][ext][query]',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(le|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: '../../fonts/[hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      public: path.resolve(__dirname, 'public/'),
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
          compress: {
            unused: true,
            dead_code: true,
            warnings: false,
            drop_debugger: true,
            conditionals: true,
            evaluate: true,
            drop_console: true,
            sequences: true,
            booleans: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../../css/[name].css',
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.resolve(BUILD_DIR, './js/react/*'),
        path.resolve(BUILD_DIR, './css/*'),
      ],
    }),
  ],
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    ignored: ['node_modules'],
    poll: 1000,
  },
};
