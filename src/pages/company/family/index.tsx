import { FC } from 'react';
import Card from '../../../components/Card';
import data from '../data.json';
import Typography from '../../../components/Typography';
import CarouselSlider from '../../../components/CarouselSlider';

const Family: FC = () => {
  return (
    <div id='family' className="m-auto mt-14 flex w-full max-w-[1440px] flex-col max-md:mt-9">
      <div className="max-w-[90%] pl-[133px] max-md:pl-[18px]">
        <Typography
          content={data.family.title}
          size="text-[30px]"
          color="text-[#009462]"
          variant="font-bold"
        />
        <Typography
          content={data.family.subtitle}
          size="text-[18px]"
          className="mt-3 !font-[500] max-md:mt-0"
        />
        <Typography
          content={data.family.content}
          className="mt-6 text-justify"
          color="text-[#595959]"
        />
      </div>
      <div className="mt-9 flex justify-center gap-9 max-md:pb-9 max-md:hidden">
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
          className={`mt-9 pb-14`}
        />
        <Card
          avatar="/images/avatars/armen.png"
          name="Stepanyan , Armen"
          subtitle="Chief Statistical Officer, Yerevan, Armenia."
          text="Oversees the statistical operations of the company, ensuring the integrity and accuracy of data analysis and reporting for clinical research projects."
        />
      </div>
      <CarouselSlider className='mt-9 flex justify-center flex-col m-a max-md:pb-9'>
      <Card
          avatar="/images/avatars/paul.png"
          name="Michaelis, Paul"
          subtitle="Board Member, Leipzig, Germany."
          className='m-auto'
          text="Leads the board in setting strategic goals and objectives to ensure the company's growth and success in the field of clinical data management, statistics, and bio- informatics."
        />
        <Card
          avatar="/images/avatars/diego.png"
          name="González, Diego"
          subtitle="Board Member, Yerevan, Armenia."
          text="Contributes to board discussions and decision-making processes to shape the company's strategic direction and ensure its long-term viability and success in the field of clinical data management."
          className={`mt-9 pb-14 m-auto`}
        />
        <Card
          avatar="/images/avatars/armen.png"
          name="Stepanyan , Armen"
          subtitle="Chief Statistical Officer, Yerevan, Armenia."
          className='m-auto'
          text="Oversees the statistical operations of the company, ensuring the integrity and accuracy of data analysis and reporting for clinical research projects."
        />
      </CarouselSlider>
    </div>
  );
};

export default Family;
