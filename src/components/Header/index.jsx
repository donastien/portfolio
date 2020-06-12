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
              <h1 data-aos='zoom-out-up' data-aos-duration='2000'>
                Donastien Karoumbata
              </h1>
              <h4 className='mb-5' data-aos='fade-up' data-aos-duration='2000'>
                Web Developer ReactJS / NodeJS
              </h4>
              <h4 data-aos='fade-up' data-aos-duration='2000'>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Hello, ')
                      .pauseFor(1000)
                      .typeString("you're welcome")
                      .callFunction(() => {
                        console.log('String typed out!');
                      })
                      .pauseFor(500)
                      .typeString('.')
                      .pauseFor(5000)
                      .deleteAll()
                      .callFunction(() => {
                        console.log('All strings were deleted');
                      })
                      .start();
                  }}
                />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
