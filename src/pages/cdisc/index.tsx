import { useEffect } from 'react';
import CdiscInfoContentBlock from './components/CdiscInfoContentBlock';
import Hero from './components/Hero';
import HeroMobile from './components/Hero/HeroMobile';
import { useLocation } from 'react-router-dom';

const Cdisc = () => {
  const location = useLocation();

  useEffect(() => {
    const idToElementMapping: Record<string, string> = {
      SDTM: 'sdtm',
      ADaM: 'adam',
      TFL: 'tfl',
      CDASH: 'cdash'
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
      <Hero />
      <HeroMobile />

      <CdiscInfoContentBlock />
    </div>
  );
};

export default Cdisc;
