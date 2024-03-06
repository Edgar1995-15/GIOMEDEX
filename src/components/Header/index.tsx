import { FC, useState } from 'react';
import Logo from '../Logo';
import Select from '../Select';
import Button from '../Button';
import { headersSelectData } from '../../assets/data';

const Header: FC = () => {
  const [selectOpen, setSelectOpen] = useState<string | null>(null);

  return (
    <div className="flex w-screen justify-center bg-gradient-to-r from-[#080D12] to-[#102136]">
      <div className="flex h-[92px] w-[1440px] items-center justify-between px-11 py-6">
        <div className="flex w-[20%] justify-start">
          <Logo />
        </div>
        <div className="flex w-[80%] items-center justify-center gap-[24px]">
          <a href="/" className="text-[16px] font-medium text-white">
            Home
          </a>
          <Select name={'Company'} selectInfo={headersSelectData.company} setSelectOpen={setSelectOpen} selectOpen={selectOpen} />
          <Select name={'Services'} selectInfo={headersSelectData.Services} setSelectOpen={setSelectOpen} selectOpen={selectOpen} />
          <Select name={'CDISC'} selectInfo={headersSelectData.CDISC} setSelectOpen={setSelectOpen} selectOpen={selectOpen}  />
          <Select name={'Quality Policy'} selectInfo={headersSelectData['Quality Policy']} setSelectOpen={setSelectOpen} selectOpen={selectOpen}  />
          <a href="/" className="text-[16px] font-medium text-white">
            Publications
          </a>
          <Select name={'For Partners'} selectInfo={headersSelectData['For Partners']} setSelectOpen={setSelectOpen} selectOpen={selectOpen}  />
          <Button name={'Contact us'} className={'bg-[#009462] text-white px-5 hover:bg-[#008054] py-3'} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
export default Header;
