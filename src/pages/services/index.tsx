import Hero from './components/Hero';
import DataAnalysys from './components/DataAnalysys';
import FSPAndOutsourcing from './components/FSPAndOutsourcing';
import StatisticalProgrammers from './components/StatisticalProgrammers';
import Biostatisticians from './components/Biostatisticians';
import TerapeuthicAreas from './components/TerapeuthicAreas';
import Phases from './components/Phases';
import DataManagers from './components/DataManagers';
import HeroMobile from './components/HeroMobile';

import './services.css';
import TerapeuthicAreasMobile from './components/TerapeuthicAreas/TerapeuthicAreasMobile';

const Services = () => {
  return (
    <div className="mx-auto">
      {/* Hero */}
      <Hero />
      <HeroMobile />

      <DataAnalysys />

      <div className="FSPAndOutsourcing">
        <FSPAndOutsourcing />
      </div>

      <StatisticalProgrammers />

      <div className="bg-[#C1E0F4] bg-opacity-25">
        <DataManagers />
      </div>

      <Biostatisticians />

      <div className="TerapeuthicAreas">
        <TerapeuthicAreas />
        <TerapeuthicAreasMobile />
      </div>

      <Phases />
    </div>
  );
};

export default Services;
