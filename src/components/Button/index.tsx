import { FC } from 'react';
import Icon from '../Icon';

interface IButton {
  name?: string;
  icon?: string;
  iconClassName?: string;
  className: string;
  onClick: () => void;
}

const Button: FC<IButton> = ({ name, icon, className, iconClassName, onClick }) => {
  return (
    <button onClick={onClick} className={`flex justify-between rounded ${className} text-white`}>
      {!!name && <p>{name}</p>}
      {!!icon && <Icon name={icon} className={iconClassName} />}
    </button>
  );
};
export default Button;
