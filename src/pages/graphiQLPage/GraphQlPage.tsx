import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import ResultWindow from '../../components/ResultsWindow';
import RequestEditor from '../../components/RequestEditor';
import VariablesEditor from '../../components/VariablesEditor';
import { lazy, Suspense } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Docs = lazy(() => import('../../components/Docs'));

const GraphQlPage = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
        setLoad(true);
      } else {
        setLoad(false);
      }
    });
  }, [navigate]);

  return (
    <>
      {load ? (
        <div>Loading...</div>
      ) : (
        <div className={`w-full bg-slate-300 `}>
          <div className='w-full flex-col sm:flex-row flex justify-center'>
            <div className='w-[98%] sm:w-[50%] m-2 flex flex-col'>
              <RequestEditor />
              <VariablesEditor />
            </div>
            <div className='w-[98%] sm:w-[45%] flex relative justify-center m-2 ml-1 '>
              <ResultWindow />
              <Suspense fallback={<p>loading...</p>}>
                <Docs />
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GraphQlPage;
