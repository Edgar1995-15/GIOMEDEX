import Typography from '../../../../components/Typography';

import data from './data.json';

const QualityManagement = () => (
  <div className="mx-auto max-w-desktop px-[18px] py-9 md:px-32 md:py-[54px]">
    <div>
      <div className="flex items-start gap-x-3 md:items-center">
        <img
          id="svg_one"
          src="/images/icons/quality-policy-label-icon-green.svg"
          alt="Services Blur SVG Green"
        />
        <Typography
          content={data.qualityManagementFramework.title}
          size="text-2xl"
          variant="font-extrabold"
          color="text-[#009462]"
          className="md:text-justify"
        />
      </div>
      <Typography
        content={data.qualityManagementFramework.description}
        className="mt-3 md:mt-5 md:text-justify"
      />
    </div>
    {data.qualityManagementFramework.content.map((el) => (
      <div className="mt-9 md:mt-5" key={el.title}>
        <Typography
          content={el.title}
          size="text-xl"
          variant="font-bold"
          color={`text-[${el.titleColor}]`}
          className="md:text-justify"
        />
        <Typography content={el.description} className="mt-3 md:mt-4 md:text-justify" />
      </div>
    ))}
  </div>
);

export default QualityManagement;
