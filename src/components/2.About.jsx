import React from 'react';
import back1 from '../assets/back7.jpg';

import {Box} from '@mui/material';
const About = () => {

 return(
   <Box div style={containerStyle} id='aboutPage'>
     <Box sx={insideContainerStyle}>
       <p style={{fontSize:'28px'}}>ABOUT US</p>
       <div style={{width:'100px',border:'1px solid black',marginTop:'10px'}}></div>
       <p style={{marginTop:'15px'}}>Here is some "About Us" section</p>
     </Box>
     <Box sx={insideContainerSStyle}>
       <p style={{fontSize:'28px'}}>ABOUT US</p>
       <div style={{width:'100px',border:'1px solid black',marginTop:'10px'}}></div>
       <p style={{marginTop:'15px'}}>Here is some "About Us" section</p>
     </Box>
   </Box>
 )
};

export default About;

const containerStyle= {
  width:'100%',
  height:'100vh',
  display:'flex',
  padding:'20px',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'#FFFFFF',
  backgroundImage: `url(${back1})`,
  backgroundSize: 'cover',
  inset: '0',
  position: 'relative'
 };

 const insideContainerStyle= {
  width:'45%',
  bgcolor:'white',
  height:'60vh',
  display:{xs:'none',sm:'flex', md: 'flex'},
  flexDirection:'column',
  textAlign:'center',
  padding:'20px',
  alignItems:'center'
};

const insideContainerSStyle= {
  width:'80%',
  bgcolor:'white',
  height:'75vh',
  display:{xs:'flex',sm:'none', md: 'none'},
  flexDirection:'column',
  textAlign:'center',
  padding:'20px',
  alignItems:'center'
};
