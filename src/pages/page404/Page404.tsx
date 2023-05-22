import { Link } from 'react-router-dom';
import { PAGE_STYLE } from '../../style-const/style-const';
import { FormattedMessage } from 'react-intl';

const Page404 = () => {
  return (
    <>
      <div className={`${PAGE_STYLE} h-[70vh] flex items-center justify-center bg-welcomePage `}>
        <div className='text-[30px] text-rose-500 text-center hover:cursor-pointer'>
          <FormattedMessage id='page_not_found' />
          <Link to='/'>
            <FormattedMessage id='go_to_main' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page404;
