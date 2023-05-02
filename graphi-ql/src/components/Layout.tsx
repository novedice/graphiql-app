import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAppDispatch, useTypeSelector } from '../hooks/hooks';
import Footer from './Footer';
import { changeLang } from '../store/userInfoSlice';
import store from '../store/store';
import { PAGE_STYLE } from '../style-const/style-const';

const Layout = () => {
  const dispatch = useAppDispatch();
  const { lang, name } = useTypeSelector(state => state.user);
  const { loggedIn } = useTypeSelector(state => state.login);


  const handleChangeLang = () => {
    dispatch(changeLang());
  }
  
  return (
    <>
      <div className={`${PAGE_STYLE}`}>
        <header className="header flex justify-around h-8 w-full bg-gray-700">
          <Link to="/">Welcome Page</Link>
          <Link to="/graphi-ql">GraphQL</Link>
          {!loggedIn && <Link to="/auth">Login/signup</Link>}
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
