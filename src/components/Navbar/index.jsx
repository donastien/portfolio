import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const index = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-transparent container fixed-top'>
      <Link
        className='navbar-brand'
        activeClass='active'
        to='page-top'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Donastien
      </Link>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>
      <div class='collapse navbar-collapse' id='navbarNav'>
        <ul class='navbar-nav ml-auto'>
          <li class='nav-item'>
            <Link
              className='nav-link'
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li class='nav-item'>
            <Link
              className='nav-link'
              activeClass='active'
              to='portfolio'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li class='nav-item'>
            <Link
              className='nav-link'
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default index;
