import data from './data.json';

import Typography from '../../../../components/Typography';
import Button from '../../../../components/Button';

const Hero = () => {
  return (
    <div
      className="h-[454px] w-full"
      style={{
        // background: `url(/images/backgroundImages/cdics-hero-bg.png), linear-gradient(102.82deg, #080D12 19%, #102136 75.38%)`,
        background: `linear-gradient(102.82deg, #080D12 19%, #102136 75.38%)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div
        className="mx-auto flex h-full max-w-desktop flex-col px-32 py-[64px]"
        style={{
          backgroundImage: 'url("/images/backgroundImages/for-partners-hero-bg.png")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
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
            onClick={() => {}}
          />
          <Button
            name="For Services"
            className={`h-[54px] w-[172px] items-center border px-[20px] py-[16px] hover:border-[#008054] hover:text-[#008054]`}
            icon="select"
            iconClassName={`w-[24px] h-[24px]`}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
