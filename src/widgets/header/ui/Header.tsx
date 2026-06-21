import { NavLink } from 'react-router-dom';
import { SvgComponents } from '@/shared/ui/svg-components';
import styles from './Header.module.css';

const setActive = ({ isActive }: { isActive: boolean }) => {
  return isActive
    ? 'py-3 px-6 bg-[#1a1a1a] rounded-lg'
    : 'opacity-50 duration-300 hover:opacity-100';
};

export function Header() {
  return (
    <header className={`${styles.header} sticky top-0 z-100`}>
      <nav className="flex items-center justify-between mx-30 py-2.5 text-white">
        <div className="flex items-center gap-2">
          <SvgComponents width={60} height={60} id={'movie-logo'} />
          <p>Movie</p>
        </div>
        <ul className="flex gap-7.5 py-5 px-4.5 rounded-xl bg-[#0f0f0f] border-4 border-[#1a1a1a]">
          <li>
            <NavLink to={'/'} className={setActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'movieAndShows'} className={setActive}>
              Movie & Shows
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-7.5">
          <SvgComponents width={34} height={34} id={'loop'} />
          <NavLink to={'loginPage'}>
            <SvgComponents
              width={34}
              height={34}
              id={'user'}
              useClassName="fill-white"
            />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
