import { useEffect, useState, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useTypeSelector } from '../../hooks/redux-hooks';
import ModalWindow from '../../components/ModalWindow';
import * as Components from './components/index';

const Docs = lazy(() => import('./components/Docs'));

const GraphQlPage = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(true);
  const { show } = useTypeSelector((state) => state.modalWindow);

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
      <div className='bg-welcomePage bg-top'>
        {load ? (
          <div>Loading...</div>
        ) : (
          <div className={`relative w-full `}>
            <div className='windows-container w-full flex-col sm:flex-row flex justify-center pt-[20px] pb-[20px]'>
              <div className='left-part-container w-[98%] sm:w-[50%] m-2 mr-0 flex flex-col'>
                <Components.RequestEditor />
                <Components.VariablesEditor />
              </div>
              <div className='right-part-container w-[98%] sm:w-[45%] mb-1 flex justify-center m-2 ml-1 '>
                <Components.ResultWindow />
                <Suspense
                  fallback={
                    <div className='fixed right-[10px] top-[350px]'>
                      <Components.Spinner />
                    </div>
                  }
                >
                  <Docs />
                </Suspense>
              </div>
            </div>
          </div>
        )}
        {show && (
          <ModalWindow>
            <Components.ErrorWindow />
          </ModalWindow>
        )}
      </div>
    </>
  );
};

export default GraphQlPage;
