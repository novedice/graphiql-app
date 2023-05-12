import { FormLogin } from './FormLogin';
import { useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { FormattedMessage } from 'react-intl';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/graphi-ql');
      })
      .catch(() => alert('Invalid user'));
  };

  return <FormLogin title={<FormattedMessage id='sign_in' />} handleClick={handleLogin} />;
};

export default Login;
