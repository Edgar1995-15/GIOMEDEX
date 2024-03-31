import Hero from './components/Hero';
import HeroMobile from './components/Hero/HeroMobile';
import KeyPerformance from './components/KeyPerformance';
import OperatingProcedures from './components/OperatingProcedures';
import QualityManagement from './components/QualityManagement';

const QualityPolicy = () => (
  <div>
    <Hero />
    <HeroMobile />

    <QualityManagement />
    <KeyPerformance />
    <OperatingProcedures />
  </div>
);

export default QualityPolicy;
