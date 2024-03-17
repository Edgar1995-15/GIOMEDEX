import { useLocation } from 'react-router-dom';
import FooterHomePage from './FooterHomePage';
import FooterAllPage from './footerAllPage';

const Footer = () => {
  const location = useLocation();

  return (
    <div className="w-full">
      {location.pathname === '/' ? <FooterHomePage /> : <FooterAllPage />}
    </div>
  );
};

export default Footer;
