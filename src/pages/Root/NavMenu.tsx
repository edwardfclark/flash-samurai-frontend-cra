import { AppBar, Container, Toolbar, Box, IconButton, Typography } from '@mui/material';
import { Menu, Logout } from '@mui/icons-material';
import { useAuth } from '../../hooks';

export function NavMenu() {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) return null;
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
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
