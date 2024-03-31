import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from './components/Hero';
import DataAnalysys from './components/DataAnalysys';
import FSPAndOutsourcing from './components/FSPAndOutsourcing';
import StatisticalProgrammers from './components/StatisticalProgrammers';
import Biostatisticians from './components/Biostatisticians';
import TerapeuthicAreas from './components/TerapeuthicAreas';
import Phases from './components/Phases';
import DataManagers from './components/DataManagers';
import HeroMobile from './components/HeroMobile';
import TerapeuthicAreasMobile from './components/TerapeuthicAreas/TerapeuthicAreasMobile';

import './services.css';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    const idToElementMapping: Record<string, string> = {
      Expertise: 'expertise',
      'Data analysis': 'data-analysis',
      'FSP%20&%20OUTSOURCING': 'fsp-outsourcing',
      'Therapeutic Areas': 'therapeutic-areas',
      'Clinical Phases': 'clinical-phases',
      'Sas programming': 'sas-programming',
      Biostatistics: 'biostatistics',
      'Data Management': 'data-management',
      Software: 'software',
      'STATISTICAL PROGRAMMERS': 'statistical-programmers',
      'DATA MANAGERS': 'data-managers',
      Biostatisticians: 'biostatisticians',
      ONCOLOGY: 'oncology',
      CARDIOVASCULAR: 'cardiovascular',
      DERMATOLOGY: 'dermatology',
      'INFECTIOUS DISEASES': 'infectious-diseases',
      'Medical Devices': 'medical-devices',
      Ophthalmology: 'ophthalmology',
      Diabetes: 'diabetes',
      Neurology: 'neurology',
      Gastroenterology: 'geastroenterology',
      'Phase I': 'phase-I',
      'Phase II': 'phase-II',
      'Phase III': 'phase-III',
      'Phase IV': 'phase-IV'
    };

    const urlParams = new URLSearchParams(location.search);
    const id = urlParams.get('id');
    const elementId = idToElementMapping[id as keyof typeof idToElementMapping];

    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Element with id '${elementId}' not found.`);
      }
    }
  }, [location.search]);

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

      <div id="therapeutic-areas" className="TerapeuthicAreas">
        <TerapeuthicAreas />
        <TerapeuthicAreasMobile />
      </div>

      <Phases />
    </div>
  );
};

export default Services;
