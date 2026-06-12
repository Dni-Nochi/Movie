import spriteSvg from '../../assets/icons/spritesSvg.svg';
interface UseSvg {
  useClassName?: string;
  className?: string;
  width: number;
  height: number;
  id: string;
}
export function SvgComponents(props: UseSvg) {
  const { width, height, id, useClassName, className } = props;
  return (
    <svg className={className} width={width} height={height}>
      <use className={`${useClassName}`} href={`${spriteSvg}#${id}`}></use>
    </svg>
  );
}
