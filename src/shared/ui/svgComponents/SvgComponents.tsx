import spriteSvg from '../../assets/icons/spritesSvg.svg';
interface UseSvg {
  width: number;
  height: number;
  id: string;
}
export function SvgComponents(props: UseSvg) {
  const { width, height, id } = props;
  return (
    <svg width={width} height={height}>
      <use href={`${spriteSvg}#${id}`}></use>
    </svg>
  );
}
