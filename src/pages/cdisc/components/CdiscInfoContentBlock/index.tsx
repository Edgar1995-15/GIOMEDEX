import Typography from '../../../../components/Typography';
import data from './data.json';

const CdiscInfoContentBlock = () => (
  <div className="mx-auto max-w-desktop px-[18px] py-9 md:px-32 md:py-[54px]">
    <div className="flex flex-col gap-x-20 md:flex-row">
      <div className="md:w-1/2">
        <div className="flex items-start gap-x-2 md:items-center">
          <img
            id="svg_one"
            src="/images/icons/services_blur_on_icon_green.svg"
            alt="Services Blur SVG Green"
          />
          <Typography
            content={data.sdtm.title}
            size="text-2xl"
            variant="font-extrabold"
            color="text-[#009462]"
          />
        </div>
        <Typography content={data.sdtm.content} className="mt-3 md:mt-4 md:text-justify" />
      </div>
      <div className="mt-9 md:mt-0 md:w-1/2">
        <div className="flex items-start gap-x-2 md:items-center">
          <img
            id="svg_two"
            src="/images/icons/services_blur_on_icon_teal.svg"
            alt="Services Blur SVG Teal"
          />
          <Typography
            content={data.adam.title}
            size="text-2xl"
            variant="font-extrabold"
            color="text-[#00A79D]"
          />
        </div>
        <Typography content={data.adam.content} className="mt-3 md:mt-4 md:text-justify" />
      </div>
    </div>

    <div className="mt-0 flex flex-col gap-x-20 md:mt-8 md:flex-row">
      <div className="mt-9 md:mt-0 md:w-1/2">
        <div className="flex items-start gap-x-2 md:items-center">
          <img
            id="svg_one"
            src="/images/icons/services_blur_on_icon_blue.svg"
            alt="Services Blur SVG Blue"
          />
          <Typography
            content={data.tlf.title}
            size="text-2xl"
            variant="font-extrabold"
            color="text-[#215C99]"
          />
        </div>
        <Typography content={data.tlf.content} className="mt-3 md:mt-4 md:text-justify" />
      </div>
      <div className="mt-9 md:mt-0 md:w-1/2">
        <div className="flex items-start gap-x-2 md:items-center">
          <img
            id="svg_two"
            src="/images/icons/services_blur_on_icon_light_blue.svg"
            alt="Services Blur SVG Light Green"
          />
          <Typography
            content={data.cdash.title}
            size="text-2xl"
            variant="font-extrabold"
            color="text-[#007BB5]"
          />
        </div>
        <Typography content={data.cdash.content} className="mt-3 md:mt-4 md:text-justify" />
      </div>
    </div>
  </div>
);

export default CdiscInfoContentBlock;
