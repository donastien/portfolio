import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';

// CSS
import './custom/layout.css';
import './custom/button.css';
import './custom/navbar.css';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
    </Fragment>
  );
};

export default App;
