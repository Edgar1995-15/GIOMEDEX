import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ButtonMobile: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={`flex rounded text-center text-white  ${className}`} {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default ButtonMobile;
