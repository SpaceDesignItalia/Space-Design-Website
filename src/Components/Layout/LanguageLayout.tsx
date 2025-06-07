import { Navigate, Outlet, useParams } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Navbar from './Navbar';

export default function LanguageLayout() {
  const { lang } = useParams();

  // Validate language parameter
  if (lang !== 'it' && lang !== 'en') {
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = browserLang === 'it' ? 'it' : 'en';
    return <Navigate to={`/${defaultLang}`} replace />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
} 