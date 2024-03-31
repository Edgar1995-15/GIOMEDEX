import { FC } from 'react';

import data from './data.json';

import Timeline from './Timeline';
import Typography from '../../../../components/Typography';
import FSPAndOutsourcingMobile from './FSPAndOutsourcingMobile';

const FSPAndOutsourcing: FC = () => (
  <div className="mx-auto flex max-w-desktop flex-col px-[18px] py-9  md:px-32 md:py-[54px]">
    <Typography
      content={data.fspAndOutsourcing.title}
      size="text-[28px] md:text-title"
      variant="font-extrabold"
      color="text-white"
      className="md:text-justify"
    />
    <Typography
      content={data.fspAndOutsourcing.content}
      color="text-white"
      className="mt-3 md:mt-6 md:text-justify"
    />

    <div className="hidden px-[94px] pt-[54px] md:block">
      <Typography
        content={data.fspAndOutsourcingTreeData.title}
        variant="font-bold"
        size="text-xl"
        color="text-white"
        className="text-center"
      />
      <Timeline />
    </div>

    <FSPAndOutsourcingMobile />
  </div>
);

export default FSPAndOutsourcing;
