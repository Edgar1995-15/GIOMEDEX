import Typography from '../../../../components/Typography';

import data from './data.json';

const OperatingProcedures = () => (
  <div
    id="operating-procedures"
    className="mx-auto max-w-desktop px-[18px] py-9 md:px-32 md:py-[54px]"
  >
    <div className="flex items-start gap-x-3 md:items-center">
      <img
        id="svg_one"
        src="/images/icons/quality-policy-label-icon-blue.svg"
        alt="Services Blur SVG Green"
      />
      <Typography
        content={data.operatingProcedures.title}
        size="text-2xl"
        variant="font-extrabold"
        color="text-[#007BB5]"
        className="md:text-justify"
      />
    </div>
    <Typography
      content={data.operatingProcedures.description_one}
      className="mt-3 md:mt-8 md:text-justify"
    />
    <Typography
      content={data.operatingProcedures.description_two}
      className="mt-9 md:mt-5 md:text-justify"
    />
  </div>
);

export default OperatingProcedures;
