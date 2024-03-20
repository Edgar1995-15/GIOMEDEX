import data from './data.json';

import Typography from '../../../../components/Typography';
import Button from '../../../../components/Button';

const TerapeuthicAreas = () => {
  return (
    <div className="mx-auto max-w-desktop px-32 py-[54px]">
      {/* Header  */}
      <div>
        <Typography
          content={data.header.title}
          size="text-title"
          variant="font-extrabold"
          color="text-white"
          className="text-justify"
        />
        <Typography
          content={data.header.content}
          color="text-white"
          className="mt-4 text-justify"
        />
      </div>
      {/* Tree  */}
      <div className="mt-[54px] flex items-start justify-center bg-cover">
        {/* Left Side  */}
        <div className="w-3/6 max-w-[700px]">
          <div>
            <Typography
              content={data.oncology.title}
              size="text-2xl"
              variant="font-extrabold"
              color="text-[#1DA1F2]"
              className="text-right"
            />
            <Typography
              content={data.oncology.content}
              color="text-white"
              className="mt-4 text-justify"
            />
          </div>
          <div className="mt-[40px]">
            <Typography
              content={data.dermatology.title}
              size="text-2xl"
              variant="font-extrabold"
              color="text-[#00A79D]"
              className="text-right"
            />
            <Typography
              content={data.dermatology.content}
              color="text-white"
              className="mt-4 text-justify"
            />
          </div>
          <div className="mt-[90px]">
            <Typography
              content={data.medicalDevices.title}
              size="text-2xl"
              variant="font-extrabold"
              color="text-[#00A684]"
              className="text-right"
            />
            <Typography
              content={data.medicalDevices.content}
              color="text-white"
              className="mt-4 text-justify"
            />
          </div>
          <div className="mt-[115px]">
            <Typography
              content={data.diabetes.title}
              size="text-2xl"
              variant="font-extrabold"
              color="text-[#9747FF]"
              className="text-right"
            />
            <Typography
              content={data.diabetes.content}
              color="text-white"
              className="mt-4 text-justify"
            />
          </div>
          <div className="mt-[115px]">
            <Typography
              content={data.gastroenterology.title}
              size="text-2xl"
              variant="font-extrabold"
              color="text-[#1DA1F2]"
              className="text-right"
            />
            <Typography
              content={data.gastroenterology.content}
              color="text-white"
              className="mt-4 text-justify"
            />
          </div>
        </div>
        {/* SVG  */}
        <div className="mx-4 h-fit w-fit">
          <img id="tree_timeline" src="/images/icons/tree_timeline.svg" alt="Tree Timline SVG" />
        </div>
        {/* Right Side  */}
        <div className="w-3/6">
          <div className="mt-[140px]">
            <Typography
              content={data.cardiovascular.title}
              size="text-2xl"
              variant="font-extrabold"
              color="text-[#67C15E]"
              className="text-justify"
            />
            <Typography
              content={data.cardiovascular.content}
              color="text-white"
              className="mt-4 text-justify"
            />
          </div>
          <div className="mt-[90px]">
            <Typography
              content={data.infectiousDiseases.title}
              size="text-2xl"
              variant="font-extrabold"
              color="text-[#1DA1F2]"
              className="text-justify"
            />
            <Typography
              content={data.infectiousDiseases.content}
              color="text-white"
              className="mt-4 text-justify"
            />
          </div>
          <div className="mt-[90px]">
            <Typography
              content={data.ophthalmology.title}
              size="text-2xl"
              variant="font-extrabold"
              color="text-[#67C15E]"
              className="text-justify"
            />
            <Typography
              content={data.ophthalmology.content}
              color="text-white"
              className="mt-4 text-justify"
            />
          </div>
          <div className="mt-[115px]">
            <Typography
              content={data.neurology.title}
              size="text-2xl"
              variant="font-extrabold"
              color="text-[#00A676]"
              className="text-justify"
            />
            <Typography
              content={data.neurology.content}
              color="text-white"
              className="mt-4 text-justify"
            />
          </div>
        </div>
      </div>

      <div className="mt-[54px] flex justify-end">
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
};

export default TerapeuthicAreas;
