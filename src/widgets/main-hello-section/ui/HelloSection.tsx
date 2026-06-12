import { NavLink } from 'react-router-dom';
import { Button } from '@/shared/ui/button';
import { SvgComponents } from '@/shared/ui/svg-components';

export function HelloSection() {
  return (
    <div>
      <h1 className="absolute bottom-35 right-[50%] translate-x-[50%] text-[40px] text-center">
        The Best Movie Experience
      </h1>
      <p className="absolute bottom-18 w-274 right-[50%] translate-x-[50%] text-center text-[#999999]">
        Movie is the best streaming experience for watching your favorite movies
        and shows on demand, anytime, anywhere. With Movie, you can enjoy a wide
        variety of content, including the latest blockbusters, classic movies,
        popular TV shows, and more. You can also create your own watchlists, so
        you can easily find the content you want to watch.
      </p>
      <NavLink to={'/movieAndShows'}>
        <Button className="absolute bottom-0 right-[50%] translate-x-[50%] transition-opacity duration-300 hover:opacity-60">
          <SvgComponents
            width={20}
            height={20}
            id="arrow-pointer"
            className="pr-1"
            useClassName="fill-white"
          />
          Start Watching Now
        </Button>
      </NavLink>
    </div>
  );
}
