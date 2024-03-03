import { FC } from 'react';
import Icon from '../Icon';

interface IButton {
  name: string;
  icon?: string;
  iconClassName?: string;
  className: string;
}

const Button: FC<IButton> = ({ name, icon, className, iconClassName: IconClassName }) => {
  return (
    <button className={`flex justify-between rounded px-5 py-3 ${className}`}>
      <p className="text-[16px] font-medium text-white">{name}</p>
      {!!icon && <Icon name={icon} className={IconClassName} />}
    </button>
  );
};
export default Button;
