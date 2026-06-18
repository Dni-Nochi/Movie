import { useEffect, useState } from 'react';
import { getAnime } from '@/shared/api/anime';
import type { AnimeShows } from '@/entities/movie-shows-card/model/types';
import { MovieShowsCard } from '@/entities/movie-shows-card';
import { Button } from '@/shared/ui/button';

export function AnimeList() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const response = await getAnime();
        console.log(response.data);
        setAnimeList(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    load();
  }, []);

  return (
    <div>
      <div className="flex justify-end items-center pb-10 pr-12">
        <p className="pr-3">pages: 1 / сколько-то</p>
        <Button children={'next'} />
      </div>
      <div className="flex flex-wrap justify-center gap-x-12.5 gap-y-10">
        {animeList.map((show: AnimeShows) => {
          return (
            <MovieShowsCard
              key={show.mal_id}
              mal_id={show.mal_id}
              title={show.title}
              images={show.images}
              score={show.score}
              genres={show.genres}
              year={show.year}
              url={show.url}
            />
          );
        })}
      </div>
    </div>
  );
}
