import { FC } from 'react';
import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import data from '../data.json';
import { useNavigate } from 'react-router-dom';

const Hero: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div
        className="h-[379px] w-full bg-cover bg-bottom pl-32 pt-[111px] mobileMax:h-[246px] mobileMax:pl-[18px] mobileMax:pt-6"
        style={{ backgroundImage: `url('/images/company/hero.png')` }}
      >
        <div className="m-auto max-w-[1440px] mobileMax:max-w-[324px]">
          <div className="mobileMax:max-w-[229px]">
            <Typography
              content={data.hero.title}
              color="text-white"
              size="text-[32px]"
              className="leading-10 mobileMax:text-[20px] mobileMax:leading-[22px]"
              variant="font-bold"
            />
            <Typography
              content={data.hero.content}
              color="text-white"
              size="text-[32px]"
              className="leading-10 mobileMax:text-[20px] mobileMax:leading-[22px]"
              variant="font-bold"
            />
          </div>
          <div className="mt-6 flex gap-4 mobileMax:flex-col mobileMax:gap-3">
            <Button
              name="Our Services"
              className={`h-[54px] w-[172px] items-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054] mobileMax:hidden`}
              icon="arrowRight"
              onClick={() => navigate('/Services')}
            />
            <Button
              name="For Partners"
              className={`h-[54px] w-[172px] items-center border border-white px-[20px] py-[16px] hover:border-[#008054] hover:text-[#008054] mobileMax:hidden`}
              icon="arrowRight"
              onClick={() => navigate('/for-partners')}
            />
            <Button
              name="Our Services"
              className={`h-[54px] w-[324px] items-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054] hidden mobileMax:flex !justify-center`}
              onClick={() => navigate('/Services')}
            />
            <Button
              name="For Partners"
              className={`h-[54px] w-[324px] items-center border border-white px-[20px] py-[16px] hover:border-[#008054] hover:text-[#008054] hidden mobileMax:flex !justify-center`}
              onClick={() => navigate('/for-partners')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
