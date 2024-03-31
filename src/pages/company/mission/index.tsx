import { FC, useState } from 'react';
import Icon from '../../../components/Icon';
import data from '../data.json';
import Typography from '../../../components/Typography';

const Mission: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <div
      id='mission'
      className={`flex min-h-[333px] w-full justify-center bg-gradient-to-br from-[#009462] to-[#3B579D] ${activeTab === 2 ? 'max-md:h-[500px]' : 'max-md:h-[434px]'}`}
    >
      <div className="container mx-32 mb-9 mt-9 flex max-w-[1440px] justify-around gap-10 max-md:mx-4 max-md:max-w-[324px] max-md:flex-col max-md:justify-center max-md:gap-0">
        <div className={`max-w-[526px] ${activeTab === 1 ? '' : 'max-md:hidden'}`}>
          <div className="flex items-center gap-2">
            <Icon name="points" />
            <Typography
              content={data.mission.title}
              className="!text-[24px] text-white"
              variant="font-bold"
            />
          </div>
          <Typography
            content={data.mission.content}
            className="mt-4 text-justify leading-6 text-white"
          />
        </div>
        <div
          className={`max-w-[526px] ${activeTab === 2 ? '' : 'max-md:hidden'} max-md:max-w-full max-md:pr-0`}
        >
          <div className="flex items-center gap-2">
            <Icon name="points" />
            <Typography
              content={data.vision.title}
              className="!text-[24px] text-white"
              variant="font-bold"
            />
          </div>
          <Typography
            content={data.vision.content}
            className="left-6 mt-4 text-justify text-white"
          />
        </div>
        <div className="m-auto mt-14 hidden gap-2 max-md:flex">
          <div
            className={`h-[14px] w-[14px] rounded-full border-[2px] border-white ${activeTab === 1 ? 'bg-[#009462]' : 'bg-white'}`}
            onClick={() => setActiveTab(1)}
          ></div>
          <div
            className={`h-[14px] w-[14px] rounded-full border-[2px] border-white ${activeTab === 2 ? 'bg-[#009462]' : 'bg-white'} bg-[#009462]`}
            onClick={() => setActiveTab(2)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
