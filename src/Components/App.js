import React from 'react';

import Header from './Header';
import Skills from '../Pages/Skills/index.jsx';
import About from '../Pages/About/index.jsx';
import Home from '../Pages/Home/index.jsx';
import Contact from '../Pages/Contact/index.jsx';
import Projects from '../Pages/Projects/index.jsx';
import Blog from '../Pages/Blog/index.jsx';
import SocialMedia from './SocialMedia';
import Work from '../Pages/Work/index.jsx';
import Services from '../Pages/Services/index.jsx';
import Counters from './Counters';
import Comment from './Comment';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop.jsx';
import { useWidth } from '../Styles/GlobalStyleWrapper';

function App() {
  const { width } =  useWidth();

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Work /> 
      <Services />
      <Counters /> 
      <Projects />
      <Comment />
      <Blog />
      <Contact /> 
      <Footer />
      {width > 992 && (
        <SocialMedia />
      )}
      <ScrollToTop /> 
    </div>
  );
}

export default App;