import { useNavigate } from 'react-router-dom';

import data from './data.json';

import Typography from '../../../../components/Typography';
import Button from '../../../../components/Button';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="hidden h-[454px] w-full bg-cover bg-center bg-no-repeat md:block"
      style={{
        backgroundImage: 'url("/images/for-partners/hero-bg.png")'
      }}
    >
      <div className="mx-auto flex h-full max-w-desktop flex-col px-32 py-[64px]">
        <Typography
          content={data.header.title}
          size="text-title"
          variant="font-bold"
          color="text-white"
          className="text-justify"
        />
        <Typography
          content={data.header.description_one}
          variant="font-normal"
          color="text-white"
          className="mt-9 text-justify"
        />
        <Typography
          content={data.header.description_two}
          variant="font-normal"
          color="text-white"
          className="mt-4 text-justify"
        />
        <div className="mt-6 flex gap-4">
          <Button
            name="Our Services"
            className={`h-[54px] w-[172px] items-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054]`}
            icon="select"
            iconClassName={`w-[24px] h-[24px]`}
            onClick={() => navigate('/services')}
          />
          <Button
            name="For Partners"
            className={`h-[54px] w-[172px] items-center border px-[20px] py-[16px] hover:border-[#008054] hover:text-[#008054]`}
            icon="select"
            iconClassName={`w-[24px] h-[24px]`}
            onClick={() => navigate('/for-partners')}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
