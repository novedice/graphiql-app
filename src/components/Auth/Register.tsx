import { FormRegister } from './FormRegister';
import { useNavigate } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';

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
        navigate('/');
      })
      .catch((error) => {
        console.error('Error updating user profile:', error);
      });
  };

  return <FormRegister title='register' handleClick={handleRegister} />;
};

export default Register;
