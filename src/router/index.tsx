import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Company from '../pages/company';
import Home from '../pages/home';
import Header from '../components/Header';
import Services from '../pages/services';
import FooterHomePage from '../components/Footer/FooterHomePage';
import Footer from '../components/Footer';
import Cdisc from '../pages/cdisc';
import QualityPolicy from '../pages/quality-policy';
import ForPartners from '../pages/for-partners';

interface IPages {
  path: string;
  page: FC;
}

const pages: IPages[] = [
  {
    path: '/',
    page: Home
  },
  {
    path: '/company',
    page: Company
  },
  {
    path: '/services',
    page: Services
  },
  {
    path: '/cdisc',
    page: Cdisc
  },
  {
    path: '/quality-policy',
    page: QualityPolicy
  },
  {
    path: '/for-partners',
    page: ForPartners
  }
];

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        {pages.map((el: IPages) => (
          <Route key={el.path} path={el.path} element={<el.page />} />
        ))}
      </Routes>
      {window.location.pathname === '/' ? <FooterHomePage /> : <Footer />}
    </>
  );
};
export default Router;
