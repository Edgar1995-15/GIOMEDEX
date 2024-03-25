import { FC, useState } from 'react';
import Card from '../../../components/Card';
import data from '../data.json';
import Typography from '../../../components/Typography';

const Family: FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="m-auto mt-14 flex w-full max-w-[1440px] flex-col max-md:mt-9 max-md:max-w-[324px]">
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
      <div className="mt-9 flex justify-center gap-9 max-md:pb-9">
        <Card
          avatar="/images/avatars/paul.png"
          name="Michaelis, Paul"
          subtitle="Board Member, Leipzig, Germany."
          text="Leads the board in setting strategic goals and objectives to ensure the company's growth and success in the field of clinical data management, statistics, and bio- informatics."
          className={`${activeTab === 1 ? "" : "max-md:hidden"}`}
        />
        <Card
          avatar="/images/avatars/diego.png"
          name="González, Diego"
          subtitle="Board Member, Yerevan, Armenia."
          text="Contributes to board discussions and decision-making processes to shape the company's strategic direction and ensure its long-term viability and success in the field of clinical data management."
          className={`mt-9 pb-14 ${activeTab === 2 ? "" : "max-md:hidden"}`}
        />
        <Card
          avatar="/images/avatars/armen.png"
          name="Stepanyan , Armen"
          subtitle="Chief Statistical Officer, Yerevan, Armenia."
          text="Oversees the statistical operations of the company, ensuring the integrity and accuracy of data analysis and reporting for clinical research projects."
          className={`${activeTab === 3 ? "" : "max-md:hidden"}`}
        />
      </div>
      <div className="m-auto my-9 hidden gap-2 max-md:flex">
        <div
          className={`h-[14px] w-[14px] rounded-full border-[2px] border-white ${activeTab === 1 ? 'bg-[#009462]' : 'bg-[#E1E1E1]'}`}
          onClick={() => setActiveTab(1)}
        ></div>
        <div
          className={`h-[14px] w-[14px] rounded-full border-[2px] border-white ${activeTab === 2 ? 'bg-[#009462]' : 'bg-[#E1E1E1]'} bg-[#009462]`}
          onClick={() => setActiveTab(2)}
        ></div>
        <div
          className={`h-[14px] w-[14px] rounded-full border-[2px] border-white ${activeTab === 3 ? 'bg-[#009462]' : 'bg-[#E1E1E1]'} bg-[#009462]`}
          onClick={() => setActiveTab(3)}
        ></div>
      </div>
    </div>
  );
};

export default Family;
