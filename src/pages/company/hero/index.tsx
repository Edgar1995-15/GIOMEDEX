import { FC } from 'react';
import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import data from "../data.json";

const Hero: FC = () => {
  return (
    <div className="w-full">
      <div className="h-[379px] w-full pl-32 pt-[111px] bg-cover bg-bottom" style={{backgroundImage: `url('/images/company/header.jpg')`}}>
        <div className='max-w-[1440px] m-auto'>
        <div>
          <Typography content={data.hero.title} color='text-white' size='text-[32px]' className='leading-10' variant='font-bold' />
          <Typography content={data.hero.content} color='text-white' size='text-[32px]' className='leading-10' variant='font-bold' />
        </div>
        <div className='flex gap-4 mt-6'>
          <Button
            name="Our Services"
            className={`px-[20px] py-[16px] w-[172px] h-[54px] items-center bg-[#009462] hover:bg-[#008054]`}
            icon="arrowRight"
            onClick={() => {}}
          />
          <Button
            name="Our Services"
            className={`px-[20px] py-[16px] w-[172px] h-[54px] items-center border border-white hover:border-[#008054] hover:text-[#008054]`}
            icon="arrowRight"
            onClick={() => {}}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
