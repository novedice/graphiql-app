import { FormattedMessage } from 'react-intl';
import { PAGE_STYLE } from '../../style-const/style-const';
import '../../index.css';

import { useAppDispatch, useTypeSelector } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/use-auth';
import { Link, useNavigate } from 'react-router-dom';
import ModalWindow from '../../components/ModalWindow';
import { useState } from 'react';

const WelcomePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { loggedIn } = useTypeSelector((state) => state.login);

  const handleCloseModal = () => {
    document.body.classList.remove('overflow-hidden');
    setIsOpen(false);
  };

  return (
    <>
      <div className={`${PAGE_STYLE}`}>
        <div className='h-[600px] bg-welcomePage flex justify-center bg-top'>
          <h1 className='ml-3 mt-72 text-[30px] text-rose-500'>GraphQl playground</h1>
          <button
            className='ml-3 absolute mt-96 capitalize text-3xl px-4 py-2 text-white border-[1px] font-sans border-white rounded font-thin hover:text-black hover:bg-white'
            onClick={() => {
              loggedIn ? navigate('/graphi-ql') : setIsOpen(true);
            }}
          >
            <FormattedMessage id='getStarted' />
          </button>
        </div>
        <ModalWindow isOpen={isOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default WelcomePage;
