import { FormRegister } from './FormRegister';
import { useNavigate } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { FormattedMessage } from 'react-intl';

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (name: string, email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(user, { displayName: name }).catch((err) => console.log(err));

        dispatch(
          setUser({
            name: name,
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/graphi-ql');
      })
      .catch((error) => {
        console.error('Error updating user profile:', error);
      });
  };

  return <FormRegister title={<FormattedMessage id='register' />} handleClick={handleRegister} />;
};

export default Register;
