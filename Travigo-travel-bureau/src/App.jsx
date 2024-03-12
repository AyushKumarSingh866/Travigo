import React from 'react';
import { Navbar, Hero, Footer } from './components';
import { hero, navlinks } from './data/travigoData';
const App = () => {
  return (
    <div>
      
      <Navbar navlinks={navlinks}/>
      <Hero hero={hero}/>
      <Footer/>
      
    </div>
  );
};

export default App;