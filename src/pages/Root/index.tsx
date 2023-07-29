import { NavMenu } from './NavMenu';
import { Outlet } from 'react-router-dom';

export function Root() {
  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
}
