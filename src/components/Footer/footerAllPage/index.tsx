import { useNavigate } from 'react-router-dom';
import Button from '../../Button';
import Typography from '../../Typography';

const Company = ['About Us', 'Our Family', 'Mission & Vision', 'Why GIOMEDEX?', 'Careers'];
const services = [
  'Data Analysis',
  'Data Management',
  'FSP & Outsourcing',
  'Therapeutic Areas',
  'Clinical Phases'
];
const Title = ['Publications', 'For Parrtners', 'Quality Policy'];

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
                {Company.map((el) => (
                  <Button
                    name={el}
                    className={'bg-transparent text-[14px] font-bold leading-[16.94px]'}
                    onClick={() => navigate('/Company')}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-fit flex-col gap-[16px]">
              <Button
                name={'Services'}
                className={'bg-transparent text-[20px] font-bold leading-[16.94px]'}
                onClick={() => navigate('/Services')}
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
                {Title.map((el) => (
                  <Button
                    name={el}
                    className={'bg-transparent text-[14px] font-bold leading-[16.94px]'}
                    onClick={() => navigate(`/${el}`)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div></div>
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
