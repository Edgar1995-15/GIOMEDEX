import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-[calc(100vh_-_166px)] w-full items-center justify-center ">
      <div className="absolute left-[50%] top-[50%] z-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 transform bg-[url('/public/images/not-found-page/404Error.jpg')] bg-cover bg-center max-md:top-[40%] max-md:h-[146px] max-md:w-[241px]" />
      <div className="z-10 flex h-[300px] w-[500px]   flex-col items-center max-md:w-[350px]">
        <Typography
          content="404"
          color="bg-gradient-to-r from-[#009462] via-[#00A79D] to-[#9747FF] bg-clip-text text-transparent"
          className=""
          size="text-[86px] max-md:text-[56px]"
          variant="font-black"
        />

        <Typography
          content="Something gone wrong"
          color="text-black"
          className="text-center"
          size="text-[32px] max-md:text-[22px]"
          variant="font-extrabold"
        />
        <Typography
          content="The page you were looking for doesn’t exist!"
          color="text-black"
          className="text-center"
          size="text-[20px] max-md:text-[16px]"
          variant="font-normal"
        />
        <Button
          name="Go Back"
          textStyle="text-[16px] font-semibold"
          className={`mt-[40px] h-[54px] w-[172px] items-center !justify-center bg-[#009462] hover:bg-[#008054]`}
          onClick={() => navigate('/')}
        />
      </div>
    </div>
  );
};

export default PageNotFound;
