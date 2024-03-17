import { FC } from 'react';

const Logo: FC = () => {
  return (
    <a href="/">
      <img className="z-0 h-[140px] w-[141px]" src={'images/logo.svg'} alt="Logo" />
    </a>
  );
};

export default Logo;
