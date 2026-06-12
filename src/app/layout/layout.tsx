import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/for-header';
import { Footer } from '@/widgets/footer';

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
