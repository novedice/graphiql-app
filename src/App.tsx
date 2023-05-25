import { Navigate, Route, Routes } from 'react-router';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';
import { WelcomePage, GraphQlPage, Page404, LoginPage, RegisterPage } from './pages/';
import Layout from './components/Layout';
import './App.css';
import { useTypeSelector } from './hooks/redux-hooks';

const App = () => {
  const { lang } = useTypeSelector((state) => state.userLang);

  return (
    <>
      <IntlProvider messages={messages[lang]} locale={lang} defaultLocale={LOCALES.ENGLISH}>
        <div className='app-wrap m-0 w-full h-screen'>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index path='/' element={<WelcomePage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/login' element={<LoginPage />} />
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
