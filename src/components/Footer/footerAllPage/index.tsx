import { useNavigate } from 'react-router-dom';
import Button from '../../Button';
import Typography from '../../Typography';
import Icon from '../../Icon';

const company = ['About Us', 'Our Family', 'Mission & Vision', 'Why GIOMEDEX?', 'Careers'];
const services = [
  'Data Analysis',
  'Data Management',
  'FSP & Outsourcing',
  'Therapeutic Areas',
  'Clinical Phases'
];
const title = ['Publications', 'For Parrtners', 'Quality Policy'];
const contact = [
  '+4917647648942',
  'info@giomedex.com',
  'Lore-ipsumipsu Str. 00A, 00000 Leipzig,Germany'
];

const siteLogo = [
  { icon: 'faceBook', url: 'https://www.facebook.com/profile.php?id=100011211274646' },
  { icon: 'x', url: 'https://twitter.com/?lang=ru' },
  { icon: 'linkedin', url: 'https://www.linkedin.com/in/martin-baghdasaryan-071401266/' },
  { icon: 'whatsapp', url: 'https://web.whatsapp.com/' }
];

const FooterAllPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-[340px] w-full justify-center bg-[#0B1624]">
      <div className="flex w-[1440px] flex-col">
        <div className="flex h-[90%] w-full items-center justify-between px-[10px]">
          <div className="flex w-full items-start justify-between px-[50px]">
            <div className="flex w-fit flex-col gap-[16px]">
              <Button
                name={'Company'}
                className={'bg-transparent text-[20px] font-bold leading-[16.94px]'}
                onClick={() => navigate('/Company')}
              />
              <div className="flex flex-col gap-4">
                {company.map((el) => (
                  <Button
                    name={el}
                    className={'bg-transparent text-[14px] font-bold leading-[16.94px]'}
                    onClick={() => navigate('/company')}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-fit flex-col gap-[16px]">
              <Button
                name={'Services'}
                className={'bg-transparent text-[20px] font-bold leading-[16.94px]'}
                onClick={() => navigate('/services')}
              />
              <div className="flex flex-col gap-4">
                {services.map((el) => (
                  <Button
                    name={el}
                    className={'bg-transparent text-[14px] font-bold leading-[16.94px]'}
                    onClick={() => navigate('/Services')}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-fit flex-col gap-[16px]">
              <Button
                name={'Title'}
                className={'bg-transparent !text-[20px] !font-bold leading-[16.94px]'}
                onClick={() => navigate('/Server')}
              />
              <div className="flex flex-col gap-4">
                {title.map((el) => (
                  <Button
                    name={el}
                    className={'bg-transparent text-[14px] font-bold leading-[16.94px]'}
                    onClick={() => navigate(`/${el}`)}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-fit flex-col gap-[16px]">
              <Button
                name={'Contact us'}
                className={'bg-transparent text-[20px] font-bold leading-[16.94px]'}
                onClick={() => navigate('/contact-us')}
              />
              <div className="flex flex-col gap-4">
                {contact.map((el) => (
                  <Button
                    name={el}
                    className={'bg-transparent text-[14px] font-bold leading-[16.94px]'}
                    onClick={() => navigate('/Company')}
                  />
                ))}
              </div>
              <div className="flex gap-[28px]">
                {siteLogo.map((el, index) => (
                  <div key={index}>
                    <button onClick={() => window.open(el.url)}>
                      <Icon name={el.icon} />
                    </button>
                  </div>
                ))}
              </div>
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
export default FooterAllPage;
