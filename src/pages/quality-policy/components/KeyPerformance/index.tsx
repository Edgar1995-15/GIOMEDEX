import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button';
import Typography from '../../../../components/Typography';

import data from './data.json';

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
      <div className="mx-auto max-w-desktop px-32 py-[54px]">
        <div className="mb-3 flex items-center gap-x-3">
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
            className="text-justify"
          />
        </div>
        {data.keyPerformance.content.map((el) => (
          <div className="mt-5" key={el.title}>
            <Typography
              content={el.title}
              size="text-xl"
              variant="font-bold"
              color="text-white"
              className="text-justify"
            />
            <Typography content={el.description} color="text-white" className="mt-4 text-justify" />
          </div>
        ))}
        <div className="mt-9 flex justify-end">
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
  );
};

export default KeyPerformance;
