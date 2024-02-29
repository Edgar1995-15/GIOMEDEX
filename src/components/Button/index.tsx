import { FC } from "react";
import Icon from "../Icon";

interface IButton {
  name: string;
  icon?: string;
  IconClassName?: string;
  className: string;
}

const Button: FC<IButton> = ({ name, icon, className, IconClassName }) => {
  return (
    <button className={`flex justify-between ${className}`}>
      <p className="text-white text-[16px] font-medium">{name}</p>
      {!!icon && <Icon name={icon} className={IconClassName} />}
    </button>
  );
};
export default Button;
