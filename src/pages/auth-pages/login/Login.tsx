import { FormLogin } from './FormLogin';
import { useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../../store/slices/userSlice';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { logIn } from '../../../store/slices/loginSlice';
import { closeModalWindow } from '../../../store/slices/modalWindowSlice';

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
        dispatch(logIn());
        dispatch(closeModalWindow());
        navigate('/graphi-ql');
      })
      .catch(() => alert('Such a user does not exist'));
  };

  return <FormLogin handleClick={handleLogin} />;
};

export default Login;
