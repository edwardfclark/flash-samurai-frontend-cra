import { createBrowserRouter } from 'react-router-dom';
import { Root } from './pages/Root';
import { Login } from './pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/groups',
        element: <h1>Groups</h1>,
      },
    ],
  },
]);
