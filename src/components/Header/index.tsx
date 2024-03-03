import { FC } from 'react';
import Logo from '../Logo';
import Select from '../Select';
import Button from '../Button';

const Header: FC = () => {
  return (
    <div className="flex w-screen justify-center bg-gradient-to-r from-[#080D12] to-[#102136]">
      <div className="flex h-[92px] w-[1440px] items-center justify-between px-11 py-6">
        <div className="flex w-[20%] justify-start">
          <Logo />
        </div>
        <div className="flex w-[80%] items-center justify-center gap-11">
          <a href="/" className="text-[16px] font-medium text-white">
            Home
          </a>
          <Select name={'Company'} />
          <Select name={'Services'} />
          <Select name={'CDISC'} />
          <a href="/" className="text-[16px] font-medium text-white">
            Publications
          </a>
          <Select name={'Company'} />
          <Button name={'Contact us'} className={'bg-[#009462] text-white '} />
        </div>
      </div>
    </div>
  );
};
export default Header;
