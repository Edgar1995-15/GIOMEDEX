import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from './components/Hero';
import HeroMobile from './components/Hero/HeroMobile';
import KeyPerformance from './components/KeyPerformance';
import OperatingProcedures from './components/OperatingProcedures';
import QualityManagement from './components/QualityManagement';

const QualityPolicy = () => {
  const location = useLocation();

  useEffect(() => {
    const idToElementMapping: Record<string, string> = {
      'Our Commitments': 'our-commitments',
      KPIs: 'kpis',
      'Operating Procedures': 'operating-procedures'
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
    <div>
      <Hero />
      <HeroMobile />

      <QualityManagement />
      <KeyPerformance />
      <OperatingProcedures />
    </div>
  );
};

export default QualityPolicy;
