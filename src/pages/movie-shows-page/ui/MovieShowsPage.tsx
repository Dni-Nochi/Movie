import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
  setMinScore,
  setGenre,
  setYear,
} from '@/features/anime-filters/model/filtersSlice';
import { GENRES } from '@/features/anime-filters/model/genres';
import { firstPage } from '@/widgets/anime-list/model/ListSlice';
import { ButtonList } from '@/shared/ui/button-list';
import { AnimeList } from '@/widgets/anime-list';

const SCORES = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const currentYear = new Date().getFullYear();
const YEARS = Array.from(
  { length: currentYear - 1990 + 1 },
  (_, i) => currentYear - i,
);

export function MovieShowsPage() {
  const dispatch = useAppDispatch();
  const minScore = useAppSelector((state) => state.filters.minScore);
  const genre = useAppSelector((state) => state.filters.genre);
  const year = useAppSelector((state) => state.filters.year);

  const [scoreOpen, setScoreOpen] = useState(false);
  const [genreOpen, setGenreOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);

  const selectYear = (y: number | null) => {
    dispatch(setYear(y));
    dispatch(firstPage());
    setYearOpen(false);
  };

  const selectScore = (score: number | null) => {
    dispatch(setMinScore(score));
    dispatch(firstPage());
    setScoreOpen(false);
  };

  const selectGenre = (id: number | null) => {
    dispatch(setGenre(id));
    dispatch(firstPage());
    setGenreOpen(false);
  };

  const genreName = GENRES.find((g) => g.id === genre)?.name;

  return (
    <div className="relative min-h-222.5 mx-30 mt-12.5 p-12.5 text-white">
      <section className="flex justify-between items-center mb-6">
        <h2 className="text-[32px]">Movie & Shows</h2>
        <div className="flex gap-4">
          <div className="relative">
            <ButtonList
              onClick={() => setGenreOpen((o) => !o)}
              rotate={genreOpen}
            >
              {genreName ?? 'Жанр'}
            </ButtonList>
            {genreOpen && (
              <ul className="absolute right-0 mt-2 z-20 w-44 max-h-60 overflow-y-auto rounded-lg bg-[#1a1a1a] border border-[#ffffff26]">
                <li>
                  <button
                    className="w-full px-3 py-1.5 text-left hover:bg-[#ffffff0d] cursor-pointer"
                    onClick={() => selectGenre(null)}
                  >
                    Любой
                  </button>
                </li>
                {GENRES.map((g) => (
                  <li key={g.id}>
                    <button
                      className="w-full px-3 py-1.5 text-left hover:bg-[#ffffff0d] cursor-pointer"
                      onClick={() => selectGenre(g.id)}
                    >
                      {g.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative">
            <ButtonList
              onClick={() => setScoreOpen((o) => !o)}
              rotate={scoreOpen}
            >
              Рейтинг{minScore ? ` от ${minScore}` : ''}
            </ButtonList>
            {scoreOpen && (
              <ul className="absolute right-0 mt-2 z-20 w-32 max-h-60 overflow-y-auto rounded-lg bg-[#1a1a1a] border border-[#ffffff26]">
                <li>
                  <button
                    className="w-full px-3 py-1.5 text-left hover:bg-[#ffffff0d] cursor-pointer"
                    onClick={() => selectScore(null)}
                  >
                    Любой
                  </button>
                </li>
                {SCORES.map((s) => (
                  <li key={s}>
                    <button
                      className="w-full px-3 py-1.5 text-left hover:bg-[#ffffff0d] cursor-pointer"
                      onClick={() => selectScore(s)}
                    >
                      от {s}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative">
            <ButtonList
              onClick={() => setYearOpen((o) => !o)}
              rotate={yearOpen}
            >
              {year ?? 'Год'}
            </ButtonList>
            {yearOpen && (
              <ul className="absolute right-0 mt-2 z-20 w-32 max-h-60 overflow-y-auto rounded-lg bg-[#1a1a1a] border border-[#ffffff26]">
                <li>
                  <button
                    className="w-full px-3 py-1.5 text-left hover:bg-[#ffffff0d] cursor-pointer"
                    onClick={() => selectYear(null)}
                  >
                    Любой
                  </button>
                </li>
                {YEARS.map((y) => (
                  <li key={y}>
                    <button
                      className="w-full px-3 py-1.5 text-left hover:bg-[#ffffff0d] cursor-pointer"
                      onClick={() => selectYear(y)}
                    >
                      {y}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
      <AnimeList />
    </div>
  );
}
