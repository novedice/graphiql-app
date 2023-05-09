import Login from '../../components/Auth/Login';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className='mt-12 ml-12'>
      <h1 className='text-3xl m-6 first-letter:uppercase'>
        <FormattedMessage id='login' />
      </h1>
      <Login />
      <p className='m-6'>
        <FormattedMessage id='or' />{' '}
        <Link to='/register'>
          <FormattedMessage id='register' />
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
