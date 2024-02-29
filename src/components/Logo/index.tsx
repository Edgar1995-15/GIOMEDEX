import { FC } from "react";

const Logo: FC = () => {
  return (
    <a href="/">
      <img className="w-[240px] h-[24px]" src={"images/logo.svg"} alt="Logo" />
    </a>
  );
};

export default Logo;
