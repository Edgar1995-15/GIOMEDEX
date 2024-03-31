import Typography from '../../Typography';

const FooterHomePage = () => {
  return (
    <div className="flex h-[74px] w-screen items-center justify-center bg-[#0B1624] max-lg:hidden">
      <Typography
        content={'All rights reserved.2024 © GIOMEDEX CRO'}
        color="text-white"
        size="text-[14px] leading-[16.94px]"
      />
    </div>
  );
};

export default FooterHomePage;
