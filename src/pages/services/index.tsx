import data from './data.json';

import Typography from '../../components/Typography';

const Services = () => {
  return (
    <div className="mx-auto w-full max-w-desktop">
      <div
        className="flex h-[382px] w-full flex-col gap-y-4 px-32 py-[76px]"
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
    </div>
  );
};

export default Services;
