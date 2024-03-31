import { useNavigate } from 'react-router-dom';

import data from './data.json';

import Typography from '../../../../components/Typography';
import Button from '../../../../components/Button';

const TerapeuthicAreas = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto hidden max-w-desktop px-32 py-[54px] md:block">
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
      <div className="relative mt-[54px] flex items-start justify-center bg-cover">
        {/* Left Side  */}
        <div className="w-3/6 max-w-[700px]">
          <div id="oncology" className="mt-[1px] flex flex-row-reverse items-start">
            <img
              src="/images/services/icons/terapeuthic-areas/dot-line-blue.svg"
              alt="Terapeuthic areas dot line SVG"
            />
            <div className="mr-4">
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
          </div>

          <div id="dermatology" className="mt-[70px] flex flex-row-reverse items-start">
            <img
              src="/images/services/icons/terapeuthic-areas/dot-line-dermatology.svg"
              alt="Terapeuthic areas dot line SVG"
            />
            <div className="mr-4">
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
          </div>

          <div id="medical-devices" className="mt-[120px] flex flex-row-reverse items-start">
            <img
              src="/images/services/icons/terapeuthic-areas/dot-line-medical.svg"
              alt="Terapeuthic areas dot line SVG"
            />
            <div className="mr-4">
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
          </div>

          <div id="diabetes" className="mt-36 flex flex-row-reverse items-start">
            <img
              src="/images/services/icons/terapeuthic-areas/dot-line-purple.svg"
              alt="Terapeuthic areas dot line SVG"
            />
            <div className="mr-4">
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
          </div>
        </div>
        {/* Vertical Line  */}
        <div
          className={`absolute left-1/2 mt-[8px] h-full -translate-x-1/2 transform border border-[#00A79D] border-opacity-50`}
        />
        {/* Right Side  */}
        <div className="w-3/6 max-w-[700px]">
          <div id="cardiovascular" className="mt-[140px] flex items-start">
            <img
              src="/images/services/icons/terapeuthic-areas/dot-line-green.svg"
              alt="Terapeuthic areas dot line SVG"
            />
            <div className="ml-4">
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
          </div>

          <div id="infectious-diseases" className="mt-[120px] flex items-start">
            <img
              className="rotate-180 transform"
              src="/images/services/icons/terapeuthic-areas/dot-line-blue.svg"
              alt="Terapeuthic areas dot line SVG"
            />
            <div className="ml-4">
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
          </div>

          <div id="ophthalmology" className="mt-[120px] flex items-start">
            <img
              src="/images/services/icons/terapeuthic-areas/dot-line-green.svg"
              alt="Terapeuthic areas dot line SVG"
            />
            <div className="ml-4">
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
          </div>

          <div id="neurology" className="mt-[120px] flex items-start">
            <img
              src="/images/services/icons/terapeuthic-areas/dot-line-neurology.svg"
              alt="Terapeuthic areas dot line SVG"
            />
            <div className="ml-4">
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
      </div>
      {/* Last Info Div: It is out of main block because of custom layout */}
      <div id="geastroenterology" className="w-3/6 max-w-[700px]">
        <div className="flex flex-row-reverse items-start">
          <img
            src="/images/services/icons/terapeuthic-areas/dot-line-blue.svg"
            alt="Terapeuthic areas dot line SVG"
          />
          <div className="mr-4">
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
      </div>

      <div className="mt-[54px] flex justify-end">
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

export default TerapeuthicAreas;
