import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const index = () => {
  AOS.init();
  return (
    <section className='skills' id='skills'>
      <div className='container'>
        <div className='row mx-auto'>
          <h1
            className='display-1 mr-4'
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <i className='fab fa-react'></i>
          </h1>
          <h1
            className='display-1 mr-4'
            data-aos='fade-right'
            data-aos-duration='1200'
          >
            <i class='fab fa-node'></i>
          </h1>
          <h1
            className='display-1 mr-4'
            data-aos='fade-right'
            data-aos-duration='1400'
          >
            <i class='fab fa-html5'></i>
          </h1>
          <h1
            className='display-1 mr-4'
            data-aos='fade-right'
            data-aos-duration='1600'
          >
            <i class='fab fa-css3'></i>
          </h1>
          <h1
            className='display-1 mr-4'
            data-aos='fade-right'
            data-aos-duration='1800'
          >
            <i class='fab fa-bootstrap'></i>
          </h1>
          <h1
            className='display-1 mr-4'
            data-aos='fade-right'
            data-aos-duration='2000'
          >
            <i class='fab fa-js-square'></i>
          </h1>
          <h1
            className='display-1 mr-4'
            data-aos='fade-right'
            data-aos-duration='2200'
          >
            <i class='fab fa-git-alt'></i>
          </h1>
          <h1
            className='display-1 mr-4'
            data-aos='fade-right'
            data-aos-duration='2400'
          >
            <i class='fab fa-php'></i>
          </h1>
          <h1
            className='display-1 mr-4'
            data-aos='fade-right'
            data-aos-duration='2600'
          >
            <i class='fab fa-sass'></i>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default index;
