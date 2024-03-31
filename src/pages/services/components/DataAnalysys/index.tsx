import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button';
import Typography from '../../../../components/Typography';
import data from './data.json';
import ButtonMobile from '../../../../components/ButtonMobile';
import CarouselSlider from '../../../../components/CarouselSlider';
import IconTitleInfoComponent from '../IconTitleInfoComponent';

const DataAnalysys = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-desktop px-[18px] py-9  md:px-32 md:py-[54px]">
      <div className="flex flex-col ">
        <Typography
          content={data.header.title}
          size="text-[29px] md:text-title"
          variant="font-extrabold"
          color="text-[#00A791]"
        />
        <Typography content={data.header.content_first} className="mt-3 md:mt-6 md:text-justify" />
        <Typography
          content={data.header.content_second}
          className="mt-4 hidden text-justify md:block"
        />
      </div>

      <div className="hidden md:block">
        <div className="mt-9 flex gap-x-20">
          {data.content
            .filter((_, index) => index % 2 === 0)
            .map((el) => (
              <IconTitleInfoComponent
                iconId={el.iconId}
                iconSrc={el.iconSrc}
                titleColor={el.titleColor}
                title={el.title}
                descriptionFirst={el.descriptionFirst}
                descriptionSecond={el.descriptionSecond}
              />
            ))}
        </div>
        <div className="mt-6 flex gap-x-20">
          {data.content
            .filter((_, index) => index % 2 !== 0)
            .map((el) => (
              <IconTitleInfoComponent
                iconId={el.iconId}
                iconSrc={el.iconSrc}
                titleColor={el.titleColor}
                title={el.title}
                descriptionFirst={el.descriptionFirst}
                descriptionSecond={el.descriptionSecond}
              />
            ))}
        </div>
      </div>
      <CarouselSlider className="mt-[42px]">
        {data.content.map((el) => (
          <IconTitleInfoComponent
            iconId={el.iconId}
            iconSrc={el.iconSrc}
            titleColor={el.titleColor}
            title={el.title}
            descriptionFirst={el.descriptionFirst}
            descriptionSecond={el.descriptionFirst}
          />
        ))}
      </CarouselSlider>

      <div className="mt-9 flex justify-center md:justify-end">
        <ButtonMobile
          children="Contact us"
          onClick={() => navigate('/contact')}
          className="mt-9 h-[46px] w-full max-w-[324px] items-center justify-center bg-[#009462] py-3 text-base font-normal md:hidden"
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

export default DataAnalysys;
