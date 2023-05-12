import { useState } from 'react';
import { useAppDispatch, useTypeSelector } from '../../hooks/redux-hooks';
import { changeToEn, changeToRu } from '../../store/slices/langSlice';

import USAFlag from '../../assets/lang_flags/USAFlag.png';
import RuFlag from '../../assets/lang_flags/RuFlag.png';

const LanguageSelector = () => {
  const { lang } = useTypeSelector((state) => state.userLang);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleLanguageClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleToEnLang = () => {
    setIsDropdownOpen(false);
    dispatch(changeToEn());
  };

  const handleToRuLang = () => {
    setIsDropdownOpen(false);
    dispatch(changeToRu());
  };
  return (
    <div className='flex items-center md:order-2 ml-4'>
      {lang === 'en' ? (
        <button
          type='button'
          className='inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
          onClick={handleLanguageClick}
        >
          <img className='w-4 mr-2' src={USAFlag} alt='' />
          English (US)
        </button>
      ) : (
        <button
          type='button'
          className='inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
          onClick={handleLanguageClick}
        >
          <img className='w-4 mr-2' src={RuFlag} alt='' />
          Russian (Ru)
        </button>
      )}

      <div
        className={`z-50 top-14 absolute ${
          isDropdownOpen ? '' : 'hidden'
        } my-4 bg-white text-base list-none divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}
      >
        <ul className='py-2 font-medium' role='none'>
          <li>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={handleToEnLang}
            >
              <div className='inline-flex items-center'>
                <img className='w-4 mr-2' src={USAFlag} alt='' />
                English (US)
              </div>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={handleToRuLang}
            >
              <div className='inline-flex items-center'>
                <img className='w-4 mr-2' src={RuFlag} alt='' />
                Russian (RU)
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelector;
