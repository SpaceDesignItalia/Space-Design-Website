import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home/Home'
import { LanguageProvider } from './context/LanguageContext'
import LanguageLayout from './Components/Layout/LanguageLayout'
import Footer from './Components/Layout/Footer'

// Language redirect component
function LanguageRedirect() {
  const userLanguage = navigator.language.split('-')[0]
  const defaultLanguage = userLanguage === 'it' ? 'it' : 'en'
  return <Navigate to={`/${defaultLanguage}`} replace />
}

function App() {
  return (
    <LanguageProvider>
      <Routes>
        {/* Redirect root to language-specific route */}
        <Route path="/" element={<LanguageRedirect />} />
        
        {/* Language-specific routes */}
        <Route path="/:lang" element={<LanguageLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<div>About Page</div>} />
          <Route path="contact" element={<div>Contact Page</div>} />
          <Route path="services">
            <Route path="mobile-development" element={<div>Mobile Development</div>} />
            <Route path="web-development" element={<div>Web Development</div>} />
            <Route path="websites" element={<div>Websites</div>} />
            <Route path="custom-software" element={<div>Custom Software</div>} />
            <Route path="startup-mvp" element={<div>Startup MVP</div>} />
            <Route path="cloud-integration" element={<div>Cloud Integration</div>} />
            <Route path="api-development" element={<div>API Development</div>} />
            <Route path="legacy-integration" element={<div>Legacy Integration</div>} />
            <Route path="digital-strategy" element={<div>Digital Strategy</div>} />
            <Route path="tech-architecture" element={<div>Technical Architecture</div>} />
            <Route path="security" element={<div>Security Consulting</div>} />
          </Route>
        </Route>

        {/* Fallback redirect for invalid routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </LanguageProvider>
  )
}

export default App
