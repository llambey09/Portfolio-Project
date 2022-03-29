import React from 'react';

import { About, Footer, Header, Skills, Testimonials, Works } from './container';
import { NavBar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>

  );
}

export default App;