import { FC } from 'react';
import Company from '../pages/company';
import Home from '../pages/home';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';

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
