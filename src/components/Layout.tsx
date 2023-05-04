import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useAppDispatch, useTypeSelector } from '../hooks/redux-hooks';
import Footer from './Footer';
import { changeLang } from '../store/slices/userInfoSlice';
import { PAGE_STYLE } from '../style-const/style-const';

const Layout = () => {
  const dispatch = useAppDispatch();
  const { lang, name } = useTypeSelector((state) => state.userLang);
  const { loggedIn } = useTypeSelector((state) => state.login);

  const handleChangeLang = () => {
    dispatch(changeLang());
  };

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
