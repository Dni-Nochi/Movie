import { useEffect, useState } from 'react';
import { getAnime } from '@/shared/api/anime';
import type { AnimeShows } from '@/entities/movie-shows-card/model/types';
import { MovieShowsCard } from '@/entities/movie-shows-card';
import { Button } from '@/shared/ui/button';
import { SvgComponents } from '@/shared/ui/svg-components';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
  nextPage,
  prevPage,
  firstPage,
} from '@/widgets/anime-list/model/ListSlice';

export function AnimeList() {
  const [animeList, setAnimeList] = useState([]);
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.currentPage.page);

  useEffect(() => {
    async function load() {
      try {
        const response = await getAnime(currentPage);
        console.log(response.data);
        setAnimeList(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    load();
  }, [currentPage]);

  return (
    <div>
      <div className="flex items-center pb-10 pr-12">
        <Button
          className="bg-inherit border border-[#2a2a2c] cursor-pointer"
          onClick={() => dispatch(prevPage())}
        >
          <SvgComponents
            id="w"
            width={18}
            height={18}
            className="stroke-[#8d8d8d] -scale-x-100"
          />
          <p className="text-[#999999]">back</p>
        </Button>
        <p className="px-5 text-[#888]">
          Page <span className="text-white">{currentPage}</span>
        </p>
        <Button
          className="flex items-center cursor-pointer"
          onClick={() => dispatch(nextPage())}
        >
          <p>next</p>
          <SvgComponents
            id="w"
            width={18}
            height={18}
            className="stroke-white"
          />
        </Button>

        <Button
          className="flex items-center cursor-pointer"
          onClick={() => dispatch(firstPage())}
        >
          Первая страницы
        </Button>
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
