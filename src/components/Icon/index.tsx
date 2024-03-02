import { FC } from "react";

export interface IIcon {
  name: string;
  className?: string;
}

const Icon: FC<IIcon> = ({
  name,
  className = "lg:h-auto sm:h-6 cursor-pointer",
}) => {
  return (
    <img
      draggable={false as boolean}
      src={`/images/icons/${name}.svg`}
      alt={name}
      className={className}
    />
  );
};
export default Icon;
