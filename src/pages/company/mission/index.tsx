import { FC } from 'react';
import Icon from '../../../components/Icon';
import data from "../data.json";
import Typography from '../../../components/Typography';

const Mission: FC = () => {
  return (
    <div className="flex h-[333px] w-full justify-center bg-gradient-to-br from-[#009462] to-[#3B579D]">
      <div className="container mt-9 flex justify-between ml-32 max-w-[1440px]">
        <div className="max-w-[45%]">
          <div className="flex items-center gap-2">
            <Icon name="points" />
            <Typography content={data.mission.title} className='!text-[24px] text-white' variant='font-bold' />
          </div>
          <Typography content={data.mission.content} className='mt-4 text-white' />
        </div>
        <div className="max-w-[47%] pr-[128px]">
          <div className="flex items-center gap-2">
            <Icon name="points" />
            <Typography content={data.vision.title} className='!text-[24px] text-white' variant='font-bold' />
          </div>
          <Typography content={data.vision.content} className='mt-4 text-white' />
        </div>
      </div>
    </div>
  );
};

export default Mission;
