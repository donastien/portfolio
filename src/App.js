import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';

// CSS
import './custom/layout.css';
import './custom/button.css';
import './custom/navbar.css';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
    </Fragment>
  );
};

export default App;
