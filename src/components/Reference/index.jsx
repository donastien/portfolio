import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const index = () => {
  AOS.init();
  return (
    <section className='ref' id='ref'>
      <div className='container'>
        <blockquote
          class='blockquote text-center'
          data-aos='fade-up'
          data-aos-anchor-placement='center-bottom'
          data-aos-duration='1000'
        >
          <p class='mb-0'>
            Ayant eu l’occasion de diriger Donastien KAROUMBATA pendant son
            stage en entreprise et en tant que stagiaire, je peux témoigner de
            sa rigueur, sa ponctualité, sa capacité d’adaptation, sa
            disponibilité et de son savoir être. Sachant rendre compte, celui-ci
            sait aussi faire preuve d’un professionnalisme dans ses contacts
            avec ses pairs et a su s’intégrer pleinement à l’équipe
            informatique. En progression professionnelle constante, Donastien
            est toujours à la recherche de moyens pertinents pour assurer la
            réussite des missions qui lui ont été confié.
          </p>
          <footer class='blockquote-footer'>
            Gérald Barillet{' '}
            <cite title='Source Title'>
              Responsable du département des systèmes d’information.
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default index;
