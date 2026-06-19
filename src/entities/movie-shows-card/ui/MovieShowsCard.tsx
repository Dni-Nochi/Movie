import type { AnimeShows } from '../model/types';

export function MovieShowsCard({
  mal_id,
  title,
  images,
  score,
  genres,
  year,
  url,
}: AnimeShows) {
  return (
    <article
      key={mal_id}
      className="flex justify-center w-75 min-h-105 p-7.5 bg-[#1a1a1a] rounded-xl transition duration-300 shadow-xl hover:shadow-[#e50000] hover:scale-108"
    >
      <a
        className="flex flex-col gap-3.5"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={images.webp.image_url} className="w-60 h-62 rounded-xl" />
        <div className="flex justify-between px-1">
          <p>{title}</p>
          <p>{score}</p>
        </div>
        <p className="px-1">{year}</p>
        <div className="flex flex-wrap gap-2 px-1">
          {genres.map((genre) => {
            return (
              <p
                className="w-fit h-fit p-1 bg-[#2d2d2d] rounded-md"
                key={genre.mal_id}
              >
                {genre.name}
              </p>
            );
          })}
        </div>
        <p>стрелка</p>
      </a>
    </article>
  );
}
