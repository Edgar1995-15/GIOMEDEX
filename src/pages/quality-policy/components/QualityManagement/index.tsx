import Typography from '../../../../components/Typography';

import data from './data.json';

const QualityManagement = () => (
  <div className="mx-auto max-w-desktop px-32 py-[54px]">
    <div>
      <div className="flex items-center gap-x-3">
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
          className="text-justify"
        />
      </div>
      <Typography
        content={data.qualityManagementFramework.description}
        className="mt-5 text-justify"
      />
    </div>
    {data.qualityManagementFramework.content.map((el) => (
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
  </div>
);

export default QualityManagement;
