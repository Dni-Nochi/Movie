import { SvgComponents } from '@/shared/ui/svg-components';
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
      className="flex w-85 min-h-105 bg-[#1a1a1a] border border-[#ffffff12] rounded-t-2xl rounded-b-2xl transition duration-300 shadow-xl hover:shadow-[#e50000] hover:scale-108"
    >
      <a
        className="flex flex-col gap-3.5 w-full"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={images.webp.image_url}
          className=" w-full h-120 rounded-t-xl"
        />
        <div className="flex flex-col gap-2.5 px-3 pb-6">
          <div className="flex justify-between px-1">
            <p className="text-lg">{title}</p>
            <span className="flex items-center gap-1.5 text-[#f0c14b]">
              <SvgComponents
                id="star"
                width={24}
                height={24}
                useClassName="stroke-[#f0c14b]"
              />
              {score}
            </span>
          </div>
          <p className="px-1 text-[#7a7a7a]">{year}</p>
          <div className="flex flex-wrap gap-2 px-1">
            {genres.map((genre, index) => {
              const firstGenre = index === 0;
              return (
                <span
                  className={`${firstGenre ? 'text-[#e88a7d] bg-[#c0392b26]' : 'text-[#aaa] bg-[#ffffff0f]'} w-fit h-fit py-1 px-2 rounded-lg`}
                  key={genre.mal_id}
                >
                  {genre.name}
                </span>
              );
            })}
          </div>
        </div>
      </a>
    </article>
  );
}
