import { FC } from 'react';

const Logo: FC = () => {
  return (
    <a href="/">
      <img className="h-[34px] w-[180px]" src={'images/logo.svg'} alt="Logo" />
    </a>
  );
};

export default Logo;
