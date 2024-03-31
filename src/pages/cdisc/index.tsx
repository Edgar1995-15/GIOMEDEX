import CdiscInfoContentBlock from './components/CdiscInfoContentBlock';
import Hero from './components/Hero';
import HeroMobile from './components/Hero/HeroMobile';

const Cdisc = () => {
  return (
    <div className="mx-auto">
      <Hero />
      <HeroMobile />

      <CdiscInfoContentBlock />
    </div>
  );
};

export default Cdisc;
