import { FC } from 'react';
import Icon from '../../../components/Icon';
import data from "../data.json";
import Typography from '../../../components/Typography';

const JoinUs: FC = () => {
  return (
    <div className="w-full flex justify-center bg-gradient-to-r from-teal-600 via-teal-800 to-indigo-800">
      <div className="px-[127px] pt-14 max-w-[1440px]">
        <Typography content={data.joinUs.title} size='text-[30px]' color='text-white' variant='font-bold' />
        <div className="mt-6 bg-opacity-90 font-[500] text-white">
          <Typography content={data.joinUs.content} color='text-white' />
          <Typography content={data.joinUs.subContent} color='text-white' className='mt-6' />
        </div>
        <div className="mt-9 flex justify-between w-full gap-11">
          <div className="max-w-[364px]">
            <div className="flex gap-2">
              <Icon name="know-how" />
              <Typography content={data.benefits.title} size='text-[24px]' variant='font-bold' color='text-white' className='leading-[29px]' />
            </div>
            <Typography content={data.benefits.content} className='mt-4' color='text-white' />
          </div>
          <div className="max-w-[364px] mt-10">
            <div className="flex items-center gap-2">
              <Icon name="talanted" />
              <Typography content={data.growth.title} size='text-[24px]' variant='font-bold' color='text-white' className='leading-[29px]' />
            </div>
            <Typography content={data.growth.content} className='mt-4 pb-14' color='text-white' />
          </div>
          <div className="max-w-[364px]">
            <div className="flex items-center gap-2">
              <Icon name="time" />
              <Typography content={data.development.title} size='text-[24px]' color='text-white' variant='font-bold' className='leading-[29px]' />
            </div>
            <Typography content={data.development.content} color='text-white' className='mt-4' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;