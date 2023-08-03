import { AppBar, Container, Toolbar, Box, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { Menu as MenuIcon, Logout } from '@mui/icons-material';
import { useAuth } from '../../hooks';
import { navItems } from './navItems';
import { useLocation, useNavigate } from 'react-router-dom';

export function NavMenu() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { isAuthenticated, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && pathname !== '/login') {
      navigate('/login');
    }
  }, [isAuthenticated, pathname]);

  function handleNavMenuOpen(event: React.MouseEvent<HTMLElement>) {
    setAnchorElNav(event.currentTarget);
  }

  function handleNavMenuClose() {
    setAnchorElNav(null);
  }

  if (!isAuthenticated) return null;
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="nav menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={{ mr: 2 }}
              onClick={handleNavMenuOpen}
            >
              <MenuIcon />
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
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleNavMenuClose}
            >
              {navItems.map((item) => (
                <MenuItem key={item.name} onClick={handleNavMenuClose}>
                  <Typography textAlign="center">{item.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flash Samurai
          </Typography>
          <IconButton size="large" color="inherit" aria-label="logout" onClick={logout}>
            <Logout />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
