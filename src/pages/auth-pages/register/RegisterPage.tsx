import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Register from './Register';
import { useNavigate } from 'react-router';
import Loading from '../../../components/Loading';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/graphi-ql');
        setLoading(true);
      } else {
        setLoading(false);
      }
    });
  }, [navigate]);

  return <div className='m-12'>{loading ? <Loading color={'black'} /> : <Register />}</div>;
};

export default RegisterPage;
