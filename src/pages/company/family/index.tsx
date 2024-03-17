import { FC } from 'react';
import Card from '../../../components/Card';
import data from "../data.json";
import Typography from '../../../components/Typography';

const Family: FC = () => {
  return (
    <div className="mt-14 flex w-full flex-col max-w-[1440px] m-auto">
      <div className="max-w-[1184px] pl-[133px]">
        <Typography content={data.family.title} size='text-[30px]' color='text-[#009462]' variant='font-bold' />
        <Typography content={data.family.subtitle} size='text-[18px]' className='!font-[500] mt-3' />
        <Typography content={data.family.content} className='mt-6' color='text-[#595959]' />
      </div>
      <div className="flex justify-center gap-9 mt-9">
        <Card
          avatar="/images/avatars/paul.png"
          name="Michaelis, Paul"
          subtitle="Board Member, Leipzig, Germany."
          text="Leads the board in setting strategic goals and objectives to ensure the company's growth and success in the field of clinical data management, statistics, and bio- informatics."
        />
        <Card
          avatar="/images/avatars/diego.png"
          name="González, Diego"
          subtitle="Board Member, Yerevan, Armenia."
          text="Contributes to board discussions and decision-making processes to shape the company's strategic direction and ensure its long-term viability and success in the field of clinical data management."
          className='mt-9 pb-14'
        />
        <Card
          avatar="/images/avatars/armen.png"
          name="Stepanyan , Armen"
          subtitle="Chief Statistical Officer, Yerevan, Armenia."
          text="Oversees the statistical operations of the company, ensuring the integrity and accuracy of data analysis and reporting for clinical research projects."
        />
      </div>
    </div>
  );
};

export default Family;
