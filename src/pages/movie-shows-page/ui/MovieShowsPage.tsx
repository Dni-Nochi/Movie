import { AnimeList } from '@/widgets/anime-list';

export function MovieShowsPage() {
  return (
    <div className="relative min-h-222.5 mx-30  mt-12.5 p-12.5 text-white">
      <section>
        <h2 className="text-[32px]">Movie & Shows</h2>
      </section>
      <AnimeList />
    </div>
  );
}
