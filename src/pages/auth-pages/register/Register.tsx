import { FormRegister } from './FormRegister';
import { useNavigate } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setUser } from '../../../store/slices/userSlice';
import { useAppDispatch, useTypeSelector } from '../../../hooks/redux-hooks';
import { useEffect } from 'react';
import { logIn } from '../../../store/slices/loginSlice';
import { closeModalWindow } from '../../../store/slices/modalWindowSlice';

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loggedIn } = useTypeSelector((state) => state.login);

  useEffect(() => {
    if (loggedIn) {
      navigate('/graphi-ql');
    }
  }, [loggedIn, navigate]);

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

        dispatch(logIn());
        dispatch(closeModalWindow());

        navigate('/graphi-ql');
      })
      .catch((error) => {
        console.error('Error updating user profile:', error);
      });
  };

  return <FormRegister handleClick={handleRegister} />;
};

export default Register;
