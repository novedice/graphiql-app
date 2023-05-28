import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from './Login';
import Loading from '../../../components/Loading';

const LoginPage = () => {
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

  return (
    <div className='m-12 min-h-[68vh]'>{loading ? <Loading color={'black'} /> : <Login />}</div>
  );
};

export default LoginPage;
