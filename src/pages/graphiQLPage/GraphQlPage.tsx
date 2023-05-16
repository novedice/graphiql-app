import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTypeSelector } from '../../hooks/redux-hooks';
import ResultWindow from '../../components/ResultsWindow';
import RequestEditor from '../../components/RequestEditor';
import VariablesEditor from '../../components/VariablesEditor';
// import Docs from '../../components/Docs';
import { lazy, Suspense } from 'react';

const Docs = lazy(() => import('../../components/Docs'));
const GraphQlPage = () => {
  const { loggedIn } = useTypeSelector((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate('/');
    }
  }, [loggedIn, navigate]);

  return (
    <>
      <div className={`w-full bg-slate-300 mobile:max-sm:flex-col`}>
        <div className='w-[98%] flex justify-center'>
          <div className='w-[64%] m-2 mr-1 flex flex-col'>
            <RequestEditor />
            <VariablesEditor />
          </div>
          <div className='flex relative justify-center m-2 ml-1 w-[30%]'>
            <ResultWindow />
            <Suspense fallback={<p>loading...</p>}>
              <Docs />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphQlPage;
