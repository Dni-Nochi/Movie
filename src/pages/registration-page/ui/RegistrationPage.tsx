import { RegistrationForm } from '@/features/registretion';
import styles from '@/shared/ui/styles/backgroundImgs.module.css';

export function RegistrationPage() {
  return (
    <div className={`${styles.movie_background} relative h-222.5 text-white`}>
      <RegistrationForm />
    </div>
  );
}
