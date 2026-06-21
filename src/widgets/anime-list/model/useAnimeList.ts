import { useState, useEffect } from 'react';
import { useAppSelector } from '@/app/store/hooks';
import { getAnime } from '@/shared/api/anime';
import type { AnimeShows } from '@/entities/movie-shows-card/model/types';

export function useAnimeList() {
  const currentPage = useAppSelector((state) => state.currentPage.page);
  const minScore = useAppSelector((state) => state.filters.minScore);
  const genre = useAppSelector((state) => state.filters.genre);
  const year = useAppSelector((state) => state.filters.year);

  const [animeList, setAnimeList] = useState<AnimeShows[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        const response = await getAnime(currentPage, 25, {
          minScore,
          genre,
          year,
        });
        setAnimeList(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [currentPage, minScore, genre, year]);

  return {
    animeList,
    currentPage,
    isLoading,
  };
}
