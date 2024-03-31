import { useNavigate } from 'react-router-dom';
import Button from '../../../Button';
import Typography from '../../../Typography';
import Contact from '../../../Contact';

const company = ['About Us', 'Our Family', 'Mission & Vision', 'Why GIOMEDEX?', 'Careers'];
const services = [
  'Data Analysis',
  'Data Management',
  'FSP & Outsourcing',
  'Therapeutic Areas',
  'Clinical Phases'
];
const title = ['Publications', 'For Parrtners', 'Quality Policy'];
export const contact = [
  '+4917647648942',
  'info@giomedex.com',
  'Lore-ipsumipsu Str. 00A, 00000 Leipzig,Germany'
];

const FooterDesktop = () => {
  const navigate = useNavigate();

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
                onClick={() => navigate('/Company')}
              />
              <div className="flex flex-col gap-4">
                {company.map((el, index) => (
                  <Button
                    key={index}
                    name={el}
                    className={
                      'bg-transparent text-[14px] font-bold leading-[16.94px] max-lg:text-[12px]'
                    }
                    onClick={() => navigate('/company')}
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
                    name={el}
                    className={
                      'bg-transparent text-[14px] font-bold leading-[16.94px] max-lg:text-[12px]'
                    }
                    onClick={() => navigate('/Services')}
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
                onClick={() => navigate('/Server')}
              />
              <div className="flex flex-col gap-4">
                {title.map((el, index) => (
                  <Button
                    key={index}
                    name={el}
                    className={
                      'bg-transparent text-[14px] font-bold leading-[16.94px] max-lg:text-[12px]'
                    }
                    onClick={() => navigate(`/${el}`)}
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
                onClick={() => navigate('/contact-us')}
              />
              <div className="flex flex-col gap-4">
                {contact.map((el, index) => (
                  <Button
                    key={index}
                    name={el}
                    className={
                      'bg-transparent text-[14px] font-bold leading-[16.94px] max-lg:text-[12px]'
                    }
                    onClick={() => navigate('/Company')}
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
