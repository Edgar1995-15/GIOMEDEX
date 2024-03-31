import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Logo: FC = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`/`)}>
      <img className="z-0 h-[24px] max-lg:h-[20px]" src={'images/logo.svg'} alt="Logo" />
    </button>
  );
};

export default Logo;
