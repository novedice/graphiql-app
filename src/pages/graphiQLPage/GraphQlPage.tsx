import { FormattedMessage } from 'react-intl';
import { PAGE_STYLE } from '../../style-const/style-const';
import ResultWindow from './components/ResultsWindow';
import RequestEditor from './components/RequestEditor';

const GraphQlPage = () => {
  return (
    <>
      <div className={`${PAGE_STYLE}`}>
        <FormattedMessage id='graphi_ql_page' />
        <div className='flex'>
          <RequestEditor />
          <ResultWindow />
        </div>
      </div>
    </>
  );
};

export default GraphQlPage;
