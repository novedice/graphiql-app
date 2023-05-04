import { FormattedMessage } from 'react-intl';
import { PAGE_STYLE } from '../../style-const/style-const';

import { useAppDispatch, useTypeSelector } from '../../hooks/redux-hooks';

import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();

  return (
    <>
      <div className={`${PAGE_STYLE}`}>
        <FormattedMessage id='welcome_page' />
        {isAuth ? (
          <>
            <h1>Hello {email}</h1>
            <button onClick={() => dispatch(removeUser())}>Log out</button>
          </>
        ) : (
          <h1>
            Please, <Link to='/login'>log in!</Link>
          </h1>
        )}
      </div>
    </>
  );
};

export default WelcomePage;
