import { FC, useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import VacancyInfo from './VacancyInfo';

const CurrentVacancies: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className="m-auto w-full max-w-[1440px] bg-white pb-10 text-[#595959] max-md:max-w-[356px]">
      <div className="mt-14 px-[154px] max-lg:px-[60px] max-md:px-[18px]">
        <p className="text-[32px] font-[800] text-[#3B3B3B] max-md:text-[24px]">
          Current Vacancies
        </p>
        <div onClick={() => setIsVisible(!isVisible)}>
          <Dropdown isVisible={isVisible} />
          {!isVisible && (
            <>
              <Dropdown />
              <Dropdown />
            </>
          )}
        </div>
        {isVisible && (
          <>
            <VacancyInfo />
          </>
        )}
      </div>
    </div>
  );
};

export default CurrentVacancies;
