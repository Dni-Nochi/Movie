interface SizeImage {
  image_url: string;
  large_image_url: string;
  small_image_url: string;
}

interface AnimeImage {
  jpg: SizeImage;
  webp: SizeImage;
}

interface Genres {
  mal_id: number;
  name: string;
}

export interface AnimeShows {
  mal_id: number;
  title: string;
  images: AnimeImage;
  score: number | null;
  genres: Genres[];
  year: number | null;
  url: string;
}
