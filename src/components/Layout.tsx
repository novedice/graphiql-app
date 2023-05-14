import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { PAGE_STYLE } from '../style-const/style-const';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <div className={`${PAGE_STYLE}`}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
