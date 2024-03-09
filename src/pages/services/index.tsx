import data from './data.json';

import Typography from '../../components/Typography';
import Timeline from './components/Timeline';
import Tree from './components/Tree';

const Services = () => {
  return (
    <div className="mx-auto max-w-desktop">
      {/* Header  */}
      <div
        className="flex h-[382px] flex-col gap-y-4 bg-cover bg-center px-32 py-[76px] "
        style={{ backgroundImage: `url(/images/services-header-bg.png)` }}
      >
        <Typography
          content={data.header.title}
          size="text-title"
          variant="font-bold"
          color="text-white"
          className="text-justify"
        />
        <Typography
          content={data.header.content}
          variant="font-normal"
          color="text-white"
          className="text-justify"
        />
      </div>

      {/* Data Analysys  */}
      <div className="px-32 py-[54px]">
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
            <Typography
              content={data.sasProgramming.content_second}
              className="mt-4 text-justify"
            />
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
      </div>

      {/* Timeline  */}
      <div
        className="flex flex-col bg-cover bg-center px-32 py-[54px]"
        style={{ backgroundImage: `url(/images/services-fsp-bg.png)` }}
      >
        <Typography
          content={data.fspAndOutsourcing.title}
          size="text-title"
          variant="font-extrabold"
          color="text-white"
          className="text-justify"
        />
        <Typography
          content={data.fspAndOutsourcing.content}
          color="text-white"
          className="mt-6 text-justify"
        />
        <div className="px-[94px] pt-[54px]">
          <Typography
            content={data.fspAndOutsourcingTreeData.title}
            variant="font-bold"
            size="text-xl"
            color="text-white"
            className="text-center"
          />
          <Timeline />
        </div>
      </div>

      {/* Bullets Info 1 */}
      <div className="px-[178px] py-[54px]">
        <div className="flex items-center gap-x-3">
          <img
            id="svg_one"
            src="/images/icons/services_bullets_icon_light_green.svg"
            alt="Services Blur SVG Green"
          />
          <Typography
            content={data.statisticalProgrammers.title}
            size="text-2xl"
            variant="font-extrabold"
            color="text-[#67C15E]"
          />
        </div>
        <Typography
          content={data.statisticalProgrammers.content}
          color="text-[#111111]"
          className="mt-4 text-justify"
        />
        <Typography
          content={data.statisticalProgrammers.weOffer.title}
          size="text-xl"
          variant="font-semibold"
          color="text-[#67C15E]"
          className="mt-8 text-justify"
        />

        <div className=" mt-4 flex gap-x-36">
          <ul className="list-disc pl-4">
            <li className="text-primary">
              <Typography
                content={data.statisticalProgrammers.weOffer.bullet_1}
                className="text-justify"
              />
            </li>
            <li className="text-primary">
              <Typography
                content={data.statisticalProgrammers.weOffer.bullet_2}
                className="mt-[22px] text-justify"
              />
            </li>
          </ul>
          <ul className="list-disc">
            <li className="text-primary">
              <Typography
                content={data.statisticalProgrammers.weOffer.bullet_3}
                className="text-justify"
              />
            </li>
            <li className="text-primary">
              <Typography
                content={data.statisticalProgrammers.weOffer.bullet_4}
                className="mt-[22px] text-justify"
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Bullets Info 2 */}
      <div className="bg-[#C1E0F4] px-[178px] py-[54px]">
        <div className="flex items-center gap-x-3">
          <img
            id="svg_one"
            src="/images/icons/services_bullets_icon_blue.svg"
            alt="Services Blur SVG Green"
          />
          <Typography
            content={data.dataManagers.title}
            size="text-2xl"
            variant="font-extrabold"
            color="text-[#215C99]"
          />
        </div>
        <Typography
          content={data.dataManagers.content}
          color="text-[#111111]"
          className="mt-4 text-justify"
        />
        <Typography
          content={data.dataManagers.wePromise.title}
          size="text-xl"
          variant="font-semibold"
          color="text-[#215C99]"
          className="mt-8 text-justify"
        />

        <div className=" mt-4 flex gap-x-36">
          <ul className="list-disc pl-4">
            <li className="text-primary">
              <Typography content={data.dataManagers.wePromise.bullet_1} className="text-justify" />
            </li>
            <li className="text-primary">
              <Typography
                content={data.dataManagers.wePromise.bullet_2}
                className="mt-[22px] text-justify"
              />
            </li>
          </ul>
          <ul className="list-disc">
            <li className="text-primary">
              <Typography content={data.dataManagers.wePromise.bullet_3} className="text-justify" />
            </li>
            <li className="text-primary">
              <Typography
                content={data.dataManagers.wePromise.bullet_4}
                className="mt-[22px] text-justify"
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Bullet Info 3 */}
      <div className="px-[178px] py-[54px]">
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
              <Typography
                content={data.biostatisticians.youGain.bullet_1}
                className="text-justify"
              />
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
              <Typography
                content={data.biostatisticians.youGain.bullet_3}
                className="text-justify"
              />
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

      {/* Big Tree  */}
      <Tree />

      {/* Phases  */}
      <div className="px-[128px] py-[54px]">
        <div>
          <Typography
            content={data.chlinicalPhases.title}
            size="text-title"
            variant="font-extrabold"
            color="text-[#00A791]"
          />
          <Typography content={data.chlinicalPhases.content} className="mt-4 text-justify" />
        </div>
        <div className="mt-5">
          <Typography
            content={data.chlinicalPhases.phase_one.title}
            size="text-2xl"
            variant="font-extrabold"
            color="text-[#00A791]"
          />
          <Typography
            content={data.chlinicalPhases.phase_one.content}
            className="mt-4 text-justify"
          />
        </div>
        <div className="mt-5">
          <Typography
            content={data.chlinicalPhases.phase_two.title}
            size="text-2xl"
            variant="font-extrabold"
            color="text-[#67C15E]"
          />
          <Typography
            content={data.chlinicalPhases.phase_two.content}
            className="mt-4 text-justify"
          />
        </div>
        <div className="mt-5">
          <Typography
            content={data.chlinicalPhases.phase_three.title}
            size="text-2xl"
            variant="font-extrabold"
            color="text-[#8442D7]"
          />
          <Typography
            content={data.chlinicalPhases.phase_three.content}
            className="mt-4 text-justify"
          />
        </div>
        <div className="mt-5">
          <Typography
            content={data.chlinicalPhases.phase_four.title}
            size="text-2xl"
            variant="font-extrabold"
            color="text-[#00A676]"
          />
          <Typography
            content={data.chlinicalPhases.phase_four.content}
            className="mt-4 text-justify"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
