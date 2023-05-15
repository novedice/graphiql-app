import { FormattedMessage } from 'react-intl';
import { PAGE_STYLE } from '../../style-const/style-const';
import ResultWindow from './components/ResultsWindow';
import RequestEditor from './components/RequestEditor';
import VariablesEditor from '../../components/VariablesEditor';
// import Docs from '../../components/Docs';
import { lazy, Suspense } from 'react';

const Docs = lazy(() => import('../../components/Docs'));
const GraphQlPage = () => {
  return (
    <>
      <div className={`${PAGE_STYLE}`}>
        <FormattedMessage id='graphi_ql_page' />
        <div className='flex relative'>
          <div className='w-[50%]'>
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
