import { SvgComponents } from '../../../shared/ui/svgComponents';

export function Header() {
  return (
    <header>
      <nav>
        <SvgComponents width={60} height={60} id={'movie-logo'} />
      </nav>
    </header>
  );
}
