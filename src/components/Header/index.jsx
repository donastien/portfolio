import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

const index = () => {
  AOS.init();

  return (
    <header className='masthead'>
      <div className='container h-100'>
        <div className='row h-100'>
          <div className='col my-auto'>
            <div className='header-content text-center mx-auto'>
              <h1
                className='display-3'
                data-aos='zoom-out-up'
                data-aos-duration='3000'
              >
                Donastien <span className='font-weight-bold'>Karoumbata</span>
              </h1>
              <h2 className='mb-5' data-aos='fade-up' data-aos-duration='3000'>
                Web Developer ReactJS / NodeJS
              </h2>
              <h1
                className='text-danger'
                data-aos='fade-up'
                data-aos-duration='3000'
              >
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("You're welcome")
                      .pauseFor(500)
                      .typeString('.')
                      .callFunction(() => {
                        console.log('String typed out!');
                      })
                      .start();
                  }}
                />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
