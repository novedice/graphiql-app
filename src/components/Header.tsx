import { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import GraphiQlLogo from '../assets/logo.png';

import { useAuth } from '../hooks/use-auth';
import { useAppDispatch } from '../hooks/redux-hooks';

import { setUser, removeUser } from '../store/slices/userSlice';

import LanguageSelector from './Auth/LanguageSelector';
import { FormattedMessage } from 'react-intl';

import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

const Header = () => {
  const dispatch = useAppDispatch();
  const { isAuth, name } = useAuth();
  const navigate = useNavigate();

  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 40) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/graphi-ql');
      } else {
        return;
      }
    });
  }, []);

  const logOutHandler = () => {
    dispatch(removeUser());
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <header
      className={`w-full top-0 backdrop-filter backdrop-blur-lg sticky z-10 trasition ease-in-out duration-500 shadow-xl ${
        animateHeader ? 'py-2 bg-sky-500/50' : 'py-6 bg-white/50'
      }`}
    >
      <div
        className={`mx-auto container m-auto md:flex md:justify-between md:items-center
        flex max-w-screen-xl items-center justify-between trasition ease-in-out duration-500`}
      >
        <div className={`flex items-center justify-between`}>
          <Link to='/'>
            <img className='w-12' src={GraphiQlLogo} alt='React Logo' />
          </Link>
          {isAuth ? (
            <h1 className='capitalize text-2xl ml-6 font-bold'>
              <FormattedMessage id='welcome' />, {name}
            </h1>
          ) : (
            <></>
          )}
        </div>
        <nav className='hidden md:flex md:items-center'>
          <ul className='md:flex md:items-center'>
            <li>
              <Link
                to='/'
                className='first-letter:uppercase block text-xl px-4 py-2 text-gray-700 hover:bg-gray-100 rounded'
              >
                <FormattedMessage id='home' />
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='capitalize block text-xl px-4 py-2 text-gray-700 hover:bg-gray-100 rounded'
              >
                <FormattedMessage id='about' />
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='capitalize block text-xl px-4 py-2 text-gray-700 hover:bg-gray-100 rounded'
              >
                <FormattedMessage id='contact' />
              </Link>
            </li>
          </ul>

          {isAuth ? (
            <Link
              to='/login'
              className='capitalize block text-xl px-4 py-2 text-gray-700  ml-10 bg-red-400 hover:bg-red-500 rounded'
              onClick={logOutHandler}
            >
              <FormattedMessage id='log_out' />
            </Link>
          ) : (
            <div className='ml-4 flex items-center'>
              <Link
                to='/login'
                className='capitalize block text-xl px-4 py-2 text-gray-700  mr-2 bg-yellow-300 hover:bg-yellow-400 rounded'
              >
                <FormattedMessage id='sign_in' />
              </Link>
              <Link
                to='/register'
                className='capitalize text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                <FormattedMessage id='sign_up' />
              </Link>
            </div>
          )}
          <LanguageSelector />
        </nav>
      </div>
    </header>
  );
};

export default Header;
