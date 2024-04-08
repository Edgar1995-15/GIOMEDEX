import { useNavigate } from 'react-router-dom';
import Button from '../../../Button';
import Typography from '../../../Typography';
import Contact from '../../../Contact';

const company = [
  { name: 'About Us', url: '/company' },
  { name: 'Our Family', url: '/company?id=Our%20Family' },
  { name: 'Mission & Vision', url: '/company?id=Our%20Mission%20&%20Vision' },
  { name: 'Why GIOMEDEX?', url: '/company?id=4%20Core%20Principles' },
  { name: 'Careers', url: '/company?id=Join%20Us' }
];

const services = [
  { name: 'Data Analysis', url: '/services' },
  { name: 'Data Management', url: '/services?id=Data%20Management' },
  { name: 'FSP & Outsourcing', url: '/services?id=STATISTICAL%20PROGRAMMERS' },
  { name: 'Therapeutic Areas', url: '/services?id=ONCOLOGY' },
  { name: 'Clinical Phases', url: '/services?id=Phase%20I' }
];

const title = [
  { name: 'For Parrtners', url: '/for-partners?id=Current%20contracts' },
  { name: 'Quality Policy', url: '/quality-policy?id=Our%20Commitments' }
];

export const contact = [
  { name: '+4917647648942', url: null },
  { name: 'info@giomedex.com', url: null },
  { name: 'Otto-Schmiedt Str. 43C', url: null }
];

const FooterDesktop = () => {
  const navigate = useNavigate();

  const onCLick = (url: string | null) => {
    if (typeof url === 'string') {
      navigate(url);
    }
  };

  return (
    <div className="flex h-[340px] w-full justify-center bg-[#0B1624] max-md:hidden">
      <div className="flex w-[1440px] flex-col">
        <div className="flex h-[90%] w-full items-center justify-between px-[10px]">
          <div className="flex w-full items-start justify-between px-[50px]">
            <div className="flex w-fit flex-col gap-[16px]">
              <Button
                name={'Company'}
                className={
                  'bg-transparent text-[20px] font-bold leading-[16.94px] max-lg:text-[16px]'
                }
                onClick={() => navigate('/company')}
              />
              <div className="flex flex-col gap-4">
                {company.map((el, index) => (
                  <Button
                    key={index}
                    name={el.name}
                    className={
                      'bg-transparent text-[14px] font-bold leading-[16.94px] max-lg:text-[12px]'
                    }
                    onClick={() => onCLick(el.url)}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-fit flex-col gap-[16px]">
              <Button
                name={'Services'}
                className={
                  'bg-transparent text-[20px] font-bold leading-[16.94px] max-lg:text-[16px]'
                }
                onClick={() => navigate('/services')}
              />
              <div className="flex flex-col gap-4">
                {services.map((el, index) => (
                  <Button
                    key={index}
                    name={el.name}
                    className={
                      'bg-transparent text-[14px] font-bold leading-[16.94px] max-lg:text-[12px]'
                    }
                    onClick={() => onCLick(el.url)}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-fit flex-col gap-[16px]">
              <Button
                name={'Title'}
                className={
                  'bg-transparent !text-[20px] !font-bold leading-[16.94px] max-lg:text-[16px]'
                }
                onClick={() => onCLick(null)}
              />
              <div className="flex flex-col gap-4">
                {title.map((el, index) => (
                  <Button
                    key={index}
                    name={el.name}
                    className={
                      'bg-transparent text-[14px] font-bold leading-[16.94px] max-lg:text-[12px]'
                    }
                    onClick={() => onCLick(el.url)}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-fit flex-col gap-[16px]">
              <Button
                name={'Contact us'}
                className={
                  'bg-transparent text-[20px] font-bold leading-[16.94px] max-lg:text-[16px]'
                }
                onClick={() => onCLick('/contact-us')}
              />
              <div className="flex flex-col gap-4">
                {contact.map((el, index) => (
                  <Button
                    key={index}
                    name={el.name}
                    className={
                      'bg-transparent text-[14px] font-bold leading-[16.94px] max-lg:text-[12px]'
                    }
                    onClick={() => onCLick(el.url)}
                  />
                ))}
              </div>

              <Contact />
            </div>
          </div>
        </div>
        <div className="flex h-[10%] items-center justify-center">
          <Typography
            content={'All rights reserved.2024 © GIOMEDEX CRO'}
            color="text-white"
            size="text-[14px] leading-[16.94px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterDesktop;
