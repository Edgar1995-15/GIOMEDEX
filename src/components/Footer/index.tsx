import { useLocation } from 'react-router-dom';
import FooterHomePage from './FooterHomePage';
import FooterAllPage from './FooterAllPage';
import { pages } from '../../router';

const Footer = () => {
  const location = useLocation();
  const isShowFooter = !!pages.find((el) => el.path === location.pathname);
  console.log(isShowFooter);

  return (
    <div className="w-full">
      {location.pathname === '/' || !isShowFooter ? <FooterHomePage /> : <FooterAllPage />}
    </div>
  );
};

export default Footer;
