import { useNavigate } from 'react-router-dom';

import data from '../data.json';

import Typography from '../../../../../components/Typography';
import ButtonMobile from '../../../../../components/ButtonMobile';

const HeroMobile = () => {
  const navigate = useNavigate();
  return (
    <div
      id="current-contracts"
      className="h-fit min-h-[508px] w-full bg-cover bg-center bg-no-repeat md:hidden"
      style={{
        backgroundImage: 'url("/images/for-partners/hero-mobile-bg.png")'
      }}
    >
      <div className="mx-auto h-full max-w-mobile px-[18px] py-6">
        <Typography
          content={data.header.title}
          size="text-[28px]"
          variant="font-bold"
          color="text-white"
          className="leading-10"
        />
        <Typography content={data.header.description_one} color="text-white" className="mt-3" />
        <div className="mx-auto mt-9 flex flex-col items-center justify-center gap-3">
          <ButtonMobile
            children="Our Services"
            onClick={() => navigate('/services')}
            className="h-[46px] w-full max-w-[324px] items-center justify-center bg-[#009462] py-3 text-base font-normal"
          />
          <ButtonMobile
            children="For Partners"
            onClick={() => navigate('/for-partners')}
            className="h-[46px] w-full max-w-[324px] items-center justify-center border border-white bg-[#FFFFFF1A] py-3 text-base font-normal"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;
