import { FC } from 'react';
import Button from '../../../components/Button';

interface IDropdown {
    isVisible?: boolean;
}

const Dropdown: FC<IDropdown> = ({isVisible}) => {
  return (
    <div className="w-full bg-white mt-8 cursor-pointer">
      <div className='border-b border-[#DDDDDD] flex justify-between items-center'>
        <div className='pb-5'>
            <p className='text-[#008273] text-[18px]'>Biostatistician</p>
        </div>
        <div className='pb-5'>
            <p className='text-[#B5B5B5]'>Location: Remote</p>
        </div>
        <div className='pb-5'>
            <p className='text-[#B5B5B5]'>Position Type: Full-Time</p>
        </div>
        <div className='pb-5'>
            <Button name='View More' icon={isVisible ? 'arrowTop' : 'arrowDown'} onClick={() => {}} className={` ${isVisible ? 'text-white bg-[#00A79D]' : '!text-[#00A79D]'} flex items-center gap-3 h-9 border border-[#00A79D] px-3 py-[6px]`} />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
