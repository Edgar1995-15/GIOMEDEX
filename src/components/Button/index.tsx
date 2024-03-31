import { FC } from 'react';
import Icon from '../Icon';

interface IButton {
  name?: string;
  icon?: string;
  iconClassName?: string;
  className: string;
  textStyle?: string;
  onClick: () => void;
}

const Button: FC<IButton> = ({ name, icon, className, iconClassName, onClick, textStyle }) => {
  return (
    <button onClick={onClick} className={`flex justify-between ${className} rounded text-white`}>
      {!!name && <p className={textStyle}>{name}</p>}
      {!!icon && <Icon name={icon} className={iconClassName} />}
    </button>
  );
};
export default Button;
