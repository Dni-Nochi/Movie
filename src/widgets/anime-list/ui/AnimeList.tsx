import { useAppDispatch } from '@/app/store/hooks';
import { MovieShowsCard } from '@/entities/movie-shows-card';
import { Button } from '@/shared/ui/button';
import { SvgComponents } from '@/shared/ui/svg-components';
import {
  nextPage,
  prevPage,
  firstPage,
  prevFive,
  nextFive,
  nextTen,
} from '@/widgets/anime-list/model/ListSlice';
import { useAnimeList } from '../model/useAnimeList';

export function AnimeList() {
  const { animeList, currentPage, isLoading } = useAnimeList();
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex justify-between items-center pb-10">
        <div className="flex items-center">
          <Button
            className={`${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'} bg-inherit border border-[#2a2a2c]`}
            disabled={currentPage === 1}
            onClick={() => dispatch(prevPage())}
          >
            <SvgComponents
              id="arrow-switch"
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
              id="arrow-switch"
              width={18}
              height={18}
              className="stroke-white"
            />
          </Button>
        </div>
        <div className="flex items-center gap-2.5">
          <Button
            className="cursor-pointer"
            onClick={() => dispatch(prevFive(currentPage))}
          >
            <SvgComponents
              id="genre"
              width={12}
              height={12}
              className="rotate-90"
              useClassName="stroke-white fill-none"
            />
            5
          </Button>
          <Button
            className="cursor-pointer"
            onClick={() => dispatch(nextFive(currentPage))}
          >
            5
            <SvgComponents
              id="genre"
              width={12}
              height={12}
              className="-rotate-90"
              useClassName="stroke-white fill-none"
            />
          </Button>
          <Button
            className="cursor-pointer"
            onClick={() => dispatch(nextTen(currentPage))}
          >
            10
            <SvgComponents
              id="genre"
              width={12}
              height={12}
              className="-rotate-90"
              useClassName="stroke-white fill-none"
            />
          </Button>
          <Button
            className="flex items-center cursor-pointer"
            onClick={() => dispatch(firstPage())}
          >
            Первая страницы
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-y-10 px-2.5">
        {isLoading ? (
          <p className="w-full text-center text-[#888] py-10">Загрузка...</p>
        ) : animeList.length === 0 ? (
          <p className="w-full text-center text-[#888] py-10">
            Ничего не найдено
          </p>
        ) : (
          animeList.map((show) => (
            <MovieShowsCard key={show.mal_id} {...show} />
          ))
        )}
      </div>
    </div>
  );
}
