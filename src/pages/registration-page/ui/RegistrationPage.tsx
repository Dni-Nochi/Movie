import { useAppSelector } from '@/app/store/hooks';
import { RegistrationForm } from '@/features/registretion';
import { NavLink } from 'react-router-dom';
import styles from '@/shared/ui/styles/backgroundImgs.module.css';

export function RegistrationPage() {
  const isAuth = useAppSelector((state) => Boolean(state.auth.userEmail));
  if (isAuth) {
    return (
      <div className={`${styles.movie_background} relative h-222.5 text-white`}>
        <div className="absolute top-20 right-[50%] translate-x-[50%] z-10 flex flex-col gap-5 min-w-110 min-h-80 p-10 box-border rounded-xl bg-[#141414]">
          <p>Вы уже зашли</p>
          <NavLink
            to={'/'}
            className={
              'w-fit p-2 rounded-lg bg-[#e50000] transition-opacity duration-300 hover:opacity-60'
            }
          >
            Домой Уолтер
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <div className={`${styles.movie_background} relative h-222.5 text-white`}>
      <RegistrationForm />
    </div>
  );
}
