import React, { useEffect, useRef } from 'react';
import CardIs from './Card';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import { Box } from '@mui/material';

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
    <Box id='servicesPage'>
      <Box style={containerStyle} sx={{display:{xs:'none',sm:'flex', md: 'flex'}}} 
         className="scroll-container">
        <Box sx={{display:{xs:'none',sm:'flex', md: 'flex'}}} className="cards">
          <Box  ref={el => (cardRefs.current[0] = el)} className="card-wrapper">
            <CardIs image={card1} title={'Fun Days'} text={'Some text go here'}/>
          </Box>
          <Box ref={el => (cardRefs.current[1] = el)} className="card-wrapper">
            <CardIs image={card2} title={'Family Days'} text={'Some text go here'}/>
          </Box>
          <Box ref={el => (cardRefs.current[2] = el)} className="card-wrapper">
            <CardIs image={card3} title={'Friends Days'} text={'Some text go here'}/>
          </Box>
        </Box>
      </Box> 
      <Box sx={containerSStyle}>   
         <CardIs image={card1} title={'Fun Days'} text={'Some text go here'}/>           
         <CardIs image={card2} title={'Family Days'} text={'Some text go here'}/>         
         <CardIs image={card3} title={'Friends Days'} text={'Some text go here'}/>
      </Box> 
    </Box>
  )
};

export default Services;

const containerStyle = {
  display:{xs:'none',sm:'flex', md: 'flex'},
  width:'100%',
  height:'100vh',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'#FFE5E5',
  flexDirection:'column'
};

const containerSStyle = {
  display:{xs:'flex',sm:'none', md: 'none'},
  width:'100%',
  height:'100vh',
  alignItems: 'center',
  backgroundColor:'#FFE5E5',
  flexDirection:'column',
  padding:'20px'
};