import styles from './HomePage.module.css';
import { HelloSection } from '@/widgets/main-hello-section';
import { ProvideStreaming } from '@/widgets/provide-streaming';
export function HomePage() {
  return (
    <main>
      <div className={`${styles.movie_background} relative h-222.5 text-white`}>
        <HelloSection />
      </div>

      <ProvideStreaming />
    </main>
  );
}
