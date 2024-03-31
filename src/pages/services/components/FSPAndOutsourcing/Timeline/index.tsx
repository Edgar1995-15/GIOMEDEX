import data from '../data.json';
import styles from './styles.module.css';
import Typography from '../../../../../components/Typography';

const Timeline = () => {
  return (
    <div className="mx-auto hidden md:block">
      <div className="relative mt-[54px] flex items-start justify-center bg-cover">
        {/* Left Side  */}
        <div className="w-3/6 max-w-[700px]">
          <div className="mt-14 flex flex-row-reverse items-center">
            <img
              src="/images/services/icons/fsp/dot-line-teal.svg"
              alt="Terapeuthic areas dot line SVG"
            />
            <div className="mr-8 flex">
              <div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00A79D] text-lg font-semibold text-white">
                  1
                </span>
              </div>
              <Typography
                content={data.fspAndOutsourcingTreeData.content_1}
                color="text-[#00A79D]"
                variant="font-medium"
                className="ml-4 text-justify"
              />
            </div>
          </div>

          <div className="mt-14 flex flex-row-reverse items-center">
            <img
              src="/images/services/icons/fsp/dot-line-purple.svg"
              alt="Terapeuthic areas dot line SVG"
            />
            <div className="mr-8 flex">
              <div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9657E8] text-lg font-semibold text-white">
                  3
                </span>
              </div>
              <Typography
                content={data.fspAndOutsourcingTreeData.content_3}
                color="text-[#9657E8]"
                variant="font-medium"
                className="ml-4 text-justify"
              />
            </div>
          </div>
        </div>
        {/* Vertical Line  */}
        <div
          className={`absolute left-1/2 mt-[8px] h-full -translate-x-1/2 transform border border-[#00A79D] border-opacity-50 ${styles.dot}`}
        />
        {/* Right Side  */}
        <div className="w-3/6 max-w-[700px]">
          <div className="mt-5 flex items-start">
            <img
              className="pt-2"
              src="/images/services/icons/fsp/dot-line-green.svg"
              alt="Terapeuthic areas dot line SVG"
            />
            <div className="ml-8 flex">
              <div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#67C15E] text-lg font-semibold text-white">
                  2
                </span>
              </div>
              <Typography
                content={data.fspAndOutsourcingTreeData.content_2}
                color="text-[#67C15E]"
                variant="font-medium"
                className="ml-4 text-justify"
              />
            </div>
          </div>

          <div className="mb-14 mt-14 flex items-start">
            <img
              className="pt-2"
              src="/images/services/icons/fsp/dot-line-blue.svg"
              alt="Terapeuthic areas dot line SVG"
            />
            <div className="ml-8 flex">
              <div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1DA1F2] text-lg font-semibold text-white">
                  4
                </span>
              </div>
              <Typography
                content={data.fspAndOutsourcingTreeData.content_4}
                color="text-[#1DA1F2]"
                variant="font-medium"
                className="ml-4 text-justify"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Last Info Div: It is out of main block because of custom layout */}
      <div className="flex items-start justify-end">
        <div className="w-3/6 max-w-[700px]">
          <div className="flex items-start">
            <img
              className="rotate-180 transform"
              src="/images/services/icons/fsp/dot-line-teal.svg"
              alt="Terapeuthic areas dot line SVG"
            />
            <div className="ml-8 flex">
              <div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00A79D] text-lg font-semibold text-white">
                  5
                </span>
              </div>
              <Typography
                content={data.fspAndOutsourcingTreeData.content_5}
                color="text-[#00A79D]"
                variant="font-medium"
                className="ml-4 text-justify"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
