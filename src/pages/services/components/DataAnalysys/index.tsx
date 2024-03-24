import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button';
import Typography from '../../../../components/Typography';
import data from './data.json';

const DataAnalysys = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-desktop px-32 py-[54px]">
      <div className="flex flex-col ">
        <Typography
          content={data.dataAnalysis.title}
          size="text-title"
          variant="font-extrabold"
          color="text-[#00A791]"
        />
        <Typography content={data.dataAnalysis.content_first} className="mt-6 text-justify" />
        <Typography content={data.dataAnalysis.content_second} className="mt-4 text-justify" />
      </div>
      <div className="mt-9 flex gap-x-20">
        <div>
          <div className="flex items-center gap-x-2">
            <img
              id="svg_one"
              src="/images/icons/services_blur_on_icon_green.svg"
              alt="Services Blur SVG Green"
            />
            <Typography
              content={data.sasProgramming.title}
              size="text-2xl"
              variant="font-extrabold"
              color="text-[#009462]"
            />
          </div>
          <Typography content={data.sasProgramming.content_first} className="mt-4 text-justify" />
          <Typography content={data.sasProgramming.content_second} className="mt-4 text-justify" />
        </div>
        <div>
          <div className="flex items-center gap-x-2">
            <img
              id="svg_two"
              src="/images/icons/services_blur_on_icon_teal.svg"
              alt="Services Blur SVG Teal"
            />
            <Typography
              content={data.biostatistics.title}
              size="text-2xl"
              variant="font-extrabold"
              color="text-[#00A79D]"
            />
          </div>
          <Typography content={data.biostatistics.content_first} className="mt-4 text-justify" />
          <Typography content={data.biostatistics.content_second} className="mt-4 text-justify" />
        </div>
      </div>

      <div className="mt-8 flex gap-x-20">
        <div>
          <div className="flex items-center gap-x-2">
            <img
              id="svg_one"
              src="/images/icons/services_blur_on_icon_blue.svg"
              alt="Services Blur SVG Blue"
            />
            <Typography
              content={data.clinicalDataManagement.title}
              size="text-2xl"
              variant="font-extrabold"
              color="text-[#215C99]"
            />
          </div>
          <Typography
            content={data.clinicalDataManagement.content_first}
            className="mt-4 text-justify"
          />
          <Typography
            content={data.clinicalDataManagement.content_second}
            className="mt-4 text-justify"
          />
        </div>
        <div>
          <div className="flex items-center gap-x-2">
            <img
              id="svg_two"
              src="/images/icons/services_blur_on_icon_light_green.svg"
              alt="Services Blur SVG Light Green"
            />
            <Typography
              content={data.softwareForClinicalDataManagement.title}
              size="text-2xl"
              variant="font-extrabold"
              color="text-[#00A684]"
            />
          </div>
          <Typography
            content={data.softwareForClinicalDataManagement.content_first}
            className="mt-4 text-justify"
          />
          <Typography
            content={data.softwareForClinicalDataManagement.content_second}
            className="mt-4 text-justify"
          />
        </div>
      </div>
      <div className="mt-9 flex justify-end">
        <Button
          name="Contact us"
          className={`h-[54px] w-[172px] items-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054]`}
          icon="select"
          iconClassName={`w-[24px] h-[24px]`}
          onClick={() => navigate('/contact')}
        />
      </div>
    </div>
  );
};

export default DataAnalysys;
