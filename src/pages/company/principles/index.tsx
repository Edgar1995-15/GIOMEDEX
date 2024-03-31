import { FC, useState } from 'react';
import Icon from '../../../components/Icon';
import data from '../data.json';
import Typography from '../../../components/Typography';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

const Principles: FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMoreGio, setShowMoreGio] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="m-auto w-full max-w-[1440px] bg-white px-32 pt-12 max-md:pt-9 max-md:px-[18px]">
      <div>
        <Typography
          content={data.principles.title}
          variant="font-bold"
          size="text-[30px]"
          color="text-[#00707E]"
        />
        <Typography
          content={data.principles.content}
          className="mt-6 leading-4"
          color="text-[#595959]"
        />
      </div>
      <div className="mt-9 flex w-full gap-10 justify-between max-md:flex-col">
        <div>
          <div className="flex items-center gap-4">
            <Icon name="know-how" />
            <Typography
              content={data['know-how'].title}
              color="text-[#009462]"
              variant="font-bold"
            />
          </div>
          <div className="mt-4 flex max-w-[542px] flex-col gap-9 text-[#595959] max-md:gap-3">
            <Typography content={data['know-how'].content1} className="text-justify" />
            <Typography content={data['know-how'].content2} className="text-justify" />
            {!showMore && <span className='text-[#00946299] underline hidden max-md:block' onClick={() => setShowMore(true)}>Read More</span>}
            <Typography content={data['know-how'].content3} className={`text-justify ${showMore ? "max-md:block" : "max-md:hidden"}`} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 max-md:pt-9">
            <Icon name="talanted" />
            <Typography
              content={data.whyGiomedex.title}
              color="text-[#66CAC4]"
              variant="font-bold"
            />
          </div>
          <div className="mt-4 flex max-w-[542px] flex-col gap-9 text-[#595959] max-md:gap-3">
            <Typography content={data.whyGiomedex.content1} className="text-justify" />
            <Typography content={data.whyGiomedex.content2} className="text-justify" />
            <Typography content={data.whyGiomedex.content3} className={`text-justify ${showMoreGio ? "max-md:block" : "max-md:hidden"}`} />
            <Typography content={data.whyGiomedex.content4} className={`text-justify ${showMoreGio ? "max-md:block" : "max-md:hidden"}`} />
            <Typography content={data.whyGiomedex.content5} className={`text-justify ${showMoreGio ? "max-md:block" : "max-md:hidden"}`} />
            <Typography content={data.whyGiomedex.content6} className={`text-justify ${showMoreGio ? "max-md:block" : "max-md:hidden"}`} />
            {!showMoreGio && <span className='text-[#00946299] underline hidden max-md:block' onClick={() => setShowMoreGio(true)}>Read More</span>}
          </div>
        </div>
      </div>
      <Button name='Our Services' onClick={() => navigate('/Services')} className='bg-[#009462] mt-9 w-full h-[46px] m-auto !justify-center items-center hidden max-md:flex' />
    </div>
  );
};

export default Principles;
