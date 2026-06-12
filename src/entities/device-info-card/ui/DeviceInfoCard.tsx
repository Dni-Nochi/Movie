import { SvgComponents } from '@/shared/ui/svg-components';
interface DeviceInfoCardProps {
  width: number;
  height: number;
  id: string;
  devicesName: string;
  description: string;
}
export function DeviceInfoCard(props: DeviceInfoCardProps) {
  const { width, height, id, devicesName, description } = props;
  return (
    <article className="flex flex-col  gap-7 w-94.5 h-58 text-[#999] transition duration-300 hover:scale-105 hover:text-white rounded-xl border-2 border-[#262626] bg-linear-to-tr from-[#0f0f0f] from-70% to-[#e50000]/25 to-100%">
      <header className="flex items-center gap-3 mt-5 px-10">
        <div className="w-fit p-3.5 rounded-xl border-2 border-[#262626] bg-[#141414]">
          <SvgComponents
            width={width}
            height={height}
            id={id}
            useClassName="fill-[#ff0000]"
          />
        </div>
        <h3 className="text-[22px] text-white">
          {devicesName.charAt(0).toUpperCase() + devicesName.slice(1)}
        </h3>
      </header>
      <p className="px-10">{description}</p>
    </article>
  );
}
