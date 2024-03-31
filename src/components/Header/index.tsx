import { FC } from 'react';
import Logo from '../Logo';
import DesktopNavigation from './DesktopNavigation.tsx';
import MobileNavigation from './MobileNavigation.tsx/index.tsx';

const Header: FC = () => {
  return (
    <div className="flex w-full justify-center bg-gradient-to-r from-[#080D12] to-[#102136]">
      <div className="flex h-[92px] w-[1440px] items-center justify-between px-11 py-6 max-md:px-[24px] max-md:py-[24px]">
        <div className="flex h-fit w-[20%] justify-start max-md:w-[30%]">
          <Logo />
        </div>
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </div>
  );
};

export default Header;
