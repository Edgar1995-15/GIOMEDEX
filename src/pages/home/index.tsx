import { FC } from 'react';
import Typography from '../../components/Typography';
import { homePageData } from '../../assets/data';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-[calc(100vh_-_166px)] w-screen justify-center bg-[url('/public/images/backgroundImages/home-background.jpeg')] bg-cover bg-center">
      <div className="flex w-[1440px] flex-col gap-[36px] p-[120px]">
        <div className="flex flex-col gap-[12px]">
          <Typography
            content="GIOMEDEX CRO"
            variant="font-bold"
            color="text-[#009462]"
            size="text-[36px] leading-[32px]"
          />
          <Typography
            content="Empowering Research - Enhancing Lives"
            variant="font-bold"
            color="text-white"
            size="text-[36px] leading-[32px]"
          />
        </div>
        <div>
          <div className="flex h-[calc(100%_-_100px)] flex-col flex-wrap gap-[16px]">
            {homePageData.map((el, index) => (
              <div key={index}>
                <Typography content={el} color="text-white" size="text-[20px] leading-[24px]" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            name="Our Services"
            className={`h-[54px] w-[172px] items-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054]`}
            icon="select"
            iconClassName={`w-[24px] h-[24px]`}
            onClick={() => navigate('/Services')}
          />
          <Button
            name="For Partners"
            className={`h-[54px] w-[172px] items-center border px-[20px] py-[16px] hover:border-[#008054] hover:text-[#008054]`}
            icon="select"
            iconClassName={`w-[24px] h-[24px]`}
            onClick={() => navigate('/Partners')}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
