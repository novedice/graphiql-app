import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useAppDispatch, useTypeSelector } from '../hooks/hooks';
import Footer from './Footer';
import { changeLang } from '../store/userInfoSlice';
import { PAGE_STYLE } from '../style-const/style-const';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { PAGE_STYLE } from '../style-const/style-const';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <div className={`${PAGE_STYLE}`}>
        <header className='header flex justify-around h-8 w-full bg-gray-700'>
          <Link to='/'>
            <FormattedMessage id='to_welcome_page' />
          </Link>
          <Link to='/graphi-ql'>
            <FormattedMessage id='to_graphi' />
          </Link>
          {!loggedIn && (
            <Link to='/auth'>
              <FormattedMessage id='to_auth' />
            </Link>
          )}
          {loggedIn && <div>{name}</div>}
          <div onClick={handleChangeLang}>{lang}</div>
        </header>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
