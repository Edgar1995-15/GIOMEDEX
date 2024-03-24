import { useState } from 'react';
import Button from '../../Button';
import { headersSelectData } from '../../../assets/data';

const MobileNavigation = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        icon="menu-mobile"
        className={'bg-transparent'}
        onClick={() => setOpenNav(!openNav)}
        iconClassName="w-[40px] h-[40px]"
      />
      {openNav && (
        <div className="absolute left-0 top-0 h-full w-[79%] bg-[#0B1521] px-[19px] py-[29px]">
          <div className="flex w-full justify-end">
            <Button
              icon="select"
              className={'rounded-full bg-[#027B55] p-[10px]'}
              onClick={() => setOpenNav(!openNav)}
              iconClassName="w-[24px] h-[24px] rotate-180"
            />
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
