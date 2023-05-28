import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { FormattedMessage } from 'react-intl';

import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch, useTypeSelector } from '../../hooks/redux-hooks';

import { setUser, removeUser } from '../../store/slices/userSlice';
import { logIn, logOut } from '../../store/slices/loginSlice';
import { LanguageSelector, BurgerIcon } from './components/';

import GraphiQlLogo from '../../assets/logo.png';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { name } = useAuth();

  const { loggedIn } = useTypeSelector((state) => state.login);

  const [animateHeader, setAnimateHeader] = useState(false);
  const [openMenu, setOpenMenu] = useState('hidden');

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 0) {
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
        dispatch(logIn());
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
      } else {
        dispatch(logOut());
        return;
      }
    });
  }, [dispatch]);

  const logOutHandler = () => {
    dispatch(removeUser());
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logOut());
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const closeMenu = () => {
    setOpenMenu('hidden');
  };

  return (
    <header
      className={`w-full top-0 backdrop-filter backdrop-blur-lg sticky z-10 trasition ease-in-out duration-500 shadow-xl ${
        animateHeader ? 'py-2 bg-sky-500/50' : 'py-6 bg-white/50'
      }`}
    >
      <div
        className={`flex-col md:flex-row mx-auto container m-auto lg:flex lg:justify-between lg:items-center
        flex max-w-screen-xl items-center justify-between`}
      >
        <div
          className={`welcome w-[100%] pb-2 md:pb-0 ${
            openMenu === 'hidden' ? '' : 'border-b-2'
          } flex items-center justify-between md:w-auto md:border-b-0`}
        >
          <Link to='/'>
            <img className='w-12 ml-2 md:ml-3' src={GraphiQlLogo} alt='React Logo' />
          </Link>
          {loggedIn && (
            <h1 className='ml-0 text-l lg:text-2xl capitalize md:ml-4 lg:ml-6 font-bold'>
              <FormattedMessage id='welcome' />, {name}
            </h1>
          )}
          <BurgerIcon setOpen={setOpenMenu} open={openMenu} />
        </div>
        <nav className='flex w-[100%] md:w-auto  lg:flex lg:items-center'>
          <ul
            className={`${openMenu} w-[100%] flex items-center md:flex flex-col md:flex-row lg:flex lg:items-center`}
          >
            <li onClick={closeMenu}>
              <Link
                to='/'
                className='first-letter:uppercase px-2 block text-l lg:text-xl md:px-3 lg:px-4 py-2 text-gray-700 hover:bg-gray-100 rounded'
              >
                <FormattedMessage id='home' />
              </Link>
            </li>

            {loggedIn ? (
              <>
                <li onClick={closeMenu}>
                  <Link
                    to='/graphi-ql'
                    className='capitalize block px-2 text-l lg:text-xl md:px-2 lg:px-4 py-2 text-gray-700 hover:bg-gray-100 rounded'
                  >
                    <FormattedMessage id='to_graphi' />
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link
                    to='/login'
                    className='py-1 mb-2 px-2 ml-0 capitalize block text-l lg:text-xl md:px-2 lg:px-4 md:mb-0 md:py-2 text-gray-700 md:ml-10 bg-red-400 hover:bg-red-500 rounded'
                    onClick={logOutHandler}
                  >
                    <FormattedMessage id='log_out' />
                  </Link>
                </li>
              </>
            ) : (
              <div onClick={closeMenu} className='ml-4 flex flex-col md:flex-row  items-center'>
                <Link
                  to='/login'
                  className='capitalize block mb-3 md:mb-0 px-4 text-l lg:text-xl md:px-2 lg:px-4 py-2 text-gray-700  mr-2 font-bold bg-yellow-200 hover:bg-yellow-300 rounded'
                >
                  <FormattedMessage id='sign_in' />
                </Link>
                <Link
                  to='/register'
                  className='capitalize text-l mb-3 md:mb-0 lg:text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                  <FormattedMessage id='sign_up' />
                </Link>
              </div>
            )}
            <li>
              <LanguageSelector />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
