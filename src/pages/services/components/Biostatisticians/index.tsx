import Typography from '../../../../components/Typography';
import data from './data.json';

const Biostatisticians = () => (
  <div
    id="biostatisticians"
    className="mx-auto max-w-desktop px-[18px] py-9 md:px-[178px] md:py-[54px]"
  >
    <div className="flex items-center gap-x-3">
      <img
        id="svg_one"
        src="/images/icons/services_bullets_icon_green.svg"
        alt="Services Blur SVG Green"
      />
      <Typography
        content={data.biostatisticians.title}
        size="text-xl md:text-2xl"
        variant="font-extrabold"
        color="text-[#00A676]"
      />
    </div>
    <Typography
      content={data.biostatisticians.content}
      color="text-[#111111]"
      className="mt-3 md:mt-4 md:text-justify"
    />

    <Typography
      content={data.biostatisticians.youGain.title}
      size="text-xl"
      variant="font-semibold"
      color="text-[#00A676]"
      className="mt-8 text-justify"
    />
    <div className="mt-3 flex flex-col gap-x-36 md:mt-4 md:flex-row">
      <ul className="list-disc pl-5 md:pl-4">
        <li className="text-primary">
          <Typography
            content={data.biostatisticians.youGain.bullet_1}
            className="md:text-justify"
          />
        </li>
        <li className="text-primary">
          <Typography
            content={data.biostatisticians.youGain.bullet_2}
            className="mt-3 md:mt-[22px] md:text-justify"
          />
        </li>
      </ul>
      <ul className="list-disc pl-5 md:pl-0">
        <li className="text-primary">
          <Typography
            content={data.biostatisticians.youGain.bullet_3}
            className="mt-3 md:mt-0 md:text-justify"
          />
        </li>
        <li className="text-primary">
          <Typography
            content={data.biostatisticians.youGain.bullet_4}
            className="mt-3 md:mt-[22px] md:text-justify"
          />
        </li>
      </ul>
    </div>
  </div>
);

export default Biostatisticians;
