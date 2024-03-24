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
        className="h-[379px] w-full bg-cover bg-bottom pl-32 pt-[111px]"
        style={{ backgroundImage: `url('/images/company/hero.png')` }}
      >
        <div className="m-auto max-w-[1440px]">
          <div>
            <Typography
              content={data.hero.title}
              color="text-white"
              size="text-[32px]"
              className="leading-10"
              variant="font-bold"
            />
            <Typography
              content={data.hero.content}
              color="text-white"
              size="text-[32px]"
              className="leading-10"
              variant="font-bold"
            />
          </div>
          <div className="mt-6 flex gap-4">
            <Button
              name="Our Services"
              className={`h-[54px] w-[172px] items-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054]`}
              icon="arrowRight"
              onClick={() => navigate('/Services')}
            />
            <Button
              name="For Partners"
              className={`h-[54px] w-[172px] items-center border border-white px-[20px] py-[16px] hover:border-[#008054] hover:text-[#008054]`}
              icon="arrowRight"
              onClick={() => navigate('/for-partners')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
