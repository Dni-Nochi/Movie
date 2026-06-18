import { Button } from '@/shared/ui/button';
import { AnimeList } from '@/widgets/anime-list';

export function MovieShowsPage() {
  return (
    <div className="relative min-h-222.5 mx-40.5  mt-12.5 p-12.5 border-2 border-[#262626]  text-white">
      <Button
        className="absolute -top-5 left-4"
        children={'Movie & Shows page'}
      />
      <div className="absolute -top-5 right-5 flex gap-14.5">
        <Button children={'Genre'} />
        <Button children={'Rating'} />
        <Button children={'Year of issue'} />
      </div>
      <AnimeList />
    </div>
  );
}
