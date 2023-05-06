import { Navigate, Route, Routes } from 'react-router';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';
import WelcomePage from './pages/welcomePage/WelcomePage';
import GraphQlPage from './pages/graphiQLPage/GraphQlPage';
import AuthPage from './pages/authPage/AuthPage';
import Page404 from './pages/page404/Page404';
import Layout from './components/Layout';
import './App.css';
import { useTypeSelector } from './hooks/hooks';

const App = () => {
  const { lang } = useTypeSelector((state) => state.user);

  return (
    <>
      <IntlProvider messages={messages[lang]} locale={lang} defaultLocale={LOCALES.ENGLISH}>
        <div className='app-wrap m-0 w-full h-full'>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index path='/' element={<WelcomePage />} />
              <Route path='/auth' element={<AuthPage />} />
              <Route path='/graphi-ql' element={<GraphQlPage />} />
              <Route path='/404' element={<Page404 />} />
              <Route path='*' element={<Navigate to='/404' />} />
            </Route>
          </Routes>
        </div>
      </IntlProvider>
    </>
  );
};

export default App;
