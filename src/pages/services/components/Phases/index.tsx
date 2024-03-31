import Typography from '../../../../components/Typography';
import data from './data.json';

const Phases = () => (
  <div className="mx-auto max-w-desktop px-[18px] py-9 md:px-[128px] md:py-[54px]">
    <div>
      <Typography
        content={data.chlinicalPhases.title}
        size="text-[28px] md:text-title"
        variant="font-extrabold"
        color="text-[#00A791]"
      />
      <Typography content={data.chlinicalPhases.content} className="mt-3 md:mt-4 md:text-justify" />
    </div>
    <div className="mt-6 md:mt-5">
      <Typography
        content={data.chlinicalPhases.phase_one.title}
        size="text-2xl"
        variant="font-extrabold"
        color="text-[#00A791]"
      />
      <Typography
        content={data.chlinicalPhases.phase_one.content}
        className="mt-3 text-justify md:mt-4"
      />
    </div>
    <div className="mt-6 md:mt-5">
      <Typography
        content={data.chlinicalPhases.phase_two.title}
        size="text-2xl"
        variant="font-extrabold"
        color="text-[#67C15E]"
      />
      <Typography
        content={data.chlinicalPhases.phase_two.content}
        className="mt-3 md:mt-4 md:text-justify"
      />
    </div>
    <div className="mt-6 md:mt-5">
      <Typography
        content={data.chlinicalPhases.phase_three.title}
        size="text-2xl"
        variant="font-extrabold"
        color="text-[#8442D7]"
      />
      <Typography
        content={data.chlinicalPhases.phase_three.content}
        className="mt-3 md:mt-4 md:text-justify"
      />
    </div>
    <div className="mt-6 md:mt-5">
      <Typography
        content={data.chlinicalPhases.phase_four.title}
        size="text-2xl"
        variant="font-extrabold"
        color="text-[#00A676]"
      />
      <Typography
        content={data.chlinicalPhases.phase_four.content}
        className="mt-3 md:mt-4 md:text-justify"
      />
    </div>
  </div>
);

export default Phases;
