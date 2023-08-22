import React, { useEffect, useRef } from 'react';
import CardIs from './Card';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';

const Services = () => {
  const cardRefs = useRef([]);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.boundingClientRect.y < 0) {
            entry.target.classList.add('fade-in-right');
            entry.target.classList.remove('fade-in-left');
          } else {
            entry.target.classList.add('fade-in-left');
            entry.target.classList.remove('fade-in-right');
          }
        } else {
          entry.target.classList.remove('fade-in-left', 'fade-in-right');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    cardRefs.current.forEach(ref => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
   <div style={containerStyle} id='servicesPage' className="scroll-container">
      <div className="cards">
        <div ref={el => (cardRefs.current[0] = el)} className="card-wrapper">
          <CardIs image={card1} title={'Fun Days'} text={'Some text go here'}/>
        </div>
        <div ref={el => (cardRefs.current[1] = el)} className="card-wrapper">
          <CardIs image={card2} title={'Family Days'} text={'Some text go here'}/>
        </div>
        <div ref={el => (cardRefs.current[2] = el)} className="card-wrapper">
          <CardIs image={card3} title={'Couples Days'} text={'Some text go here'}/>
        </div>
      </div>
    </div>
  
  </>
  )
};

export default Services;

const containerStyle = {
  width:'100%',
  height:'100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'#FFE5E5'
};