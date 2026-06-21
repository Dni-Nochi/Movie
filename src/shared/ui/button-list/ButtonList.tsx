import { SvgComponents } from '../svg-components';
interface ButtonFiltersProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  rotate?: boolean;
  children: React.ReactNode;
}
export function ButtonList(props: ButtonFiltersProps) {
  const { type = 'button', className, rotate, children, ...rest } = props;
  return (
    <button
      type={type}
      className={`${className} flex items-center gap-1.5 h-fit px-3.5 py-1 rounded-lg bg-[#ffffff0d] border border-[#ffffff26] cursor-pointer transition duration-250 hover:border-white active:scale-95`}
      {...rest}
    >
      <SvgComponents
        id="genre"
        width={12}
        height={12}
        className={`${rotate ? '-rotate-180' : ''}`}
        useClassName="stroke-white fill-none"
      />
      {children}
    </button>
  );
}
