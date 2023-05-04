import LoginForm from '../../components/Auth/LoginForm';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h1 className='text-xl m-6'><FormattedMessage id='login_l' /></h1>
      <LoginForm />
      <p className='m-6'>Or <Link to="/register">register</Link></p>
    </div>
   );
}

export default LoginPage;