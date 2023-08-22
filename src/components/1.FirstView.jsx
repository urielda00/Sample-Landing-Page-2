import React from 'react';
import { Box, Button } from '@mui/material';
import back1 from '../assets/back12.jpg';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


const FirstView= () => {
  return (
    <>
      <Box sx={containerStyle}>
        <div id='upperView' style={{zIndex:-200,position:'absolute',top:0}}></div>
         <Button href='#aboutPage' variant='contained' sx={{bgcolor:'#EEEEEE',color:'black',borderRadius:'25px',fontSize:'35px',":hover":{color:'black',bgcolor:'#FFA41B'}}}>See More
        <KeyboardDoubleArrowDownIcon fontSize='large' sx={{":hover":{color:'black'}}}/>
        </Button>
      </Box>
    </>
  )
};

export default FirstView;

// Style here:
const containerStyle = {
  position: 'relative',
  display:'flex',
  justifyContent:"center",
  alignItems:'center',
  height: '113vh',
  marginTop:'-90px',
  width: '100%',
  backgroundImage: `url(${back1})`,
  backgroundSize: 'cover',
  inset: '0'
 };