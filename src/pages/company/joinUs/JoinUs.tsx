import { FC, useState } from 'react';
import Icon from '../../../components/Icon';
import data from '../data.json';
import Typography from '../../../components/Typography';

const JoinUs: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <div className="flex w-full justify-center bg-gradient-to-r from-teal-600 via-teal-800 to-indigo-800">
      <div className="max-w-[1440px] px-[127px] pt-14 max-md:px-4">
        <Typography
          content={data.joinUs.title}
          size="text-[30px]"
          color="text-white"
          variant="font-bold"
        />
        <div className="mt-6 bg-opacity-90 font-[500] text-white">
          <Typography content={data.joinUs.content} color="text-white" className="text-justify" />
          <Typography
            content={data.joinUs.subContent}
            color="text-white"
            className="mt-6 text-justify"
          />
        </div>
        <div className="mt-9 flex w-full justify-between gap-11 max-md:justify-center max-md:pb-9">
          <div className={`max-w-[364px] ${activeTab === 1 ? "" : "max-md:hidden"}`}>
            <div className="flex gap-2">
              <Icon name="know-how" />
              <Typography
                content={data.benefits.title}
                size="text-[24px]"
                variant="font-bold"
                color="text-white"
                className="leading-[29px]"
              />
            </div>
            <Typography
              content={data.benefits.content}
              className="mt-4 text-justify"
              color="text-white"
            />
          </div>
          <div className={`mt-10 max-w-[364px] ${activeTab === 2 ? "" : "max-md:hidden"}`}>
            <div className="flex items-center gap-2">
              <Icon name="talanted" />
              <Typography
                content={data.growth.title}
                size="text-[24px]"
                variant="font-bold"
                color="text-white"
                className="leading-[29px]"
              />
            </div>
            <Typography
              content={data.growth.content}
              className="mt-4 pb-14 text-justify"
              color="text-white"
            />
          </div>
          <div className={`max-w-[364px] ${activeTab === 3 ? "" : "max-md:hidden"}`}>
            <div className="flex items-center gap-2">
              <Icon name="time" />
              <Typography
                content={data.development.title}
                size="text-[24px]"
                color="text-white"
                variant="font-bold"
                className="leading-[29px]"
              />
            </div>
            <Typography
              content={data.development.content}
              color="text-white"
              className="mt-4 text-justify"
            />
          </div>
        </div>
        <div className="m-auto mt-9 hidden gap-2 max-md:flex mb-14 justify-center">
          <div
            className={`h-[14px] w-[14px] rounded-full border-[2px] border-white ${activeTab === 1 ? 'bg-[#009462]' : 'bg-white'}`}
            onClick={() => setActiveTab(1)}
          ></div>
          <div
            className={`h-[14px] w-[14px] rounded-full border-[2px] border-white ${activeTab === 2 ? 'bg-[#009462]' : 'bg-white'} bg-[#009462]`}
            onClick={() => setActiveTab(2)}
          ></div>
          <div
            className={`h-[14px] w-[14px] rounded-full border-[2px] border-white ${activeTab === 3 ? 'bg-[#009462]' : 'bg-white'} bg-[#009462]`}
            onClick={() => setActiveTab(3)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
