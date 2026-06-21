import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../layout';
import { HomePage } from '@/pages/home-pages';
import { MovieShowsPage } from '@/pages/movie-shows-page';
import { SubscriptionPage } from '@/pages/subscription-page';
import { SupportPage } from '@/pages/support-page';
import { RegistrationPage } from '@/pages/registration-page';
import { useAppSelector } from '../store/hooks';

export function AppRouter() {
  const isAuth = useAppSelector((state) => Boolean(state.auth.userEmail));
  console.log(isAuth);
  return (
    <Routes>
      <Route path="/loginPage" element={<RegistrationPage />} />

      <Route
        path="/"
        element={isAuth ? <Layout /> : <Navigate to={'/loginPage'} replace />}
      >
        <Route index element={<HomePage />} />
        <Route path="movieAndShows" element={<MovieShowsPage />} />
        <Route path="subscription" element={<SubscriptionPage />} />
        <Route path="support" element={<SupportPage />} />
      </Route>
    </Routes>
  );
}
