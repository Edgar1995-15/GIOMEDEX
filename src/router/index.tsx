import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Company from '../pages/company';
import Home from '../pages/home';
import Header from '../components/Header';
import Services from '../pages/services';

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
    </>
  );
};
export default Router;
