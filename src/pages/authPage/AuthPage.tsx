import { FormattedMessage } from "react-intl";
import { PAGE_STYLE } from "../../style-const/style-const";

const AuthPage = () => {
  return (
    <>
      <div className={`${PAGE_STYLE}`}>
        <FormattedMessage id="auth_page" />
      </div>
    </>
  );
};

export default AuthPage;
