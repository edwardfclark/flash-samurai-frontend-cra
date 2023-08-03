import { GridColDef, GridRowsProp, DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

export function Groups() {
  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];
  return (
    <>
      <Typography variant="h2">Card Groups</Typography>
      <Typography variant="subtitle1" sx={{ margin: '0 0 2rem' }}>
        Card groups are broad categories that are mutually exclusive. Groups can contain many cards, but a card can only
        belong to one group.
      </Typography>
      <DataGrid rows={rows} columns={columns} />
    </>
  );
}
