import { GridColDef, GridRowsProp, DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import { useGetGroups, Group } from '../../hooks/Group/useGetGroups';
import { Actions } from './Actions';
import { useState } from 'react';

export function Groups() {
  const [paginationModel, setPaginationModel] = useState({ page: 1, pageSize: 20 });
  const { data: result, isLoading } = useGetGroups({
    page: paginationModel.page,
    limit: paginationModel.pageSize,
  });
  const data = result?.data || [];
  const total = result?.total || 0;

  const rows: GridRowsProp = data.map((group: Group) => ({
    id: group._id,
    name: group.name,
    description: group.description,
    owner: group?.owner ?? '-',
  }));

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', maxWidth: 150, flex: 1, sortable: false, filterable: false },
    { field: 'owner', headerName: 'Owner', maxWidth: 150, flex: 1, sortable: false, filterable: false },
    { field: 'description', headerName: 'Description', flex: 1, sortable: false, filterable: false },
    {
      field: 'actions',
      headerName: '',
      maxWidth: 50,
      flex: 1,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      disableReorder: true,
      renderCell: ({ row }) => <Actions row={row} />,
    },
  ];
  return (
    <>
      <Typography variant="h2">Card Groups</Typography>
      <Typography variant="subtitle1" sx={{ margin: '0 0 2rem' }}>
        Card groups are broad categories that are mutually exclusive. Groups can contain many cards, but a card can only
        belong to one group.
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationMode="server"
        rowCount={total}
        loading={isLoading}
        pageSizeOptions={[5, 10, 20, 50]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </>
  );
}
