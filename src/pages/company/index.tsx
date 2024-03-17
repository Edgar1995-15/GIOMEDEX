import { FC } from 'react';
import Hero from './hero';
import Mission from './mission';
import Principles from './principles';
import Vacancies from './joinUs/Vacancies';
import Family from './family';
import JoinUs from './joinUs/JoinUs';
import CurrentVacancies from './currentVacancies';
const Company: FC = () => {
    return (
        <div className="w-full">
            <Hero />
            <Mission />
            <Principles />
            <Vacancies />
            <Family />
            <JoinUs />
            <CurrentVacancies />
        </div>
    )
}

export default Company;