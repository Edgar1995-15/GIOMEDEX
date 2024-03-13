import { FC } from 'react';
import Typography from '../../components/Typography';
import { homePageData } from '../../assets/data';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(100vh_-_166px)] bg-cover bg-center w-screen bg-[url('/public/images/backgroundImages/home-background.jpeg')] flex justify-center">
      <div className='w-[1440px] p-[120px] flex flex-col gap-[36px]' >
        <div className='flex flex-col gap-[12px]'>
          <Typography content='GIOMEDEX CRO' variant='font-bold' color='text-[#009462]' size='text-[36px] leading-[32px]' />
          <Typography content='Empowering Research - Enhancing Lives' variant='font-bold' color='text-white' size='text-[36px] leading-[32px]' />
        </div>
        <div>
          <div className='flex flex-col gap-[16px] flex-wrap h-[calc(100%_-_100px)]'>
            {
              homePageData.map((el, index) => (
                <div key={index}>
                  <Typography content={el} color='text-white'  size='text-[20px] leading-[24px]' />
                </div>
              ))
            }
          </div>
        </div>
        <div className='flex gap-4'>
            <Button 
                name='Our Services' 
                className={`px-[20px] py-[16px] w-[172px] h-[54px] items-center bg-[#009462] hover:bg-[#008054]`} 
                icon='select'  
                iconClassName={`w-[24px] h-[24px]`}
                onClick={() => navigate('/Services')}
                />
            <Button 
                name='For Partners' 
                className={`px-[20px] py-[16px] w-[172px] h-[54px] items-center border hover:border-[#008054] hover:text-[#008054]`} 
                icon='select' 
                iconClassName={`w-[24px] h-[24px]`}
                onClick={() => navigate('/Partners')}
                />
        </div>

      </div>
    </div>
  );
};
export default Home;
