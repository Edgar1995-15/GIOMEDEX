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
      <div className='flex justify-between mt-4'>
        <p className='font-[600] text-[24px]'>{name}</p>
        <Icon name='letter' />
      </div>
      <p className='mt-4 text-[#595959] font-bold'>{subtitle}</p>
      <p className='mt-2 text-[#595959]'>{text}</p>
    </div>
  );
};
export default Card;
