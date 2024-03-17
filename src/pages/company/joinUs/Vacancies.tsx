import { FC } from 'react';
import Button from '../../../components/Button';
import data from "../data.json";
import Typography from '../../../components/Typography';

const Vacancies: FC = () => {
  return (
    <div
      className="mt-[49px] h-[365px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url('/images/company/header.jpg')` }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Typography content={data.career.title} size='text-[24px]' color='text-white' variant='font-bold' />
        <Typography content={data.career.content} className='mt-4 max-w-[1014px] text-center text-white' />
        <Button
          name="Vacancies"
          className={`mt-6 h-[54px] w-[150px] items-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054]`}
          icon="arrowRight"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Vacancies;
