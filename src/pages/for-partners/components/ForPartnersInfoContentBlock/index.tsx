import Button from '../../../../components/Button';
import Typography from '../../../../components/Typography';

import data from './data.json';

const ForPartnersInfoContentBlock = () => (
  <div className="mx-auto max-w-desktop px-32 py-[54px]">
    <Typography
      content={data.header.title}
      size="text-2xl"
      variant="font-extrabold"
      color="text-[#00A791]"
      className="text-justify"
    />
    <Typography content={data.header.description} className="mt-4 text-justify" />
    <Typography
      content={data.reasons.title}
      size="text-xl"
      variant="font-extrabold"
      color="text-[#215C99]"
      className="mb-5 mt-[54px] text-justify"
    />
    {data.reasons.content.map((el) => (
      <div className="mt-5" key={el.title}>
        <Typography
          content={el.title}
          size="text-xl"
          variant="font-bold"
          color={`text-[${el.titleColor}]`}
          className="text-justify"
        />
        <Typography content={el.description} className="mt-4 text-justify" />
      </div>
    ))}
    <div className="mt-9 flex justify-end">
      <Button
        name="Contact us"
        className={`h-[54px] w-[172px] items-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054]`}
        icon="select"
        iconClassName={`w-[24px] h-[24px]`}
        onClick={() => {}}
      />
    </div>
  </div>
);

export default ForPartnersInfoContentBlock;
