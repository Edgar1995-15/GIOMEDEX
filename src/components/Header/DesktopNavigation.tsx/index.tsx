import { FC, useState } from 'react';
import Button from '../../Button';
import Select from '../../Select';
import { useNavigate } from 'react-router-dom';
import { headersSelectData } from '../../../assets/data';

const DesktopNavigation: FC = () => {
  const [selectOpen, setSelectOpen] = useState<string | null>(null);

  const navigate = useNavigate();

  return (
    <div className="flex w-[80%] items-center justify-center gap-[24px]  max-xl:gap-[20px] max-lg:gap-[18px] max-md:hidden">
      <Button
        name={'Home'}
        className={'bg-transparent  max-xl:text-[14px] max-lg:text-[12px]'}
        onClick={() => navigate('/')}
      />
      <Select
        name={'Company'}
        selectInfo={headersSelectData.company}
        setSelectOpen={setSelectOpen}
        selectOpen={selectOpen}
      />
      <Select
        name={'Services'}
        selectInfo={headersSelectData.Services}
        setSelectOpen={setSelectOpen}
        selectOpen={selectOpen}
      />
      <Select
        name={'CDISC'}
        selectInfo={headersSelectData.CDISC}
        setSelectOpen={setSelectOpen}
        selectOpen={selectOpen}
      />
      <Select
        name={'Quality Policy'}
        selectInfo={headersSelectData['Quality Policy']}
        setSelectOpen={setSelectOpen}
        selectOpen={selectOpen}
      />
      {/* <Button
        name={'Publications'}
        className={'bg-transparent'}
        onClick={() => navigate('/Publications')}
      /> */}
      <Select
        name={'For Partners'}
        selectInfo={headersSelectData['For Partners']}
        setSelectOpen={setSelectOpen}
        selectOpen={selectOpen}
      />
      <Button
        name={'Contact us'}
        className={
          'w-full !justify-center text-nowrap bg-[#009462] px-5 py-3 text-white hover:bg-[#008054] max-xl:px-3 max-xl:py-2 max-xl:text-[14px] max-lg:text-[12px]'
        }
        onClick={() => navigate('/contact')}
      />
    </div>
  );
};

export default DesktopNavigation;
