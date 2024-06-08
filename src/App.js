import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import Login from './components/Login';
import Tables from './components/Tables';
import Forms from './components/Forms';
import Charts from './components/Charts';

const App = () => {
  const { t, i18n } = useTranslation();
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/tables">{t('Tables')}</Link></li>
            <li><Link to="/forms">{t('Forms')}</Link></li>
            <li><Link to="/charts">{t('Charts')}</Link></li>
          </ul>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('fr')}>FR</button>
        </nav>
        <Routes>
          <Route path="/tables" element={<Tables />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
