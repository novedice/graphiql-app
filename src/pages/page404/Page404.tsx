import { Link } from 'react-router-dom';
import { PAGE_STYLE } from '../../style-const/style-const';
import { FormattedMessage } from 'react-intl';
import './page404.css';
import bg from '../../assets/bg_welcomePage.png';

const Page404 = () => {
  return (
    <>
      <div className={`${PAGE_STYLE} bg-404Page bg-[url(${bg})]`}>
        <FormattedMessage id='page_not_found' />
        <Link to='/'>
          <FormattedMessage id='go_to_main' />
        </Link>
      </div>
    </>
  );
};

export default Page404;
