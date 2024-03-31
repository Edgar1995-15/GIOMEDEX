import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button';
import Typography from '../../../../components/Typography';

import data from './data.json';
import ButtonMobile from '../../../../components/ButtonMobile';

const KeyPerformance = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: `linear-gradient(100.15deg, #1C616A -4.57%, #132642 83.84%)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="mx-auto max-w-desktop px-[18px] py-9 md:px-32 md:py-[54px]">
        <div className="flex items-start gap-x-3 md:mb-3 md:items-center">
          <img
            id="svg_one"
            src="/images/icons/quality-policy-label-icon-teal.svg"
            alt="Services Blur SVG Green"
          />
          <Typography
            content={data.keyPerformance.title}
            size="text-2xl"
            variant="font-extrabold"
            color="text-white"
            className="md:text-justify"
          />
        </div>
        {data.keyPerformance.content.map((el) => (
          <div className="mt-9 md:mt-5" key={el.title}>
            <Typography
              content={el.title}
              size="text-xl"
              variant="font-bold"
              color="text-white"
              className="md:text-justify"
            />
            <Typography
              content={el.description}
              color="text-white"
              className="mt-3 md:mt-4 md:text-justify"
            />
          </div>
        ))}
        <div className="mt-6 flex justify-center md:mt-9 md:justify-end">
          <ButtonMobile
            children="Contact us"
            onClick={() => navigate('/contact')}
            className="h-[46px] w-full max-w-[324px] items-center justify-center bg-[#009462] py-3 text-base font-normal md:hidden"
          />
          <div className="hidden md:block">
            <Button
              name="Contact us"
              className={`h-[54px] w-[172px] items-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054]`}
              icon="select"
              iconClassName={`w-[24px] h-[24px]`}
              onClick={() => navigate('/contact')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPerformance;
