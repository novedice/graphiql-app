import { FormattedMessage } from 'react-intl';
import { PAGE_STYLE } from "../../style-const/style-const";

const GraphQlPage = () => {
  return (
    <>
      <div className={`${PAGE_STYLE}`}>
        <FormattedMessage id='graphi_ql_page' />
      </div>
    </>
  )
}

export default GraphQlPage;