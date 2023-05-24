import { FormattedMessage } from 'react-intl';
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
      <div>
        <div className='h-[600px] bg-welcomePage bg-top pt-28'>
          <div className='flex justify-around'>
            <div className='w-[300px] bg-black bg-opacity-50 p-5 rounded-xl'>
              <h2 className='text-white text-[16px] font-bold mb-5'>
                <FormattedMessage id='makeRequest' />
              </h2>
              <pre>
                <code className='text-[14px] text-white'>
                  <span className='text-[#555]'>{`{`}</span>
                  {`
  country`}
                  <span className='text-[#555]'>{`(`}</span>
                  <span className='text-blue-400'>code: </span>
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
            </div>
            <div className='w-[300px] bg-black bg-opacity-50 p-5 rounded-xl'>
              <h2 className='w-[300px] text-white font-bold mb-5'>
                <FormattedMessage id='getResponse' />
              </h2>
              <pre>
                <code className='text-[14px] text-white'>
                  <span className='text-[#555]'>{`{`}</span>
                  <br />
                  <span className='text-blue-400'>{`  data: `}</span>
                  <span className='text-[#555]'>{`{`}</span>
                  <br />
                  <span className='text-blue-400'>{`    "country":`}</span>
                  <span className='text-[#555]'>{` {`}</span>
                  <br />
                  <span className='text-blue-400'>{`      "name":`}</span>
                  <span className='text-[#d64292]'>{` "Portugal"`}</span>
                  <br />
                  <span className='text-[#555]'>{`    }`}</span>
                  <br />
                  <span className='text-[#555]'>{`  }`}</span>
                  <br />
                  <span className='text-[#555]'>{`}`}</span>
                </code>
              </pre>
            </div>
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
        <div className='bg-[#f5f6f8] pb-[132px]'>
          <h1 className='pt-[132px] text-[40px] font-light text-center'>
            <FormattedMessage id='queryLanguageTitle' />
          </h1>
          <p className='w-[720px] text-center mt-[30px] font-extralight leading-[35.2px] text-[24px] mx-auto text-[#202020]'>
            <FormattedMessage id='queryLanguageDesc' />
          </p>
        </div>
        <div className='pt-20 pb-40'>
          <h1 className='text-center text-[65px] font-light'>
            <FormattedMessage id='ourTeam' />
          </h1>
          <div className='flex flex-wrap justify-around mt-20'>
            <div className='flex items-center justify-around rounded-lg shadow-xl border-2 w-[450px] hover:scale-105 duration-300'>
              <h1 className='m-[20px]'>
                <span className='font-bold'>
                  <FormattedMessage id='natalia' />
                </span>
                <p className='mt-3 mb-4'>
                  <FormattedMessage id='discord' />:{' '}
                  <span className='italic text-blue-500'>elkora#7166</span>
                </p>
                <a href='https://github.com/novedice' className='text-blue-500'>
                  <FormattedMessage id='github' />
                </a>
                <div className='mt-3 text-blue-500'>
                  <a href='https://t.me/Natashka_novedice'>
                    <FormattedMessage id='telegram' />
                  </a>
                </div>
              </h1>
              <div className='imgNatasha bg-cover bg-right items-center rounded-full' />
            </div>
            <div className='flex items-center justify-around rounded-lg shadow-xl border-2 w-[450px] hover:scale-105 duration-300'>
              <h1 className='m-[20px]'>
                <span className='font-bold'>
                  <FormattedMessage id='maxim' />
                </span>
                <p className='mt-3 mb-4'>
                  <FormattedMessage id='discord' />:{' '}
                  <span className='italic text-blue-500'>Max15(Maksim)#9275</span>
                </p>
                <a href='https://github.com/Maksim1509' className='text-blue-500'>
                  <FormattedMessage id='github' />
                </a>
                <div className='mt-3 text-blue-500'>
                  <a href='https://t.me/Maksim_1509'>
                    <FormattedMessage id='telegram' />
                  </a>
                </div>
              </h1>
              <div className='imgMax bg-cover bg-right items-center rounded-full' />
            </div>
            <div className='flex items-center justify-around rounded-lg shadow-xl border-2 w-[450px] hover:scale-105 duration-300'>
              <h1 className='m-[20px]'>
                <span className='font-bold'>
                  <FormattedMessage id='kirill' />
                </span>
                <p className='mt-3 mb-4'>
                  <FormattedMessage id='discord' />:{' '}
                  <span className='italic text-blue-500'>KirillKolchanov#2036</span>
                </p>
                <a href='https://github.com/KirillKolchanov/' className='text-blue-500'>
                  <FormattedMessage id='github' />
                </a>
                <div className='mt-3 text-blue-500'>
                  <a href='https://t.me/kirya_ko'>
                    <FormattedMessage id='telegram' />
                  </a>
                </div>
              </h1>
              <div className='imgKirill bg-cover bg-bottom items-center rounded-full' />
            </div>
          </div>
        </div>
        <ModalWindow isOpen={isOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default WelcomePage;
