import { FormattedMessage } from 'react-intl';
import '../../index.css';

import { useAppDispatch, useTypeSelector } from '../../hooks/redux-hooks';
import { useNavigate } from 'react-router-dom';
import ModalWindow from '../../components/ModalWindow';
import { closeModalWindow, openModalWindow } from '../../store/slices/modalWindowSlice';
import ModalGetStarted from './components/ModalGetStarted';
import { updateStatusDoc } from '../../store/slices/docSlice';
import { updateStatusRequest } from '../../store/slices/requestSlice';

const WelcomePage = () => {
  const { show } = useTypeSelector((state) => state.modalWindow);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loggedIn } = useTypeSelector((state) => state.login);

  const getStart = () => {
    if (loggedIn) {
      dispatch(closeModalWindow());
      dispatch(updateStatusDoc());
      dispatch(updateStatusRequest());

      navigate('/graphi-ql');
    } else {
      dispatch(openModalWindow());
    }
  };

  return (
    <>
      <div>
        <div className='h-[600px] bg-welcomePage bg-top pt-28 max-lg:h-[500px] max-lg:pt-14 max-md:pt-10 max-sm:h-[450px]'>
          <div className='flex justify-around max-lg:justify-center max-lg:gap-[300px] max-md:gap-[200px]'>
            <div className='w-[300px] bg-black bg-opacity-50 p-5 rounded-xl max-lg:w-[200px] max-sm:hidden'>
              <h2 className='text-white text-[16px] font-bold mb-5 max-lg:text-[12px] max-lg:w-[200px]'>
                <FormattedMessage id='makeRequest' />
              </h2>
              <pre>
                <code className='text-[14px] text-white max-lg:text-[10px]'>
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
            <div className='w-[300px] bg-black bg-opacity-50 p-5 rounded-xl max-lg:w-[200px] max-sm:hidden'>
              <h2 className='w-[300px] text-[16px] text-white font-bold mb-5 max-lg:text-[12px] max-lg:w-[200px]'>
                <FormattedMessage id='getResponse' />
              </h2>
              <pre>
                <code className='text-[14px] text-white max-lg:text-[10px]'>
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

          <h1 className='ml-3 text-[30px] text-rose-500 text-center max-md:mt-[35px] max-sm:mt-[220px]'>
            GraphQl <FormattedMessage id='playground' />
          </h1>
          <div className='flex justify-center mt-12'>
            <button
              className='ml-3 capitalize text-3xl px-4 py-2 text-white border-[1px] font-sans border-white rounded font-thin hover:text-black hover:bg-white'
              onClick={getStart}
            >
              <FormattedMessage id='getStarted' />
            </button>
          </div>
        </div>
        <div className='bg-[#f5f6f8] py-[132px] max-lg:py-[80px] max-sm:py-[40px]'>
          <h1 className='text-[40px] font-light text-center max-sm:text-[30px]'>
            <FormattedMessage id='queryLanguageTitle' />
          </h1>
          <p className='w-[720px] text-center mt-[30px] font-extralight leading-[35.2px] text-[24px] mx-auto text-[#202020] max-md:w-[520px] max-sm:text-[20px] max-sm:w-[320px]'>
            <FormattedMessage id='queryLanguageDesc' />
          </p>
        </div>
        <div className='pt-[80px] pb-[132px] max-lg:py-[60px] max-md:pt-[30px]'>
          <h1 className='text-center text-[65px] font-light max-sm:text-[30px]'>
            <FormattedMessage id='ourTeam' />
          </h1>
          <div className='flex flex-wrap justify-around mt-10 max-md:mt-[0px]'>
            <div className='flex mt-[30px] items-center justify-around rounded-lg shadow-xl border-2 w-[450px] hover:scale-105 duration-300 max-sm:flex-col max-sm:py-[20px] max-sm:w-[300px]'>
              <h1 className='m-[30px] max-sm:mt-[0] max-sm:mb-[10px]'>
                <span className='font-bold'>
                  <FormattedMessage id='natalia' />
                </span>
                <p className='mt-3 mb-4 max-sm:mt-2 max-sm:mb-2'>
                  <FormattedMessage id='discord' />:{' '}
                  <span className='italic text-blue-500'>elkora#7166</span>
                </p>
                <a href='https://github.com/novedice' className='text-blue-500'>
                  <FormattedMessage id='github' />
                </a>
                <div className='mt-3 text-blue-500 max-sm:mt-2'>
                  <a href='https://t.me/Natashka_novedice'>
                    <FormattedMessage id='telegram' />
                  </a>
                </div>
              </h1>
              <div className='imgNatasha bg-cover bg-right items-center rounded-full' />
            </div>
            <div className='flex mt-[30px] items-center justify-around rounded-lg shadow-xl border-2 w-[450px] hover:scale-105 duration-300 max-sm:flex-col max-sm:py-[20px] max-sm:w-[300px]'>
              <h1 className='m-[20px] max-sm:mt-[0] max-sm:mb-[10px]'>
                <span className='font-bold'>
                  <FormattedMessage id='maxim' />
                </span>
                <p className='mt-3 mb-4 max-sm:mt-2 max-sm:mb-2'>
                  <FormattedMessage id='discord' />:{' '}
                  <span className='italic text-blue-500'>Max15(Maksim)#9275</span>
                </p>
                <a href='https://github.com/Maksim1509' className='text-blue-500'>
                  <FormattedMessage id='github' />
                </a>
                <div className='mt-3 text-blue-500 max-sm:mt-2'>
                  <a href='https://t.me/Maksim_1509'>
                    <FormattedMessage id='telegram' />
                  </a>
                </div>
              </h1>
              <div className='imgMax bg-cover bg-right items-center rounded-full' />
            </div>
            <div className='flex mt-[30px] items-center justify-around rounded-lg shadow-xl border-2 w-[450px] hover:scale-105 duration-300 max-sm:flex-col max-sm:py-[20px] max-sm:w-[300px]'>
              <h1 className='m-[20px] max-sm:mt-[0] max-sm:mb-[10px]'>
                <span className='font-bold'>
                  <FormattedMessage id='kirill' />
                </span>
                <p className='mt-3 mb-4 max-sm:mt-2 max-sm:mb-2'>
                  <FormattedMessage id='discord' />:{' '}
                  <span className='italic text-blue-500'>KirillKolchanov#2036</span>
                </p>
                <a href='https://github.com/KirillKolchanov/' className='text-blue-500'>
                  <FormattedMessage id='github' />
                </a>
                <div className='mt-3 text-blue-500 max-sm:mt-2'>
                  <a href='https://t.me/kirya_ko'>
                    <FormattedMessage id='telegram' />
                  </a>
                </div>
              </h1>
              <div className='imgKirill bg-cover bg-bottom items-center rounded-full' />
            </div>
          </div>
        </div>
        {show && (
          <ModalWindow>
            <ModalGetStarted />
          </ModalWindow>
        )}
      </div>
    </>
  );
};

export default WelcomePage;
