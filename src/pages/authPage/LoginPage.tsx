import Login from '../../components/Auth/Login';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h1 className='text-xl m-6'>
        <FormattedMessage id='login' />
      </h1>
      <Login />
      <p className='m-6'>
        Or <Link to='/register'>register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
