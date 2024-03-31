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
        className="h-[379px] w-full bg-cover bg-bottom pl-32 pt-[111px] max-md:h-[246px] max-md:px-[18px] max-md:pt-6"
        style={{ backgroundImage: `url('/images/company/hero.png')` }}
      >
        <div className="m-auto max-w-[1440px] max-md:max-w-[324px]">
          <div className="max-md:max-w-[229px]">
            <Typography
              content={data.hero.title}
              color="text-white"
              size="text-[32px]"
              className="leading-10 max-md:text-[20px] max-md:leading-[22px]"
              variant="font-bold"
            />
            <Typography
              content={data.hero.content}
              color="text-white"
              size="text-[32px]"
              className="leading-10 max-md:text-[20px] max-md:leading-[22px]"
              variant="font-bold"
            />
          </div>
          <div className="mt-6 flex gap-4 max-md:flex-col max-md:gap-3">
            <Button
              name="Our Services"
              className={`h-[54px] w-[172px] items-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054] max-md:hidden`}
              icon="arrowRight"
              onClick={() => navigate('/Services')}
            />
            <Button
              name="For Partners"
              className={`h-[54px] w-[172px] items-center border border-white px-[20px] py-[16px] hover:border-[#008054] hover:text-[#008054] max-md:hidden`}
              icon="arrowRight"
              onClick={() => navigate('/for-partners')}
              isSpecial
            />
            <Button
              name="Our Services"
              className={`hidden h-[54px] w-full items-center !justify-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054] max-md:flex`}
              onClick={() => navigate('/Services')}
            />
            <Button
              name="For Partners"
              className={`hidden h-[54px] w-full items-center !justify-center border border-white px-[20px] py-[16px] hover:border-[#008054] hover:text-[#008054] max-md:flex`}
              onClick={() => navigate('/for-partners')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
