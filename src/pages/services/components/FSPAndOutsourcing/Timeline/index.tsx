import Typography from '../../../../../components/Typography';
import data from '../data.json';

import styles from './styles.module.css';

const Timeline = () => {
  return (
    <div className="mx-auto mt-8 h-full w-full">
      <div className="relative flex-wrap">
        <div
          className={`absolute h-full border border-[#00A791] desktop:h-[258px] ${styles.dot_top} `}
          style={{ left: '50%' }}
        ></div>
        {/* right */}
        <div className=" relative flex w-full items-start justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="relative z-20 order-1">
            <div
              className={`absolute top-7 h-full w-[65px] border border-[#00A791] ${styles.dot_2}`}
            ></div>
          </div>
          <div className="order-1 flex w-5/12 items-start justify-between pl-8 pt-4">
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

        {/* left */}
        <div className=" relative -mt-[37px] flex w-full flex-row-reverse items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="relative z-20 order-1">
            <div
              className={`absolute right-0 h-full w-[65px] border border-[#00A791]  ${styles.dot_1}`}
            ></div>
          </div>
          <div className="order-1 flex w-5/12 items-start justify-between pr-8">
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

        {/* right */}
        <div className="relative flex w-full items-start justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="relative z-20 order-1">
            <div
              className={`absolute top-4 h-full w-[65px] border border-[#00A791]  ${styles.dot_4}`}
            ></div>
          </div>
          <div className="order-1 flex w-5/12 items-start justify-between pl-8">
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

        {/* left */}
        <div className="relative -mt-[34px] flex w-full flex-row-reverse items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="relative z-20 order-1">
            <div
              className={`absolute right-0 h-full w-[65px] border border-[#00A791] ${styles.dot_3}`}
            ></div>
          </div>
          <div className="order-1 flex w-5/12 items-start justify-between pr-8">
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

        {/* right */}
        <div className="relative mt-[7px] flex w-full items-start justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="relative z-20 order-1">
            <div
              className={`absolute top-4 w-[65px] border border-[#00A791] ${styles.dot_5}`}
            ></div>
          </div>
          <div className="order-1 flex w-5/12 items-start  justify-between pl-8">
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
  );
};

export default Timeline;
