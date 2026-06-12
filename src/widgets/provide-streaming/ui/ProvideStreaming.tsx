import { provideDeviceInfo } from '../lib/data';
import { DeviceInfoCard } from '@/entities/device-info-card';

export function ProvideStreaming() {
  return (
    <div className="flex flex-wrap gap-7.5 mx-40.5 pt-37.5 text-white">
      <div className="pb-10">
        <h2 className="text-3xl">
          We Provide you streaming experience across various devices.
        </h2>
        <p className="pt-3.5 text-[#999]">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range <br />
          of devices, ensuring that you never miss a moment of entertainment.
        </p>
      </div>
      {provideDeviceInfo.map((device) => {
        return (
          <DeviceInfoCard
            width={25}
            height={25}
            id={device.name}
            key={device.id}
            devicesName={device.name}
            description={device.description}
          />
        );
      })}
    </div>
  );
}
