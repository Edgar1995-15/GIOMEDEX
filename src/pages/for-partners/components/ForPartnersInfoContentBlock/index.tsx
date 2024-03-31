import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button';
import Typography from '../../../../components/Typography';

import data from './data.json';
import ButtonMobile from '../../../../components/ButtonMobile';

const ForPartnersInfoContentBlock = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-desktop px-[18px] py-9 md:px-32 md:py-[54px]">
      <Typography
        content={data.header.title}
        size="text-2xl"
        variant="font-extrabold"
        color="text-[#00A791]"
        className="md:text-justify"
      />
      <Typography content={data.header.description} className="mt-3 md:mt-4 md:text-justify" />
      <Typography
        content={data.reasons.title}
        size="text-xl"
        variant="font-extrabold"
        color="text-[#215C99]"
        className="mt-9 md:mb-5 md:mt-[54px] md:text-justify"
      />
      {data.reasons.content.map((el) => (
        <div className="mt-6 md:mt-5" key={el.title}>
          <Typography
            content={el.title}
            size="text-xl"
            variant="font-bold"
            color={`text-[${el.titleColor}]`}
            className="md:text-justify"
          />
          <Typography content={el.description} className="mt-3 md:mt-4 md:text-justify" />
        </div>
      ))}
      <div className="mt-9 flex justify-center md:justify-end">
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
  );
};

export default ForPartnersInfoContentBlock;
