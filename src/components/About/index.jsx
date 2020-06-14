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
              Everyday Coder.
            </h4>
            <p
              className='my-auto text-justify'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              Je me présente, Donastien, 25 ans de Nantes mais ouvert à toutes
              destinations. Mon but, trouver de nouveaux challenges, apprendre
              des expériences de chacun et découvrir de nouvelles technos.
              Passionné et autodidacte, je me forme et documente constamment.
              <br />
              <br />
              Vous avez besoin d’une application from scratch, de nouvelles
              features contactez-moi pour que l’on puisse échanger de vos idées
              ou de vos missions à réaliser.
              <br />
              <br />
              Comment je travaille ? <br />
              <br />
              Dans les temps impartis en collaboration avec vous en communiquant
              régulièrement sur l'avancement de votre projet, pour que votre
              application vous apporte un maximum de valeurs ajoutées.
              <br />
              <br />
              N'hésitez pas à me contacter par email ou sur LinkedIn pour
              pouvoir échanger ou organiser un appel télephonique.
              <br /> Vous pouvez aussi télécharger mon CV ci-dessous.
            </p>
            <br />
            <h1
              className='text-left'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <a href='mailto:donastien.karoumbata@gmail.com'>
                <i class='fas fa-paper-plane'></i>
              </a>{' '}
              <a href='https://www.linkedin.com/in/dkaroumbata/'>
                <i class='fab fa-linkedin-in'></i>
              </a>{' '}
              <a href='https://github.com/donastien'>
                <i class='fab fa-github'></i>
              </a>{' '}
              <a href='download/donastienkaroumbata.pdf' download>
                <i class='fas fa-file-download'></i>
              </a>
            </h1>
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
        <div className='row'>
          <blockquote
            className='blockquote text-center text-danger'
            data-aos='fade-up'
            data-aos-duration='1500'
          >
            <p className='mb-0'>
              Je vous accompagne dans la conception de vos projets web avec pour
              but votre satisfaction d’un produit de qualité.
            </p>
            <footer className='blockquote-footer'>
              Donastien Karoumbata{' '}
              <cite title='Source Title'>Fullstack Web Developer</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default index;
