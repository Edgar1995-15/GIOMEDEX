import { FC } from 'react';
import Typography from '../../components/Typography';
import { homePageData } from '../../assets/data';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-[calc(100vh_-_166px)] w-screen justify-center bg-[url('/public/images/backgroundImages/home-background.jpeg')] bg-cover bg-center max-lg:min-h-[calc(100vh_+_250px)] max-md:h-[calc(100vh_-_150px)]">
      <div className="flex w-[1440px] flex-col p-[120px] max-xl:p-[80px] max-lg:p-[50px] max-md:items-center max-md:p-[30px]">
        <div className="flex flex-col gap-[12px] max-lg:pb-[29px]">
          <Typography
            content="GIOMEDEX CRO"
            variant="font-bold"
            color="text-[#009462]"
            size="text-[36px] leading-[32px] max-xl:text-[30px] max-xl:leading-[26px] max-lg:text-center max-md:text-[24px]"
          />
          <Typography
            content="Empowering Research - Enhancing Lives"
            variant="font-bold"
            color="text-[#D9D9D9]"
            size="text-[36px] leading-[32px] max-xl:text-[30px] max-xl:leading-[26px] max-lg:text-center max-md:text-center max-md:text-[24px]"
          />
        </div>
        <div className="mt-5">
          <ul
            style={{ listStyleType: 'square' }}
            className="flex h-[220px] flex-col flex-wrap gap-[16px] text-[30px] text-[#D9D9D9] max-xl:h-[180px] max-xl:gap-[20px] max-xl:text-[16px] max-lg:hidden max-lg:h-[180px]"
          >
            {homePageData.map((el, index) => (
              <li key={index} className="mb-4 ml-6">
                <Typography
                  content={el}
                  color="text-[#D9D9D9]"
                  size="text-[20px] leading-[24px] max-xl:text-[16px] max-xl:leading-[20px] max-lg:text-[14px] max-lg:leading-[16px]"
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div
            style={{ listStyleType: 'square' }}
            className="mt-[10%] flex h-[calc(100%_-_150px)] flex-col justify-center text-[#D9D9D9] max-xl:gap-[20px] max-xl:text-[16px] lg:hidden"
          >
            {homePageData.map((el, index) => (
              <Typography
                key={index}
                content={el}
                color="text-[#D9D9D9]"
                size="text-[16px] leading-[20px] text-center"
              />
            ))}
          </div>
        </div>
        <div className="flex w-full gap-4 max-lg:flex-col max-lg:gap-3">
          <Button
            name="Our Services"
            className={`h-[54px] w-[172px] items-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054] max-lg:hidden`}
            icon="arrowRight"
            onClick={() => navigate('/Services')}
          />
          <Button
            name="For Partners"
            className={`h-[54px] w-[172px] items-center border border-white px-[20px] py-[16px] hover:border-[#008054] hover:text-[#008054] max-lg:hidden`}
            icon="arrowRight"
            onClick={() => navigate('/for-partners')}
            isSpecial
          />
          <Button
            name="Our Services"
            className={`hidden h-[54px] w-full items-center !justify-center bg-[#009462] px-[20px] py-[16px] hover:bg-[#008054] max-lg:flex`}
            onClick={() => navigate('/Services')}
          />
          <Button
            name="For Partners"
            className={`hidden h-[54px] w-full items-center !justify-center border border-white px-[20px] py-[16px] hover:border-[#008054] hover:text-[#008054] max-lg:flex`}
            onClick={() => navigate('/for-partners')}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
