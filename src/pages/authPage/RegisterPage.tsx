import Register from '../../components/Auth/Register';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <h1 className='text-xl m-6'>
        <FormattedMessage id='register' />
      </h1>
      <Register />
      <p className='m-6'>
        Already have an account? <Link to='/login'>Sign in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
