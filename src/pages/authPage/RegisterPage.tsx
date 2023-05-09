import Register from '../../components/Auth/Register';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className='m-12'>
      <h1 className='text-3xl m-6 first-letter:uppercase'>
        <FormattedMessage id='register' />
      </h1>
      <Register />
      <p className='m-6'>
        <FormattedMessage id='have_an_account' />{' '}
        <Link to='/login' className='capitalize'>
          <FormattedMessage id='sign_in' />
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
