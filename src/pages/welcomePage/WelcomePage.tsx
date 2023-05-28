import { FormattedMessage } from 'react-intl';
import '../../index.css';

import { useAppDispatch, useTypeSelector } from '../../hooks/redux-hooks';
import { Link, useNavigate } from 'react-router-dom';
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
          <p className='w-[720px] text-center mt-[30px] font-extralight leading-[35.2px] text-[24px] mx-auto text-[#202020] max-md:w-[520px] max-sm:text-[15px] max-sm:w-[300px]'>
            <FormattedMessage id='queryLanguageDesc' />
          </p>
        </div>

        <div className='pt-[80px] pb-[132px] max-lg:py-[60px] max-md:pt-[30px] px-10'>
          <h1 className='text-center text-[65px] font-light max-sm:text-[30px] max-md:text-[40px]'>
            <FormattedMessage id='ourTeam' />
          </h1>
          <div className='flex flex-wrap justify-around mt-10 max-md:mt-[0px] gap-[15px] max-sm:mt-[20px]'>
            <div className='flex mt-[30px] items-center justify-around rounded-lg shadow-xl border-2 w-[450px] hover:scale-105 duration-300 max-sm:flex-col max-sm:py-[20px] max-sm:w-[300px] max-sm:mt-0'>
              <div className='m-[30px] max-sm:mt-[0] max-sm:mb-[10px]'>
                <span className='font-bold'>
                  <FormattedMessage id='natalia' />
                </span>
                <p className='mt-3 mb-4 max-sm:mt-2 max-sm:mb-2'>
                  <FormattedMessage id='discord' />:{' '}
                  <span className='italic text-blue-500'>elkora#7166</span>
                </p>
                <Link to='https://github.com/novedice' className='text-blue-500' target='_blank'>
                  <FormattedMessage id='github' />
                </Link>
                <div className='mt-3 text-blue-500 max-sm:mt-2'>
                  <Link to='https://t.me/Natashka_novedice' target='_blank'>
                    <FormattedMessage id='telegram' />
                  </Link>
                </div>
              </div>
              <Link
                to={'https://github.com/novedice'}
                className='imgNatasha bg-cover bg-right items-center rounded-full'
                target='_blank'
              />
            </div>
            <div className='flex mt-[30px] items-center justify-around rounded-lg shadow-xl border-2 w-[450px] hover:scale-105 duration-300 max-sm:flex-col max-sm:py-[20px] max-sm:w-[300px]'>
              <div className='m-[20px] max-sm:mt-[0] max-sm:mb-[10px]'>
                <span className='font-bold'>
                  <FormattedMessage id='maxim' />
                </span>
                <p className='mt-3 mb-4 max-sm:mt-2 max-sm:mb-2'>
                  <FormattedMessage id='discord' />:{' '}
                  <span className='italic text-blue-500'>Max15(Maksim)#9275</span>
                </p>
                <Link to='https://github.com/Maksim1509' className='text-blue-500' target='_blank'>
                  <FormattedMessage id='github' />
                </Link>
                <div className='mt-3 text-blue-500 max-sm:mt-2'>
                  <Link to='https://t.me/Maksim_1509' target='_blank'>
                    <FormattedMessage id='telegram' />
                  </Link>
                </div>
              </div>
              <Link
                to={'https://github.com/Maksim1509'}
                className='imgMax bg-cover bg-right items-center rounded-full'
                target='_blank'
              />
            </div>
            <div className='flex mt-[30px] items-center justify-around rounded-lg shadow-xl border-2 w-[450px] hover:scale-105 duration-300 max-sm:flex-col max-sm:py-[20px] max-sm:w-[300px]'>
              <div className='m-[20px] max-sm:mt-[0] max-sm:mb-[10px]'>
                <span className='font-bold'>
                  <FormattedMessage id='kirill' />
                </span>
                <p className='mt-3 mb-4 max-sm:mt-2 max-sm:mb-2'>
                  <FormattedMessage id='discord' />:{' '}
                  <span className='italic text-blue-500'>KirillKolchanov#2036</span>
                </p>
                <Link
                  to='https://github.com/KirillKolchanov/'
                  className='text-blue-500'
                  target='_blank'
                >
                  <FormattedMessage id='github' />
                </Link>
                <div className='mt-3 text-blue-500 max-sm:mt-2'>
                  <Link to='https://t.me/kirya_ko' target='_blank'>
                    <FormattedMessage id='telegram' />
                  </Link>
                </div>
              </div>
              <Link
                to={'https://github.com/KirillKolchanov/'}
                className='imgKirill bg-cover bg-bottom items-center rounded-full'
                target='_blank'
              />
            </div>
          </div>
        </div>

        <div className='bg-[#f5f6f8] pt-[40px] pb-[132px] max-sm:py-[40px]'>
          <h1 className='text-center text-[65px] font-light max-sm:text-[30px] max-lg:text-[55px] max-md:text-[40px]'>
            <FormattedMessage id='projectDescription' />
          </h1>
          <div className='flex border-2 items-center w-[800px] m-auto mt-10 max-lg:w-[600px] max-md:w-[500px] max-sm:w-[300px] max-sm:flex-col'>
            <div className='w-[30%] flex justify-center max-sm:mt-5'>
              <Link
                to={
                  'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md#graphiql'
                }
                className='font-bold text-[30px] text-blue-500 max-lg:text-[20px]'
                target='_blank'
              >
                GraphiQL
              </Link>
            </div>
            <div className='w-[70%] max-sm:w-auto'>
              <p className='p-8 border-l-2 font-extralight leading-[35.2px] text-[24px] mx-auto text-[#202020] max-lg:text-[20px] max-md:w-[350px] max-sm:text-[15px] max-sm:border-0 max-sm:w-[300px] max-sm:p-4 max-sm:text-center'>
                <FormattedMessage id='projectGraphText' />
              </p>
            </div>
          </div>
          <div className='flex border-2 items-center w-[800px] m-auto mt-10 max-lg:w-[600px] max-md:w-[500px] max-sm:w-[300px] max-sm:flex-col'>
            <div className='w-[30%] flex justify-center max-sm:mt-5'>
              <Link
                to={
                  'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md#theoretical-notes'
                }
                className='font-bold text-[30px] text-blue-500 flex text-center max-lg:text-[20px] max-md:text-[15px] max-sm:text-[20px]'
                target='_blank'
              >
                <FormattedMessage id='projectNotes' />
              </Link>
            </div>
            <div className='w-[70%] max-sm:w-auto'>
              <p className='p-8 border-l-2 font-extralight leading-[35.2px] text-[24px] mx-auto text-[#202020] max-lg:text-[20px] max-md:w-[350px] max-sm:text-[15px] max-sm:w-[300px] max-sm:border-0 max-sm:p-4 max-sm:text-center'>
                <FormattedMessage id='projectTheorText1' />
                <Link
                  to={'https://www.npmjs.com/package/@graphiql/react'}
                  className='text-blue-500'
                  target='_blank'
                >
                  <FormattedMessage id='projectTheorLink' />
                </Link>
                <FormattedMessage id='projectTheorText2' />
              </p>
            </div>
          </div>
          <div className='flex border-2 items-center w-[800px] m-auto mt-10 max-lg:w-[600px] max-md:w-[500px] max-sm:w-[300px] max-sm:flex-col'>
            <div className='w-[30%] flex justify-center max-sm:mt-5'>
              <Link
                to={
                  'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md#building-a-team'
                }
                className='font-bold text-[30px] text-blue-500 flex text-center max-lg:text-[20px] max-md:text-[15px] max-sm:text-[20px]'
                target='_blank'
              >
                <FormattedMessage id='projectTeam' />
              </Link>
            </div>
            <div className='w-[70%] max-sm:w-auto'>
              <p className='p-8 border-l-2 font-extralight leading-[35.2px] text-[24px] mx-auto text-[#202020] max-lg:text-[20px] max-md:w-[350px] max-sm:text-[15px] max-sm:w-[300px] max-sm:border-0 max-sm:p-4 max-sm:text-center'>
                <FormattedMessage id='projectTeamText' />
                <Link
                  to={'https://docs.rs.school/#/teams'}
                  className='text-blue-500'
                  target='_blank'
                >
                  <FormattedMessage id='projectDocs' />
                </Link>
              </p>
            </div>
          </div>
          <div className='flex border-2 items-center w-[800px] m-auto mt-10 max-lg:w-[600px] max-md:w-[500px] max-sm:w-[300px] max-sm:flex-col'>
            <div className='w-[30%] flex justify-center max-sm:mt-5'>
              <Link
                to={
                  'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md#backend'
                }
                className='font-bold text-[30px] text-blue-500 flex text-center max-lg:text-[20px]'
                target='_blank'
              >
                Backend
              </Link>
            </div>
            <div className='w-[70%] max-sm:w-auto'>
              <p className='p-8 border-l-2 font-extralight leading-[35.2px] text-[24px] mx-auto text-[#202020] max-lg:text-[20px] max-md:w-[350px] max-sm:text-[15px] max-sm:w-[300px] max-sm:border-0 max-sm:p-4 max-sm:text-center'>
                <FormattedMessage id='projectBackendText' />
              </p>
            </div>
          </div>
          <h3 className='text-center mt-10 font-extralight text-[28px] max-sm:text-[20px]'>
            <FormattedMessage id='projectFullDesc' />
            <Link
              to={
                'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md'
              }
              className='text-blue-500'
              target='_blank'
            >
              <FormattedMessage id='here' />
            </Link>
          </h3>
        </div>

        <div className='pt-[40px] pb-[132px] max-sm:py-[40px]'>
          <h1 className='text-center text-[65px] font-light max-md:text-[40px] max-sm:text-[30px]'>
            <FormattedMessage id='courseTitle' />
          </h1>
          <div className='flex flex-col w-[800px] m-auto max-lg:w-[600px] max-md:w-[400px] max-sm:w-[300px]'>
            <p className='mt-[30px] font-extralight leading-[35.2px] text-[24px] mx-auto text-[#202020] max-md:w-[400px] max-sm:w-[300px] max-sm:text-[15px]'>
              <FormattedMessage id='courseDesc' />
            </p>
            <ul className='text-[22px] list-disc ml-10 mt-7 font-extralight leading-[40px] max-sm:text-[15px]'>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>
                Git, GitHub (clone, add, commit, push, pull, merge, rebase, pull request flow)
              </li>
              <li>NPM, Webpack</li>
              <li>CSS3 / HTML5</li>
              <li>Chrome DevTools, Figma</li>
              <li>
                <FormattedMessage id='courseListItem' />
              </li>
            </ul>
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
