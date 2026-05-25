import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/for-header';

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
