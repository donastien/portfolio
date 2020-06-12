import React from 'react';
import Profilepik from '../../img/greenprofile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const index = () => {
  AOS.init();
  return (
    <section className='about' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 my-auto'>
            <h4
              className='text-warning text-justify font-weight-bold'
              data-aos='fade-up'
              data-aos-duration='500'
            >
              Lorem ipsum dolor
            </h4>
            <p className='my-auto' data-aos='fade-up' data-aos-duration='1000'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
              vulputate lectus. Integer felis risus, facilisis cursus lacus eu,
              rhoncus eleifend quam. Aliquam non vulputate orci. Proin
              porttitor, felis id gravida porta, erat nibh volutpat libero,
              elementum dictum nibh ex sed libero. Vivamus non tincidunt lectus,
              nec vestibulum felis. Ut imperdiet dui pulvinar, cursus odio ut,
              vestibulum risus. Morbi posuere, felis et sollicitudin sodales,
              tellus lectus porttitor leo, et commodo lectus lorem in lectus.
            </p>
            <br />
            <h4
              className='text-danger'
              data-aos='fade-up'
              data-aos-duration='1500'
            >
              Je vous accompagne dans la conception de vos projets web avec pour
              but votre satisfaction d’un produit de qualité.
            </h4>
          </div>
          <div className='col-lg-6'>
            {' '}
            <img
              src={Profilepik}
              alt='Donastien'
              data-aos='zoom-out-up'
              data-aos-duration='2000'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
