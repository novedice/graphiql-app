import { FaGithub } from 'react-icons/fa';

import RSSchoolLogo from '../assets/rs_school_logo.svg';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
  return (
    <>
      <footer className='bg-slate-700 h-8 bottom-0'>2023</footer>
      <footer className='bg-gray-200 py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center bottom-0 w-full absolute'>
        <div className='flex items-center'>
          <Link to={'https://github.com/novedice/graphiql-app'} target='_blank'>
            <FaGithub className='text-black' size={60} />
          </Link>
          <div className='flex flex-col ml-8'>
            <p className='font-bold'>
              <FormattedMessage id='madeBy' />:
            </p>
            <Link to={'https://github.com/novedice'} className='underline' target='_blank'>
              Novedice
            </Link>
            <Link to={'https://github.com/Maksim1509'} className='underline' target='_blank'>
              Maksim1509
            </Link>
            <Link to={'https://github.com/KirillKolchanov/'} className='underline' target='_blank'>
              KirillKolchanov
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <Link
            to={
              'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md'
            }
            className='text-2xl font-bold underline'
            target='_blank'
          >
            GraphiQL <FormattedMessage id='project' />
          </Link>
          <div className='text-black text-l font-light'>2023</div>
        </div>
        <Link
          to={'https://rs.school/react/'}
          className='flex-col items-center justify-center'
          target='_blank'
        >
          <img src={RSSchoolLogo} alt='Company Logo' className='w-24 mr-2' />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
