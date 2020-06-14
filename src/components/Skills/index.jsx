import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const index = () => {
  AOS.init();
  return (
    <section className='skills' id='skills'>
      <div className='container'>
        <div className='row'>
          <h1 className='mr-2' data-aos='fade-up' data-aos-duration='1000'>
            {' '}
            <span class='badge badge-secondary'>
              <i className='fab fa-react'></i> ReactJS
            </span>
          </h1>
          <h1 className='mr-2' data-aos='fade-up' data-aos-duration='1100'>
            {' '}
            <span class='badge badge-secondary'>
              {' '}
              <i class='fab fa-node'></i> NodeJS
            </span>
          </h1>
          <h1 className='mr-2' data-aos='fade-up' data-aos-duration='1200'>
            {' '}
            <span class='badge badge-secondary'>
              <i class='fab fa-js-square'></i> Javascript
            </span>
          </h1>
          <h1 className='mr-2' data-aos='fade-up' data-aos-duration='1300'>
            {' '}
            <span class='badge badge-secondary'>ExpressJS</span>
          </h1>
          <h1 className='mr-2' data-aos='fade-up' data-aos-duration='1400'>
            {' '}
            <span class='badge badge-secondary'>Redux</span>
          </h1>
          <h1 className='mr-2' data-aos='fade-up' data-aos-duration='1500'>
            {' '}
            <span class='badge badge-secondary'>MongoDB</span>
          </h1>
          <h1 className='mr-2' data-aos='fade-up' data-aos-duration='1600'>
            {' '}
            <span class='badge badge-secondary'>GraphQL</span>
          </h1>
          <h1 className='mr-2'>
            {' '}
            <span
              class='badge badge-secondary'
              data-aos='fade-up'
              data-aos-duration='1700'
            >
              SQL
            </span>
          </h1>
          <h1 className='mr-2' data-aos='fade-up' data-aos-duration='1800'>
            {' '}
            <span class='badge badge-secondary'>Heroku</span>
          </h1>
          <h1 className='mr-2' data-aos='fade-up' data-aos-duration='1900'>
            {' '}
            <span class='badge badge-secondary'>Firebase</span>
          </h1>
          <h1 className='mr-2' data-aos='fade-up' data-aos-duration='2000'>
            {' '}
            <span class='badge badge-secondary'>
              <i class='fab fa-html5'></i> HTML
            </span>
          </h1>
          <h1 className='mr-2' data-aos='fade-up' data-aos-duration='2100'>
            {' '}
            <span class='badge badge-secondary'>
              <i class='fab fa-css3'></i> CSS
            </span>
          </h1>
          <h1 className='mr-2' data-aos='fade-up' data-aos-duration='2200'>
            {' '}
            <span class='badge badge-secondary'>
              <i class='fab fa-sass'></i> SASS
            </span>
          </h1>
          <h1 className='mr-2' data-aos='fade-up' data-aos-duration='2300'>
            {' '}
            <span class='badge badge-secondary'>
              <i class='fab fa-bootstrap'></i> Boostrap
            </span>
          </h1>
          <h1 className='mr-2' data-aos='fade-up' data-aos-duration='2400'>
            {' '}
            <span class='badge badge-secondary'>
              <i class='fab fa-git-alt'></i> Git
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default index;
