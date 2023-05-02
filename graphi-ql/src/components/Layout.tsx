import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAppDispatch, useTypeSelector } from '../hooks/hooks';
import Footer from './Footer';
import { changeLang } from '../store/userInfoSlice';

const Layout = () => {
  const dispatch = useAppDispatch();
  const lang = useTypeSelector(state => state.user.lang)

  const handleChangeLang = () => {
    dispatch(changeLang);
    console.log(lang);
  }
  
  return (
    <>
      <header className="header flex justify-around h-8 w-full bg-gray-700">
        <Link to="/">Welcome Page</Link>
        <Link to="/auth">Login/signup</Link>
        <Link to="/graphi-ql">GraphQL</Link>
        <div onClick={handleChangeLang}>{lang}</div>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
