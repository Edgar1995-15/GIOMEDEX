import { FC, useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import VacancyInfo from './VacancyInfo';

const CurrentVacancies: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className="w-full bg-white text-[#595959] max-w-[1440px] m-auto pb-10">
      <div className="mt-14 px-[154px]">
        <p className="text-[32px] font-[800] text-[#3B3B3B]">Current Vacancies</p>
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
