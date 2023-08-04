import { MoreVert } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Box } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteGroup } from './DeleteGroup';

interface ComponentProps {
  row: {
    id: string;
    name: string;
    description: string;
    owner: string;
  };
}

export function Actions({ row }: ComponentProps) {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const options = [
    { name: 'Edit', action: () => navigate(`/groups/${row.id}/edit`) },
    { name: 'Delete', action: () => setModalOpen(true) },
    { name: 'Tags', action: () => navigate(`/groups/${row.id}/tags`) },
    { name: 'Cards', action: () => navigate(`/groups/${row.id}/cards`) },
  ];

  function handleActionsOpen(event: React.MouseEvent<HTMLElement>) {
    setAnchorElNav(event.currentTarget);
  }

  function handleActionsClose() {
    setAnchorElNav(null);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row-reverse', width: '100%' }}>
      <IconButton size="small" onClick={handleActionsOpen}>
        <MoreVert />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleActionsClose}
      >
        {options.map((item) => (
          <MenuItem key={item.name} onClick={item.action}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
      <DeleteGroup isOpen={modalOpen} onClose={() => setModalOpen(false)} groupId={row.id} />
    </Box>
  );
}
