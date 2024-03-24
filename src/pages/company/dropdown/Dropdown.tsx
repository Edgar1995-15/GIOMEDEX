import { FC } from 'react';
import Button from '../../../components/Button';

interface IDropdown {
  isVisible?: boolean;
}

const Dropdown: FC<IDropdown> = ({ isVisible }) => {
  return (
    <div className="mt-8 w-full cursor-pointer bg-white">
      <div className="flex items-center justify-between border-b border-[#DDDDDD]">
        <div className="pb-5">
          <p className="text-[18px] text-[#008273]">Biostatistician</p>
        </div>
        <div className="pb-5">
          <p className="text-[#B5B5B5]">Location: Remote</p>
        </div>
        <div className="pb-5">
          <p className="text-[#B5B5B5]">Position Type: Full-Time</p>
        </div>
        <div className="pb-5">
          <Button
            name="View More"
            icon={isVisible ? 'arrowTop' : 'arrowDown'}
            onClick={() => {}}
            className={` ${isVisible ? 'bg-[#00A79D] text-white' : '!text-[#00A79D]'} flex h-9 items-center gap-3 border border-[#00A79D] px-3 py-[6px]`}
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
