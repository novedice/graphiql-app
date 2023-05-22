import { FormattedMessage } from 'react-intl';
import { PAGE_STYLE } from '../../style-const/style-const';
import '../../index.css';

import { useTypeSelector } from '../../hooks/redux-hooks';
import { useNavigate } from 'react-router-dom';
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
        <div className='h-[600px] bg-welcomePage bg-top pt-32'>
          <div className='flex justify-around'>
            <pre className='bg-black bg-opacity-50 p-5 rounded-xl'>
              <h2 className='text-white text-[16px] font-bold mb-10'>Ask for what you want</h2>
              <code className='text-[14px] text-white'>
                <span className='text-[#555]'>{`{`}</span>
                {`
  country`}{' '}
                <span className='text-[#555]'>{`(`}</span>
                <span className='text-[#1f61a0]'>code: </span>
                <span className='text-[#d64292]'>{`"PT"`}</span>
                <span className='text-[#555]'>{`)`}</span>
                <span className='text-[#555]'>{` {`}</span>
                {`
    name`}
                <br />
                <span className='text-[#555]'>{`  }`}</span>
                <br />
                <span className='text-[#555]'>{`}`}</span>
              </code>
            </pre>
            <pre className='bg-black bg-opacity-50 p-5 rounded-xl'>
              <h2 className='text-white font-bold mb-10'>Get predictable results</h2>
              <code className='text-[14px] text-white'>
                {`{
  "data": {
    "country": {
      "name": "Portugal"
    }
  }
}`}
              </code>
            </pre>
          </div>

          <h1 className='ml-3 text-[30px] text-rose-500 text-center'>
            GraphQl <FormattedMessage id='playground' />
          </h1>
          <div className='flex justify-center mt-12'>
            <button
              className='ml-3 capitalize text-3xl px-4 py-2 text-white border-[1px] font-sans border-white rounded font-thin hover:text-black hover:bg-white'
              onClick={() => {
                loggedIn ? navigate('/graphi-ql') : setIsOpen(true);
              }}
            >
              <FormattedMessage id='getStarted' />
            </button>
          </div>
        </div>
        <div className='bg-[#f5f6f8] h-[500px]'>
          <h1 className='pt-[132px] text-[40px] font-light text-center'>
            A query language for your API
          </h1>
          <p className='w-[720px] text-center mt-[30px] font-extralight leading-[35.2px] text-[24px] mx-auto text-[#202020]'>
            GraphQL is a query language for APIs and a runtime for fulfilling those queries with
            your existing data. GraphQL provides a complete and understandable description of the
            data in your API, gives clients the power to ask for exactly what they need and nothing
            more, makes it easier to evolve APIs over time, and enables powerful developer tools.
          </p>
        </div>
        <ModalWindow isOpen={isOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default WelcomePage;
