import { createBrowserRouter } from 'react-router-dom';
import { Root } from './pages/Root';
import { Login } from './pages/Login';
import { Groups } from './pages/Groups';
import { GroupCreate } from './pages/GroupCreate';
import { GroupUpdate } from './pages/GroupUpdate';

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
        element: <GroupCreate />,
      },
      {
        path: '/groups/:groupId/edit',
        element: <GroupUpdate />,
      },
    ],
  },
]);
