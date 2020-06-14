import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Reference from './components/Reference';
import Footer from './components/Footer';

// CSS
import './custom/layout.css';
import './custom/button.css';
import './custom/navbar.css';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <Route exact path='/' component={Header} />
        <Route exact path='/' component={About} />
        <Route exact path='/' component={Portfolio} />
        <Route exact path='/' component={Skills} />
        <Route exact path='/' component={Reference} />
        <Route exact path='/' component={Footer} />
      </Router>
    </Fragment>
  );
};

export default App;
