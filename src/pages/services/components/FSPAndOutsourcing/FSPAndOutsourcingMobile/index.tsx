import Typography from '../../../../../components/Typography';
import data from '../data.json';

const FSPAndOutsourcingMobile = () => {
  return (
    <div className="mt-6 md:hidden">
      <Typography
        content={data.fspAndOutsourcingTreeData.title}
        variant="font-bold"
        color="text-white"
        className="text-justify"
      />
      <Typography
        content={data.fspAndOutsourcingTreeData.content_1}
        color="text-[#00A79D]"
        variant="font-medium"
        className="mt-4"
      />
      <Typography
        content={data.fspAndOutsourcingTreeData.content_2}
        color="text-[#67C15E]"
        variant="font-medium"
        className="mt-4"
      />
      <Typography
        content={data.fspAndOutsourcingTreeData.content_3}
        color="text-[#9657E8]"
        variant="font-medium"
        className="mt-4"
      />
      <Typography
        content={data.fspAndOutsourcingTreeData.content_4}
        color="text-[#1DA1F2]"
        variant="font-medium"
        className="mt-4"
      />
      <Typography
        content={data.fspAndOutsourcingTreeData.content_5}
        color="text-[#00A79D]"
        variant="font-medium"
        className="mt-4"
      />
    </div>
  );
};

export default FSPAndOutsourcingMobile;
