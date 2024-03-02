import { FC } from "react";
import Logo from "../Logo";
import Select from "../Select";
import Button from "../Button";

const Header: FC = () => {
  return (
    <div className="w-screen bg-gradient-to-r from-[#080D12] to-[#102136] flex justify-center">
      <div className="w-[1440px] h-[92px] py-6 px-11 flex items-center justify-between">
        <div className="w-[20%] flex justify-start">
          <Logo />
        </div>
        <div className="w-[80%] flex justify-center items-center gap-11">
          <a href="/" className="text-white text-[16px] font-medium">
            Home
          </a>
          <Select name={"Company"} />
          <Select name={"Services"} />
          <Select name={"CDISC"} />
          <a href="/" className="text-white text-[16px] font-medium">
            Publications
          </a>
          <Select name={"Company"} />
          <Button name={'Contact us'} className={'bg-[#009462] text-white '} />
        </div>
      </div>
    </div>
  );
};
export default Header;
