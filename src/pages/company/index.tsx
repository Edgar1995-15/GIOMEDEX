import { FC, useEffect } from 'react';
import Hero from './hero';
import Mission from './mission';
import Principles from './principles';
import Vacancies from './joinUs/Vacancies';
import Family from './family';
import JoinUs from './joinUs/JoinUs';
import CurrentVacancies from './currentVacancies';
import { useLocation } from 'react-router-dom';

const Company: FC = () => {
  const location = useLocation();

  useEffect(() => {
    const idToElementMapping: Record<string, string> = {
      '4 Core Principles': 'principles',
      'Our Know-How': 'principles',
      'Our Mission & Vision': 'mission',
      'Value Optimisation': 'vacancies',
      'Our Family': 'family',
      'Join Us': 'join-us',
      'Our Vacancies': 'current-vacancies',
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
    <div className="w-full">
      <Hero />
      <Mission />
      <Principles />
      <Vacancies />
      <Family />
      <JoinUs />
      <CurrentVacancies />
    </div>
  );
};

export default Company;
