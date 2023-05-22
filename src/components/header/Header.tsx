import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

import GraphiQlLogo from '../../assets/logo.png';

import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch, useTypeSelector } from '../../hooks/redux-hooks';

import { setUser, removeUser } from '../../store/slices/userSlice';
import { logIn, logOut } from '../../store/slices/loginSlice';

import LanguageSelector from '../../pages/authPage/components/LanguageSelector';
import { FormattedMessage } from 'react-intl';

import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import BurgerIcon from './BurgerIcon';

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

  return (
    <header
      className={`w-full top-0 backdrop-filter backdrop-blur-lg sticky z-10 trasition ease-in-out duration-500 shadow-xl ${
        animateHeader ? 'py-2 bg-sky-500/50' : 'py-6 bg-white/50'
      }`}
    >
      <div
        className={`flex-col sm:flex-row mx-auto container m-auto md:flex md:justify-between md:items-center
        flex max-w-screen-xl items-center justify-between`}
      >
        <div
          className={`welcome w-[100%] pb-2 ${
            openMenu === 'hidden' ? '' : 'border-b-2'
          } flex items-center justify-between sm:w-auto sm:border-b-0`}
        >
          <Link to='/'>
            <img className='w-12 ml-2 sm:ml-0' src={GraphiQlLogo} alt='React Logo' />
          </Link>
          {loggedIn && (
            <h1 className='ml-0 text-xl md:text-2xl capitalize  sm:ml-6 font-bold'>
              <FormattedMessage id='welcome' />, {name}
            </h1>
          )}
          <BurgerIcon setOpen={setOpenMenu} open={openMenu} />
        </div>
        <nav className='flex w-[100%] sm:w-auto  md:flex md:items-center'>
          <ul
            className={`${openMenu} w-[100%] flex items-center sm:flex flex-col sm:flex-row md:flex md:items-center`}
          >
            <li>
              <Link
                to='/'
                className='first-letter:uppercase block text-xl px-4 py-2 text-gray-700 hover:bg-gray-100 rounded'
              >
                <FormattedMessage id='home' />
              </Link>
            </li>

            {loggedIn ? (
              <>
                <li>
                  <Link
                    to='/graphi-ql'
                    className='capitalize block text-xl px-4 py-2 text-gray-700 hover:bg-gray-100 rounded'
                  >
                    <FormattedMessage id='to_graphi' />
                  </Link>
                </li>
                <li>
                  <Link
                    to='/login'
                    className='py-1 mb-2 ml-0 capitalize block text-xl px-4 sm:mb:0 sm:py-2 text-gray-700 sm:ml-10 bg-red-400 hover:bg-red-500 rounded'
                    onClick={logOutHandler}
                  >
                    <FormattedMessage id='log_out' />
                  </Link>
                </li>
              </>
            ) : (
              <div className='ml-4 flex items-center'>
                <Link
                  to='/login'
                  className='capitalize block text-xl px-4 py-2 text-gray-700  mr-2 font-bold bg-yellow-200 hover:bg-yellow-300 rounded'
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
