import { FC } from 'react';
import Icon from '../../../components/Icon';
import data from "../data.json";
import Typography from '../../../components/Typography';

const Principles: FC = () => {
  return (
    <div className="w-full bg-white px-32 pt-12 max-w-[1440px] m-auto">
      <div>
        <Typography content={data.principles.title} variant='font-bold' size='text-[30px]' color='text-[#00707E]' />
        <Typography content={data.principles.content} className='leading-4 mt-6' color='text-[#595959]' />
      </div>
      <div className="mt-9 flex w-full justify-between">
        <div>
          <div className="flex items-center gap-4">
            <Icon name="know-how" />
            <Typography content={data['know-how'].title} color='text-[#009462]' variant='font-bold' />
          </div>
          <div className="mt-4 flex max-w-[542px] flex-col gap-9 text-[#595959]">
            <Typography content={data['know-how'].content1} />
            <Typography content={data['know-how'].content2} />
            <Typography content={data['know-how'].content3} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <Icon name="talanted" />
            <Typography content={data.whyGiomedex.title} color='text-[#66CAC4]' variant='font-bold' />
          </div>
          <div className="mt-4 flex max-w-[542px] flex-col gap-9 text-[#595959]">
            <Typography content={data.whyGiomedex.content1} />
            <Typography content={data.whyGiomedex.content2} />
            <Typography content={data.whyGiomedex.content3} />
            <Typography content={data.whyGiomedex.content4} />
            <Typography content={data.whyGiomedex.content5} />
            <Typography content={data.whyGiomedex.content6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principles;
