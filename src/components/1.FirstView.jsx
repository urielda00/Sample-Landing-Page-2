import React from 'react';
import { Box, Button } from '@mui/material';
import back1 from '../assets/back12.jpg';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import phoneBack from '../assets/phoneback2.jpg';

const FirstView= () => {
  return (
    <Box id="upperView">
      <Box sx={containerStyle}>
        <div  style={{zIndex:-200,position:'absolute',top:0}}></div>
         <Button href='#aboutPage' variant='contained' sx={{bgcolor:'#EEEEEE',color:'black',borderRadius:'25px',fontSize:'35px',":hover":{color:'black',bgcolor:'#FFA41B'}}}>See More
        <KeyboardDoubleArrowDownIcon fontSize='large' sx={{":hover":{color:'black'}}}/>
        </Button>
      </Box>
   
   {/* MobileView: */}
      <Box sx={containerSStyle}>
        <div style={{zIndex:-200,position:'absolute',top:0}}></div>
        <p style={{position:'absolute', top:250, color:'white',fontSize:'30px',textAlign:'center'}}>
          Some Descriptive Text Here and more...
        </p>
         <Button href='#aboutPage' variant='contained' sx={{bgcolor:'#EEEEEE',color:'black',borderRadius:'25px',fontSize:'25px',":hover":{color:'black',bgcolor:'#FFA41B'}}}>See More
        <KeyboardDoubleArrowDownIcon fontSize='large' sx={{":hover":{color:'black'}}}/>
        </Button>
      </Box>
    </Box>
  )
};

export default FirstView;

// Style here:
const containerStyle = {
  display:{xs:'none',sm:'flex', md: 'flex'},
  position: 'relative',
  justifyContent:"center",
  alignItems:'center',
  height: '113vh',
  marginTop:'-90px',
  width: '100%',
  backgroundImage: `url(${back1})`,
  backgroundSize: 'cover',
  inset: '0'
 };

 const containerSStyle = {
  display:{xs:'flex',sm:'none', md: 'none'},
  flexDirection:'column',
  position: 'relative',
  justifyContent:"center",
  alignItems:'center',
  height: '113vh',
  marginTop:'-90px',
  width: '100%',
  backgroundImage: `url(${phoneBack})`,
  backgroundSize: 'cover',
  inset: '0'
 };