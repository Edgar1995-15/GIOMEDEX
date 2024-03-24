import { FC, useState } from 'react';
import Logo from '../Logo';
import Select from '../Select';
import Button from '../Button';
import { headersSelectData } from '../../assets/data';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const [selectOpen, setSelectOpen] = useState<string | null>(null);

  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-center bg-gradient-to-r from-[#080D12] to-[#102136]">
      <div className="flex h-[92px] w-[1440px] items-center justify-between px-11 py-6">
        <div className="flex w-[20%] justify-start">
          <Logo />
        </div>
        <div className="flex w-[80%] items-center justify-center gap-[24px]">
          <Button name={'Home'} className={'bg-transparent'} onClick={() => navigate('/')} />
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
              'w-full !justify-center text-nowrap bg-[#009462] px-5 py-3 text-white hover:bg-[#008054]'
            }
            onClick={() => navigate('/contact')}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
