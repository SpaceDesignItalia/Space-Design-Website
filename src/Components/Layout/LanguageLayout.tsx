import { Navigate, Outlet, useParams } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useEffect } from 'react';
import Navbar from './Navbar';

export default function LanguageLayout() {
  const { lang } = useParams();
  const { language, setLanguage } = useLanguage();

  // Validate language parameter
  if (lang !== 'it' && lang !== 'en') {
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = browserLang === 'it' ? 'it' : 'en';
    return <Navigate to={`/${defaultLang}`} replace />;
  }

  // Sync URL language with context
  useEffect(() => {
    if (lang && (lang === 'en' || lang === 'it') && lang !== language) {
      setLanguage(lang);
    }
  }, [lang, language, setLanguage]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
} 