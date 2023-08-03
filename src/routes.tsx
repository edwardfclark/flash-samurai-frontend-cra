import { createBrowserRouter } from 'react-router-dom';
import { Root } from './pages/Root';
import { Login } from './pages/Login';
import { Groups } from './pages/Groups';

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/',
        element: <Groups />,
      },
    ],
  },
]);
