interface AnimeFilters {
  minScore?: number | null;
  genre?: number | null;
  year?: number | null;
}

export async function getAnime(
  page = 1,
  limit = 25,
  filters: AnimeFilters = {},
) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    sfw: 'true',
    genres_exclude: '9',
  });

  if (filters.minScore) {
    params.set('min_score', String(filters.minScore));
    params.set('order_by', 'score');
    params.set('sort', 'asc');
  }

  if (filters.genre) params.set('genres', String(filters.genre));

  if (filters.year) {
    params.set('start_date', `${filters.year}-01-01`);
    params.set('end_date', `${filters.year}-12-31`);
  }

  const response = await fetch(`https://api.jikan.moe/v4/anime?${params}`);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}
