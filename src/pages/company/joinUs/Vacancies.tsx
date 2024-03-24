import { FC } from 'react';
import Button from '../../../components/Button';
import data from '../data.json';
import Typography from '../../../components/Typography';

const Vacancies: FC = () => {
  return (
    <div
      className="mt-[49px] h-[365px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url('/images/company/joinus.png')` }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center mobileMax:max-w-[324px] mobileMax:m-auto">
        <Typography content={data.career.title} size='text-[24px]' color='text-white' variant='font-bold' className='mobileMax:text-[18px]' />
        <Typography content={data.career.content} className='mt-4 max-w-[1014px] text-center text-white mobileMax:hidden' />
        <Button
          name="Vacancies"
          className={`mt-6 h-[54px] w-[150px] items-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054] mobileMax:hidden`}
          icon="arrowRight"
          onClick={() => {}}
        />
        <Button
          name="Vacancies"
          className={`mt-6 h-[54px] w-full items-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054] !justify-center hidden mobileMax:flex`}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Vacancies;
