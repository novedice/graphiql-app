import { Link } from 'react-router-dom';
import { PAGE_STYLE } from '../../style-const/style-const';
import { FormattedMessage } from 'react-intl';

const Page404 = () => {
  return (
    <>
      <div className={`${PAGE_STYLE}`}>
        <FormattedMessage id='page_not_found' />
        <Link to='/'>
          <FormattedMessage id='go_to_main' />
        </Link>
      </div>
    </>
  );
};

export default Page404;
