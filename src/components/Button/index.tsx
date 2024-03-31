import { FC, useState } from 'react';
import Icon from '../Icon';

interface IButton {
  name?: string;
  icon?: string;
  iconClassName?: string;
  className: string;
  textStyle?: string;
  onClick: () => void;
  isSpecial?: boolean;
}

const Button: FC<IButton> = ({ name, icon, className, iconClassName, onClick, isSpecial, textStyle }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if (isSpecial) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isSpecial) {
      setHovered(false);
    }
  };

  const displayIcon = isSpecial && hovered ? 'arrowRightGreen' : icon || '';

  return (
    <button
      onClick={onClick}
      className={`flex justify-between rounded ${className} text-white`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!!name && <p className={textStyle}>{name}</p>}
      {!!displayIcon && <Icon name={displayIcon} className={iconClassName} />}
    </button>
  );
};

export default Button;
