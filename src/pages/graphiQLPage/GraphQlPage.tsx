import { FormattedMessage } from 'react-intl';
import { PAGE_STYLE } from '../../style-const/style-const';
import ResultWindow from './components/ResultsWindow';
import RequestEditor from './components/RequestEditor';
import VariablesEditor from '../../components/VariablesEditor';

const GraphQlPage = () => {
  return (
    <>
      <div className={`${PAGE_STYLE}`}>
        <FormattedMessage id='graphi_ql_page' />
        <div className='flex'>
          <div className='w-[50%]'>
            <RequestEditor />
            <VariablesEditor />
          </div>
          <ResultWindow />
        </div>
      </div>
    </>
  );
};

export default GraphQlPage;
