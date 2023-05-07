import { FormattedMessage } from 'react-intl';
import { PAGE_STYLE } from '../../style-const/style-const';

const WelcomePage = () => {
  return (
    <>
      <div className={`${PAGE_STYLE}`}>
        <FormattedMessage id='welcome_page' />
      </div>
    </>
  );
};

export default WelcomePage;
