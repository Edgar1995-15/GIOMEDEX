import { useNavigate } from 'react-router-dom';
import Button from '../../../Button';
import Typography from '../../../Typography';
import { contact } from '../FooterDesktop';
import Contact from '../../../Contact';

const pages = [
  {
    page: 'Home',
    url: ''
  },
  {
    page: 'Company',
    url: 'company'
  },
  {
    page: 'Services',
    url: 'services'
  },
  {
    page: 'CDISC',
    url: 'cdisc'
  },
  {
    page: 'Quality Policy',
    url: 'quality-policy'
  },
  {
    page: 'For Partners',
    url: 'for-partners'
  },
  {
    page: 'Contact us',
    url: 'contact'
  }
];

const FooterMobile = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      style={{
        background: `url(/images/services/fsp-vector.png), linear-gradient(102.82deg, #080D12 19%, #102136 75.38%)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className="relative flex h-[800px] flex-col justify-center gap-[100px] md:hidden"
    >
      <div className="flex flex-col items-center justify-center gap-[44px]">
        <Typography
          content={'GIOMEDEX CRO'}
          color="text-[#009462]"
          variant="font-bold"
          size="text-[24px] leading-[32px]"
        />
        <div className="flex flex-col items-center gap-[16px]">
          {pages.map((el, index) => (
            <Button
              key={index}
              name={el.page}
              className={'bg-transparent text-[18px] font-bold leading-[21.38px]'}
              onClick={() => {
                scrollToTop();
                navigate(`/${el.url}`);
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col items-center gap-4">
          {contact.map((el, index) => (
            <Button
              key={index}
              name={el.name}
              className={
                'text-wrap bg-transparent text-center text-[14px] font-bold leading-[16.94px]'
              }
              onClick={() => navigate(`/${el}`)}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Contact />
        </div>
        <div className="absolute bottom-6 left-0 flex w-full items-end justify-center">
          <Typography
            content={'All rights reserved.2024 ©'}
            color="text-white"
            size="text-[14px] leading-[16.94px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
