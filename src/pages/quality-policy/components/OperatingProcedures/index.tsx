import Typography from '../../../../components/Typography';

import data from './data.json';

const OperatingProcedures = () => (
  <div className="mx-auto max-w-desktop px-32 py-[54px]">
    <div className="flex items-center gap-x-3">
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
        className="text-justify"
      />
    </div>
    <Typography content={data.operatingProcedures.description_one} className="mt-8 text-justify" />
    <Typography content={data.operatingProcedures.description_two} className="mt-5 text-justify" />
  </div>
);

export default OperatingProcedures;
