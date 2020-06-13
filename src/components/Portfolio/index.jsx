import React, { useState } from 'react';
import getcashflowLanding from '../../img/getcashflow_landingpage.png';
import getcashflowDashboard from '../../img/getcashflow_dashboard.jpg';
import discoveryLanding from '../../img/spacexdiscovery_landingpage.jpg';
import discoveryMissions from '../../img/spacexdiscovery_missions.jpg';
import discoveryRockets from '../../img/rockets.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: getcashflowLanding,
    altText: 'Slide 1',
    caption: 'Cashflow',
  },
  {
    src: getcashflowDashboard,
    altText: 'Slide 2',
    caption: 'Cashflow',
  },
  {
    src: discoveryLanding,
    altText: 'Slide 3',
    caption: 'Space X Discovery',
  },
  {
    src: discoveryMissions,
    altText: 'Slide 4',
    caption: 'Space X Discovery',
  },
  {
    src: discoveryRockets,
    altText: 'Slide 5',
    caption: 'Space X Discovery',
  },
];

const Portfolio = (props) => {
  AOS.init();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='img-carousel' />
        <div className='item-caption'>
          <CarouselCaption
            captionHeader={item.caption}
            className='text-warning'
          />
        </div>
      </CarouselItem>
    );
  });

  return (
    <section className='portfolio' id='portfolio'>
      <div
        className='container text-center'
        data-aos='zoom-out'
        data-aos-duration='2000'
      >
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction='prev'
            directionText='Previous'
            onClickHandler={previous}
          />
          <CarouselControl
            direction='next'
            directionText='Next'
            onClickHandler={next}
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
