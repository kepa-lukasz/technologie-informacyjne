//react things

import { useCookies } from 'react-cookie';
import './App.css';
import './shadows.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React, { Suspense, lazy, useRef, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
//images
import icon from "./components/photos/icon.png"

//main components
import Scrollanimations from './App-functions/scroll-animations';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';


import Aos from 'aos';
import "aos/dist/aos.css"
import JqueryScripts from './JqueryCon';
//pages
const Mateup = lazy(() => import('./pages/mateup/mateup'))
const OurProjects = lazy(() => import('./pages/ourProjects/ourProjects'))
const Services = lazy(() => import('./pages/services/services'));
const Home = lazy(() => import('./pages/home/main/home'));
const Er404 = lazy(() => import('./pages/error404/error404'));
const Privacy = lazy(() => import('./pages/privacy/privacy'));
const MateUpPrivacy = lazy(() => import('./pages/privacy/MateupPrivacy'));
const Contact = lazy(() => import('./pages/contact/newContact'))
//import Contact from "./pages/contact/contact"



//translation
//import { useTranslation } from 'react-i18next';


function App() {
  

  const [cookies, setCookie] = useCookies(['language']);
  const [preferredLanguage, setPreferredLanguage] = useState('');
  const used_langs = ['pl', 'en', 'de']

  //wykrywanie języka przeglądarki, ustawianie go


  const router = createBrowserRouter([
    {
      path: '/our-projects',
      element: <OurProjects lang={preferredLanguage} />,
      errorElement: <Er404 />,
    },
    {
      path: '/privacy-policy',
      element: <Privacy lang={preferredLanguage} />,
      errorElement: <Er404 />,
    },
    {
      path: '/mateup/privacy-policy',
      element: <MateUpPrivacy />,
      errorElement: <Er404 />,
    },
    {
      path: '/itsupport',
      element: <Services lang={preferredLanguage} page="sample" title="IT support" />,
      errorElement: <Er404 />,
    },
    {
      path: '/uiux',
      element: <Services lang={preferredLanguage} page="uxui" title="UI UX" />,
      errorElement: <Er404 />
    },
    {
      path: '/mobile',
      element: <Services lang={preferredLanguage} page="mobile" title="Mobile" />,
      errorElement: <Er404 />
    },
    {
      path: "/web",
      element: <Services lang={preferredLanguage} page="web" title="Web dev" />,
      errorElement: <Er404 />
    },
    {
      path: '/',
      element: <HomeEL lang={preferredLanguage} />,
      errorElement: <Er404 />
    },

    {
      path: '/home',
      element: <HomeEL lang={preferredLanguage} />,
      errorElement: <Er404 />
    },
    {
      path: '/mateup',
      element: <Mateup lang={preferredLanguage} />,
      errorElement: <Er404 />
    },
    {
      path: '/contact',
      element: <Contact lang={preferredLanguage} source="page" />,
      errorElement: <Er404 />
    }])




  useEffect(() => {
    let lang = cookies.language
    if (lang == undefined) {
      // Pobierz preferowany język użytkownika z przeglądarki
      const userLanguage = navigator.language || navigator.userLanguage;
      lang = userLanguage.split('-')[0]
      let current_lang = (used_langs.includes(lang)) ? lang : 'en'
      setPreferredLanguage(current_lang);
      setCookie("language", current_lang, { maxAge: 365 * 24 * 60 * 60 })
      console.log("undef");
    }
    else {
      setPreferredLanguage((used_langs.includes(lang)) ? lang : 'en')
    }
  }, []);

  //obsługa zmiany języka przeglądarki
  const handle_lang_change = (value) => {

    setCookie("language", value, { maxAge: 365 * 24 * 60 * 60 })
    window.location.reload()
  };





  const fallback = <p>loading...</p>

  const navElement = useRef();
  const footerElement = useRef();

  Aos.init(
    { once: true } //aos only on first load
  );

  const [scrollTop, setScrollTop] = useState(0);
  Scrollanimations(scrollTop, setScrollTop)


  return (
    <Suspense fallback={fallback}>

      <Container fluid className='p-0 background-image' style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ zIndex: '1' }}>
          <Navbar lang={preferredLanguage} scrollPos={scrollTop} ref={navElement} />
          <img className='blur-icon' src={icon} alt="blur" />
          {/* <img className='blur-bgc' src={bgcimg} alt="blur" /> */}
          
          <div>

          </div>
          <RouterProvider router={router} />
        </div>
        <JqueryScripts/>
        <Footer ref={footerElement} lang={preferredLanguage} lang_change={handle_lang_change} />
      </Container>
    </Suspense>
  );
}

const HomeEL = ({ lang }) => {
  return (<div style={{ position: "relative" }}>
    <div className="shadow1" />
    <div className="shadow2" />
    <div className="shadow3" />
    <div className="shadow4" />
    <div className="shadow5" />
    <div className="shadow6" />
    <Home lang={lang} />
  </div>
  )
}

export default App;

// @babel/plugin-proposal-private-property-in-object
