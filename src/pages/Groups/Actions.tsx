import { MoreVert } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

interface ComponentProps {
  row: {
    id: string;
    name: string;
    description: string;
    owner: string;
  };
}

const options = [
  { name: 'Edit', action: () => console.log('Edit!') },
  { name: 'Delete', action: () => console.log('Delete!') },
  { name: 'Tags', action: () => console.log('Tags!') },
  { name: 'Cards', action: () => console.log('Cards!') },
];

export function Actions({ row }: ComponentProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  function handleActionsOpen(event: React.MouseEvent<HTMLElement>) {
    setAnchorElNav(event.currentTarget);
  }

  function handleActionsClose() {
    setAnchorElNav(null);
  }

  return (
    <div>
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
    </div>
  );
}
