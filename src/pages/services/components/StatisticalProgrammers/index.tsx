import Typography from '../../../../components/Typography';
import data from './data.json';

const StatisticalProgrammers = () => (
  <div className="mx-auto max-w-desktop px-[178px] py-[54px]">
    <div className="flex items-center gap-x-3">
      <img
        id="svg_one"
        src="/images/icons/services_bullets_icon_light_green.svg"
        alt="Services Blur SVG Green"
      />
      <Typography
        content={data.statisticalProgrammers.title}
        size="text-2xl"
        variant="font-extrabold"
        color="text-[#67C15E]"
      />
    </div>
    <Typography
      content={data.statisticalProgrammers.content}
      color="text-[#111111]"
      className="mt-4 text-justify"
    />
    <Typography
      content={data.statisticalProgrammers.weOffer.title}
      size="text-xl"
      variant="font-semibold"
      color="text-[#67C15E]"
      className="mt-8 text-justify"
    />
    <div className=" mt-4 flex gap-x-36">
      <ul className="list-disc pl-4">
        <li className="text-primary">
          <Typography
            content={data.statisticalProgrammers.weOffer.bullet_1}
            className="text-justify"
          />
        </li>
        <li className="text-primary">
          <Typography
            content={data.statisticalProgrammers.weOffer.bullet_2}
            className="mt-[22px] text-justify"
          />
        </li>
      </ul>
      <ul className="list-disc">
        <li className="text-primary">
          <Typography
            content={data.statisticalProgrammers.weOffer.bullet_3}
            className="text-justify"
          />
        </li>
        <li className="text-primary">
          <Typography
            content={data.statisticalProgrammers.weOffer.bullet_4}
            className="mt-[22px] text-justify"
          />
        </li>
      </ul>
    </div>
  </div>
);

export default StatisticalProgrammers;
