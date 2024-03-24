import { FC } from 'react';
import Icon from '../Icon';

interface ICard {
  avatar: string;
  name: string;
  subtitle: string;
  text: string;
  className?: string;
}

const Card: FC<ICard> = ({ avatar, name, subtitle, text, className }) => {
  return (
    <div className={`${className} max-w-[336px]`}>
      <img src={avatar} />
      <div className="mt-4 flex justify-between">
        <p className="text-[24px] font-[600]">{name}</p>
        <Icon name="letter" />
      </div>
      <p className="mt-4 font-bold text-[#595959]">{subtitle}</p>
      <p className="mt-2 text-[#595959]">{text}</p>
    </div>
  );
};
export default Card;
