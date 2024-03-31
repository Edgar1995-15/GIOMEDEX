import { FC } from 'react';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';

interface IDropdown {
  isVisible?: boolean;
}

const Dropdown: FC<IDropdown> = ({ isVisible }) => {
  return (
    <div className="mt-8 w-full cursor-pointer bg-white">
      <div className="flex items-center justify-between border-b border-[#DDDDDD] max-md:flex-col max-md:items-start">
        <div className="pb-5 max-md:pb-1">
          <p className="text-[18px] text-[#008273]">Biostatistician</p>
        </div>
        <div className="pb-5 max-md:pb-1">
          <p className="text-[#B5B5B5] max-md:text-[14px]">Location: Remote</p>
        </div>
        <div className="pb-5 max-md:pb-0 max-md:flex justify-between max-md:w-full max-md:items-end">
          <p className="text-[#B5B5B5] max-md:text-[14px]">Position Type: Full-Time</p>
          <div className="hidden max-md:flex">
            <button
              className={` ${isVisible ? 'bg-[#00A79D] text-white' : '!text-[#00A79D]'} flex h-9 w-[120px] text-[12px] items-center gap-3 border border-[#00A79D] px-3 py-[6px]`}
            >
              View More
              <Icon name={isVisible ? 'arrowTop' : 'arrowDown'} className='w-5 max-md:w-3' />
            </button>
          </div>
        </div>
        <div className="pb-5">
          <Button
            name="View More"
            icon={isVisible ? 'arrowTop' : 'arrowDown'}
            onClick={() => {}}
            className={` ${isVisible ? 'bg-[#00A79D] text-white' : '!text-[#00A79D]'} flex h-9 items-center gap-3 border border-[#00A79D] px-3 py-[6px] max-md:hidden`}
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
