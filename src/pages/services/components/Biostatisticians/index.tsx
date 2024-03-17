import Typography from '../../../../components/Typography';
import data from './data.json';

const Biostatisticians = () => (
  <div className="mx-auto max-w-desktop px-[178px] py-[54px]">
    <div className="flex items-center gap-x-3">
      <img
        id="svg_one"
        src="/images/icons/services_bullets_icon_green.svg"
        alt="Services Blur SVG Green"
      />
      <Typography
        content={data.biostatisticians.title}
        size="text-2xl"
        variant="font-extrabold"
        color="text-[#00A676]"
      />
    </div>
    <Typography
      content={data.biostatisticians.content}
      color="text-[#111111]"
      className="mt-4 text-justify"
    />
    <Typography
      content={data.biostatisticians.youGain.title}
      size="text-xl"
      variant="font-semibold"
      color="text-[#00A676]"
      className="mt-8 text-justify"
    />

    <div className=" mt-4 flex gap-x-36">
      <ul className="list-disc pl-4">
        <li className="text-primary">
          <Typography content={data.biostatisticians.youGain.bullet_1} className="text-justify" />
        </li>
        <li className="text-primary">
          <Typography
            content={data.biostatisticians.youGain.bullet_2}
            className="mt-[22px] text-justify"
          />
        </li>
      </ul>
      <ul className="list-disc">
        <li className="text-primary">
          <Typography content={data.biostatisticians.youGain.bullet_3} className="text-justify" />
        </li>
        <li className="text-primary">
          <Typography
            content={data.biostatisticians.youGain.bullet_4}
            className="mt-[22px] text-justify"
          />
        </li>
      </ul>
    </div>
  </div>
);

export default Biostatisticians;
