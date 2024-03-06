import { FC } from 'react';

const Logo: FC = () => {
  return (
    <a href="/">
      <img className="w-[141px] h-[140px] z-0" src={'images/logo.svg'} alt="Logo" />
    </a>
  );
};

export default Logo;
