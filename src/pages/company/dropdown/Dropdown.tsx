import { FC } from 'react';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';

interface IDropdown {
  isVisible?: boolean;
}

const Dropdown: FC<IDropdown> = ({ isVisible }) => {
  return (
    <div className="mt-8 w-full cursor-pointer bg-white">
      <div className="flex items-center justify-between border-b border-[#DDDDDD] mobileMax:flex-col mobileMax:items-start">
        <div className="pb-5 mobileMax:pb-1">
          <p className="text-[18px] text-[#008273]">Biostatistician</p>
        </div>
        <div className="pb-5 mobileMax:pb-1">
          <p className="text-[#B5B5B5] mobileMax:text-[14px]">Location: Remote</p>
        </div>
        <div className="pb-5 mobileMax:pb-0 mobileMax:flex justify-between mobileMax:w-full mobileMax:items-end">
          <p className="text-[#B5B5B5] mobileMax:text-[14px]">Position Type: Full-Time</p>
          <div className="hidden mobileMax:flex">
            <button
              className={` ${isVisible ? 'bg-[#00A79D] text-white' : '!text-[#00A79D]'} flex h-9 w-[120px] text-[12px] items-center gap-3 border border-[#00A79D] px-3 py-[6px]`}
            >
              View More
              <Icon name={isVisible ? 'arrowTop' : 'arrowDown'} className='w-5' />
            </button>
          </div>
        </div>
        <div className="pb-5">
          <Button
            name="View More"
            icon={isVisible ? 'arrowTop' : 'arrowDown'}
            onClick={() => {}}
            className={` ${isVisible ? 'bg-[#00A79D] text-white' : '!text-[#00A79D]'} flex h-9 items-center gap-3 border border-[#00A79D] px-3 py-[6px] mobileMax:hidden`}
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
