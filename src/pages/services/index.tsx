// import data from './data.json';

// import Typography from '../../components/Typography';
import Hero from './components/Hero';
import DataAnalysys from './components/DataAnalysys';
import FSPAndOutsourcing from './components/FSPAndOutsourcing';
import StatisticalProgrammers from './components/StatisticalProgrammers';
import Biostatisticians from './components/Biostatisticians';
import TerapeuthicAreas from './components/TerapeuthicAreas';
import Phases from './components/Phases';
import DataManagers from './components/DataManagers';
// import Carousel from './components/CarouselSlider';

const Services = () => {
  return (
    <div className="mx-auto">
      <Hero />

      <DataAnalysys />

      <div
        style={{
          background: `url(/images/services/fsp-vector.png), linear-gradient(102.82deg, #080D12 19%, #102136 75.38%)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <FSPAndOutsourcing />
      </div>

      <StatisticalProgrammers />

      <div className="bg-[#C1E0F4]">
        <DataManagers />
      </div>
      <Biostatisticians />

      <div
        style={{
          background: `url(/images/services/terapeuthic-areas-vector.png), linear-gradient(102.82deg, #080D12 19%, #102136 75.38%)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <TerapeuthicAreas />
      </div>

      <Phases />

      {/* <div className="contaier mx-auto">
        <Carousel
          images={[
            'https://via.placeholder.com/600x400/1abc9c/ffffff',
            'https://via.placeholder.com/600x400/3498db/ffffff',
            'https://via.placeholder.com/600x400/e74c3c/ffffff',
            'https://via.placeholder.com/600x400/9b59b6/ffffff',
            'https://via.placeholder.com/600x400/34495e/ffffff'
          ]}
        />
      </div> */}
    </div>
  );
};

export default Services;
