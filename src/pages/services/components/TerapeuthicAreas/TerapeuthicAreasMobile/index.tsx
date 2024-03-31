import { useNavigate } from 'react-router-dom';

import data from '../data.json';

import TitleDescription from './TitleDescription';
import ButtonMobile from '../../../../../components/ButtonMobile';
import Typography from '../../../../../components/Typography';

const TerapeuthicAreasMobile = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-mobile px-[18px] py-9 md:hidden">
      {/* Header  */}
      <div>
        <Typography
          content={data.header.title}
          size="text-[28px]"
          variant="font-extrabold"
          color="text-white"
        />
        <Typography content={data.header.content} color="text-white" className="mt-3" />
      </div>
      {/* Content  */}
      <TitleDescription
        id="oncology"
        title={data.oncology.title}
        description={data.oncology.content}
        titleColor="[#1DA1F2]"
      />
      <TitleDescription
        id="cardiovascular"
        title={data.cardiovascular.title}
        description={data.cardiovascular.content}
        titleColor="[#67C15E]"
      />
      <TitleDescription
        id="dermatology"
        title={data.dermatology.title}
        description={data.dermatology.content}
        titleColor="[#00A79D]"
      />
      <TitleDescription
        id="infectious-diseases"
        title={data.infectiousDiseases.title}
        description={data.infectiousDiseases.content}
        titleColor="[#1DA1F2]"
      />
      <TitleDescription
        id="medical-devices"
        title={data.medicalDevices.title}
        description={data.medicalDevices.content}
        titleColor="[#00A684]"
      />
      <TitleDescription
        id="ophthalmology"
        title={data.ophthalmology.title}
        description={data.ophthalmology.content}
        titleColor="[#67C15E]"
      />
      <TitleDescription
        id="diabetes"
        title={data.diabetes.title}
        description={data.diabetes.content}
        titleColor="[#9747FF]"
      />
      <TitleDescription
        id="neurology"
        title={data.neurology.title}
        description={data.neurology.content}
        titleColor="[#00A676]"
      />
      <TitleDescription
        id="geastroenterology"
        title={data.gastroenterology.title}
        description={data.gastroenterology.content}
        titleColor="[#1DA1F2]"
      />
      <div className="mx-auto flex justify-center">
        <ButtonMobile
          children="Contact us"
          onClick={() => navigate('/contact')}
          className="mt-[72px] h-[46px] w-full max-w-[324px] items-center justify-center bg-[#009462] py-3 text-base font-normal"
        />
      </div>
    </div>
  );
};

export default TerapeuthicAreasMobile;
