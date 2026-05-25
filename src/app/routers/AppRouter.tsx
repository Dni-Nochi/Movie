import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layout';
import { HomePage } from '@/pages/home-pages';
import { MovieShowsPage } from '@/pages/movie-shows-page';
import { SubscriptionPage } from '@/pages/subscription-page';
import { SupportPage } from '@/pages/support-page';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movieAndShows" element={<MovieShowsPage />} />
        <Route path="subscription" element={<SubscriptionPage />} />
        <Route path="support" element={<SupportPage />} />
      </Route>
    </Routes>
  );
}
