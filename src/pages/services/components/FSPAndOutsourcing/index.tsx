import { FC } from 'react';
import Typography from '../../../../components/Typography';
import Timeline from './Timeline';
import data from './data.json';

const FSPAndOutsourcing: FC = () => (
  <div
    className="mx-auto flex max-w-desktop flex-col px-32 py-[54px]"
    // style={{
    //   backgroundImage: `url(/images/services-fsp-vector.png)`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat'
    // }}
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
);

export default FSPAndOutsourcing;
