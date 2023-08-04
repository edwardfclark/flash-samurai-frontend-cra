import { createBrowserRouter } from 'react-router-dom';
import { Root } from './pages/Root';
import { Login } from './pages/Login';
import { Groups } from './pages/Groups';
import { CreateGroup } from './pages/CreateGroup';

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
      {
        path: '/groups/create',
        element: <CreateGroup />,
      },
      {
        path: '/groups/:id/edit',
        element: <p>Edit Group</p>,
      },
    ],
  },
]);
