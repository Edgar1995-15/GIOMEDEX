import { FC } from "react";

const Logo: FC = () => {
  return (
    <a href="/">
      <img className="w-[180px] h-[34px]" src={"images/logo.svg"} alt="Logo" />
    </a>
  );
};

export default Logo;
