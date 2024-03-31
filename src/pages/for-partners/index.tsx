import { useLocation } from 'react-router-dom';
import ForPartnersInfoContentBlock from './components/ForPartnersInfoContentBlock';
import Hero from './components/Hero';
import HeroMobile from './components/Hero/HeroMobile';
import { useEffect } from 'react';

const ForPartners = () => {
  const location = useLocation();

  useEffect(() => {
    const idToElementMapping: Record<string, string> = {
      'Current contracts': 'current-contracts',
      'Long Term Partnership': 'long-term-partnership'
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

      <ForPartnersInfoContentBlock />
    </div>
  );
};

export default ForPartners;
