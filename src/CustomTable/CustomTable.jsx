// TableCustomizationExample.js
import { useState } from 'react';
import {
  Box,
  Data,
  DataTable,
  DataFilters,
  DataSearch,
  DataSummary,
  DataTableColumns,
  Header,
  Heading,
  Menu,
  Page,
  PageContent,
  Toolbar,
  Grommet,
} from 'grommet';
import { hpe } from 'grommet-theme-hpe';

const COLUMNS = [
  { property: 'name', header: 'Name', primary: true, pin: true },
  { property: 'status', header: 'Status' },
  { property: 'role', header: 'Role' },
  { property: 'location', header: 'Location' },
  { property: 'hoursAvailable', header: 'Hours available', align: 'end' },
];

const allData = [
  {
    location: 'San Jose, CA',
    hoursAvailable: 10,
    role: 'Engineer',
    name: 'Eric Soderberg',
    status: 'Online',
  },
  {
    location: 'San Jose, CA',
    hoursAvailable: 30,
    role: 'Engineer',
    name: 'Taylor Seamans',
    status: 'Online',
  },
  {
    location: 'Fort Collins, CO',
    hoursAvailable: 25,
    role: 'Engineer',
    name: 'Matthew Glissmann',
    status: 'Offline',
  },
  {
    location: 'Fort Collins, CO',
    hoursAvailable: 5,
    role: 'Designer',
    name: 'Greg Furuiye',
    status: 'Online',
  },
  {
    location: 'San Jose, CA',
    hoursAvailable: 25,
    role: 'Designer',
    name: 'Vicky Avalos',
    status: 'Offline',
  },
  {
    location: 'Fort Collins, CO',
    hoursAvailable: 12,
    role: 'Engineer',
    name: 'Shimi Yacobi',
    status: 'Online',
  },
];

// Define data structure for DataTableColumns sorting
const options = COLUMNS.map(({ header, property }) => ({
  property,
  label: header,
}));

// Use options const to define data structure for Data component properties
const buildProperties = () => {
  const dict = {};
  for (let i = 0; i < options.length; i += 1) {
    const { label } = options[i];
    if (options[i].property === 'hoursAvailable') {
      dict[options[i].property] = {
        label,
        range: { min: 0, max: 40 },
      };
    } else {
      dict[options[i].property] = { label };
    }
  }
  return dict;
};

export const TableCustomizationExample = () => (
  <Grommet theme={hpe}>
    <Results />
  </Grommet>
);

const Results = () => {
  const [select, setSelect] = useState([]);
  const properties = buildProperties();
  // return (
  //   <Data data={allData} flex properties={properties}>
  //     <DataTable
  //       aria-describedby="users-heading"
  //       background="background"
  //       columns={COLUMNS}
  //       select={select}
  //       onSelect={setSelect}
  //       pin
  //     />
  //   </Data>
  // );

  return (
    <Data data={allData} flex properties={properties}>
      <Toolbar gap="medium">
        <Toolbar>
          <DataSearch responsive />
          <DataFilters layer />
        </Toolbar>
        <DataTableColumns drop options={options} />
        <Box flex />
        <Menu label="Actions" kind="toolbar" />
      </Toolbar>
      <DataSummary />
      <Box overflow="auto" flex>
        <DataTable
          aria-describedby="users-heading"
          background="background"
          columns={COLUMNS}
          select={select}
          onSelect={setSelect}
          pin
        />
      </Box>
    </Data>
  );
};

// export default
