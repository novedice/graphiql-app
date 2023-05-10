import { FormattedMessage } from 'react-intl';
import { PAGE_STYLE } from '../../style-const/style-const';
import ResultWindow from './components/ResultsWindow';
import RequestEditor from './components/RequestEditor';
import VariablesEditor from '../../components/VariablesEditor';
import Docs from '../../components/Docs';

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
          <ResultWindow />
          <Docs />
        </div>
      </div>
    </>
  );
};

export default GraphQlPage;
