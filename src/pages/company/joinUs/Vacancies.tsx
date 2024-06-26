import { FC } from 'react';
import Button from '../../../components/Button';
import data from '../data.json';
import Typography from '../../../components/Typography';
import { useNavigate } from 'react-router-dom';

const Vacancies: FC = () => {
  const navigate = useNavigate();
  return (
    <div
      id='vacancies'
      className="mt-[49px] h-[365px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url('/images/company/joinus.png')` }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center max-md:m-auto max-md:max-w-[324px]">
        <Typography
          content={data.career.title}
          size="text-[24px]"
          color="text-white"
          variant="font-bold"
          className="max-md:text-[18px]"
        />
        <Typography
          content={data.career.content}
          className="mt-4 max-w-[1014px] text-center text-white max-md:hidden"
        />
        <Button
          name="Vacancies"
          className={`mt-6 h-[54px] w-[150px] items-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054] max-md:hidden`}
          icon="arrowRight"
          onClick={() => {navigate(`?id=Our Vacancies`)}}
        />
        <Button
          name="Vacancies"
          className={`mt-6 hidden h-[54px] w-full items-center !justify-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054] max-md:flex`}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Vacancies;
