import { footerCategories } from '../lib/data';
import { FooterColumn } from '@/entities/footer-column';
import { SvgComponents } from '@/shared/ui/svg-components';

export function Footer() {
  return (
    <footer className="mt-37.5 bg-[#0f0f0f]">
      <div className="flex mx-40.5 py-24.5">
        <FooterColumn arrays={footerCategories} />
        <div className=" text-white">
          <p>Connect With Us</p>
          <div className="flex gap-3.5 pt-6">
            <div className="bg-[#1a1a1a] p-2 border-2 border-[#262626] rounded-lg cursor-pointer trasnition-colors duration-300 hover:border-[#999]">
              <a
                href="https://github.com/Dni-Nochi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgComponents
                  useClassName="fill-white z-[100]"
                  width={24}
                  height={24}
                  id="github"
                />
              </a>
            </div>
            <div className="bg-[#1a1a1a] p-2 border-2 border-[#262626] rounded-lg cursor-pointer transition-colors duration-300 hover:text-[#ff0002] hover:border-[#999]">
              <a
                href="https://almaty.hh.kz/resume/efc83f0bff0b17d2aa0039ed1f345374416a34"
                target="_blank"
                rel="noopener noreferrer"
                className="px-0.5"
              >
                hh
              </a>
            </div>
            <div className="bg-[#1a1a1a] p-2 border-2 border-[#262626] rounded-lg cursor-pointer fill-white transition duration-300 hover:fill-[#0a66c2] hover:border-[#999]">
              <a
                href="https://www.linkedin.com/in/%D1%82%D0%B8%D0%BC%D1%83%D1%80-%D0%B0%D0%B4%D0%B8%D0%BB%D0%BE%D0%B2-920684344/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgComponents
                  useClassName="z-[100]"
                  width={24}
                  height={24}
                  id="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-40.5 border-t-2 border-[#262626] pt-5 pb-12 text-[#999]">
        <p>@2026 Movie, All Rights Reserved</p>
        <div className="flex">
          <p className="pr-4">Terms of Use</p>
          <p className="px-4 border-x-2 border-[#262626]">Privacy Policy</p>
          <p className="pl-4">Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
}
