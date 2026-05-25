import styles from './HomePage.module.css';
import { Button } from '@/shared/ui/button';
export function HomePage() {
  return (
    <main className={`${styles.movie_background} relative h-222.5 text-white`}>
      <h1 className="absolute bottom-35 right-[50%] translate-x-[50%] text-[40px]">
        The Best Movie Experience
      </h1>
      <p className="absolute bottom-18 w-274 right-[50%] translate-x-[50%] text-center text-[#999999]">
        Movie is the best streaming experience for watching your favorite movies
        and shows on demand, anytime, anywhere. With Movie, you can enjoy a wide
        variety of content, including the latest blockbusters, classic movies,
        popular TV shows, and more. You can also create your own watchlists, so
        you can easily find the content you want to watch.
      </p>
      <Button
        className="absolute bottom-0 right-[50%] translate-x-[50%]"
        children="Start Watching Now"
      />
    </main>
  );
}
