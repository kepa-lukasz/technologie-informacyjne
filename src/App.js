import React, { createContext, useContext, useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Container } from 'react-bootstrap';
import Aos from 'aos';
import "aos/dist/aos.css";
import './App.css';
import './shadows.css';

// Components
import Scrollanimations from './App-functions/scroll-animations';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import JqueryScripts from './JqueryCon';
import icon from "./components/photos/icon.png";

// Lazy-loaded pages
const Mateup = lazy(() => import('./pages/mateup/mateup'));
const OurProjects = lazy(() => import('./pages/ourProjects/ourProjects'));
const Services = lazy(() => import('./pages/services/services'));
const Home = lazy(() => import('./pages/home/main/home'));
const Er404 = lazy(() => import('./pages/error404/error404'));
const Privacy = lazy(() => import('./pages/privacy/privacy'));
const MateUpPrivacy = lazy(() => import('./pages/privacy/MateupPrivacy'));
const Contact = lazy(() => import('./pages/contact/newContact'));

// Context for basename
const AppContext = createContext();

function App() {
  const [cookies, setCookie] = useCookies(['language']);
  const [preferredLanguage, setPreferredLanguage] = useState('');
  const usedLangs = ['pl', 'en', 'de'];
  const basename = ''; // Leave this empty for GitHub Pages (root)

  useEffect(() => {
    let lang = cookies.language;
    if (!lang) {
      const userLanguage = navigator.language || navigator.userLanguage;
      lang = userLanguage.split('-')[0];
      const currentLang = usedLangs.includes(lang) ? lang : 'en';
      setPreferredLanguage(currentLang);
      setCookie("language", currentLang, { maxAge: 365 * 24 * 60 * 60 });
    } else {
      setPreferredLanguage(usedLangs.includes(lang) ? lang : 'en');
    }
  }, [cookies, setCookie]);

  const handleLangChange = (value) => {
    setCookie("language", value, { maxAge: 365 * 24 * 60 * 60 });
    window.location.reload();
  };

  const fallback = <p>loading...</p>;

  Aos.init({ once: true }); // Initialize AOS for animations

  const [scrollTop, setScrollTop] = useState(0);
  Scrollanimations(scrollTop, setScrollTop);

  return (
    <Suspense fallback={fallback}>
      <AppContext.Provider value={{ basename }}>
        <Container fluid className="p-0 background-image" style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ zIndex: '1' }}>
            <Navbar lang={preferredLanguage} scrollPos={scrollTop} />
            {/* <div style={{ marginTop: "60px" }}>
              <JqueryScripts />
            </div> */}
            <img className="blur-icon" src={icon} alt="blur" />
            <HashRouter basename={basename}>
              <Routes>
                <Route path="/" element={<HomeEL lang={preferredLanguage} />} />
                <Route path="/technologie-informacyjne/home" element={<HomeEL lang={preferredLanguage} />} />
                <Route path="/technologie-informacyjne/our-projects" element={<OurProjects lang={preferredLanguage} />} />
                <Route path="/technologie-informacyjne/privacy-policy" element={<Privacy lang={preferredLanguage} />} />
                <Route path="/technologie-informacyjne/mateup/privacy-policy" element={<MateUpPrivacy />} />
                <Route path="/technologie-informacyjne/itsupport" element={<Services lang={preferredLanguage} page="sample" title="IT support" />} />
                <Route path="/technologie-informacyjne/uiux" element={<Services lang={preferredLanguage} page="uxui" title="UI UX" />} />
                <Route path="/technologie-informacyjne/mobile" element={<Services lang={preferredLanguage} page="mobile" title="Mobile" />} />
                <Route path="/technologie-informacyjne/web" element={<Services lang={preferredLanguage} page="web" title="Web dev" />} />
                <Route path="/technologie-informacyjne/mateup" element={<Mateup lang={preferredLanguage} />} />
                <Route path="/technologie-informacyjne/contact" element={<Contact lang={preferredLanguage} source="page" />} />
                <Route path="/technologie-informacyjne*" element={<Er404 />} />
              </Routes>
            </HashRouter>
          </div>
          <Footer lang={preferredLanguage} lang_change={handleLangChange} />
        </Container>
      </AppContext.Provider>
    </Suspense>
  );
}

const HomeEL = ({ lang }) => {
  return (
    <div style={{ position: "relative" }}>
      <div className="shadow1" />
      <div className="shadow2" />
      <div className="shadow3" />
      <div className="shadow4" />
      <div className="shadow5" />
      <div className="shadow6" />
      <Home lang={lang} />
    </div>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppContext.Provider");
  }
  return context;
};

export default App;
