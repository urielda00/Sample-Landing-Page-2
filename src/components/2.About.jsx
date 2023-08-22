import React, { useEffect, useRef } from 'react';
import back1 from '../assets/back7.jpg';

import { Grid,Container, Box } from '@mui/material';
const About = () => {

 return(
  <>
   <div style={containerStyle} id='aboutPage'>
    <Box sx={{width:'45%',bgcolor:'white',height:'60vh',display:'flex',flexDirection:'column',textAlign:'center',padding:'20px',alignItems:'center'}}>
     <p style={{fontSize:'28px'}}>ABOUT US</p>
     <div style={{width:'100px',border:'1px solid black',marginTop:'10px'}}></div>
     <p style={{marginTop:'15px'}}>Here is some "About Us" section</p>
    </Box>
    </div>
  
  </>
 )
};

export default About;

const cardStyle = {
  padding:'40px',
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-between',
  alignItems:'start',
  height:'430px',
  width:'200px',
  backgroundColor:'#ffffff',
  borderRadius:'10px',
  boxShadow:' -4px 9px 10px -3px rgba(0,0,0,0.4)',
  listStyleType:'none'
  
};


const containerStyle= {
  width:'100%',
  height:'100vh',
  display: 'flex',
  padding:'20px',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'#FFFFFF',
  backgroundImage: `url(${back1})`,
  backgroundSize: 'cover',
  inset: '0',
  position: 'relative'
 };


//  <p style={{textAlign:'center',fontSize:'18px',paddingTop:'100px'}}>
//       In our racing complex, you will find everything you need.
//       You will take care of the atmosphere, and we will take care of the car, extremes, photography, and everything else
//       </p>


















// import React, { useEffect, useRef } from 'react';
// import back1 from '../assets/back6.jpg';
// import { Grid,Container, Box } from '@mui/material';
// const About = () => {

//  return(
//   <>
//    <div style={containerStyle} id='aboutPage'>
//     {/* <Box sx={{background: 'rgb(2,0,36)',
// background: 'linear-gradient(207deg, rgba(2,0,36,1) 0%, rgba(214,210,78,0.8380602240896359) 46%)'
// ,width:'1150px',height:'100px',position:'absolute',top:90,right:170,zIndex:1,borderRadius:'15px 15px 0px 0px',display:'flex',textAlign:'center',alignItems:'center',justifyContent:'center'}}>
      
//     </Box> */}
//       <Box sx={{position:'absolute',top:120,right:680,zIndex:1}}>
//       <h1>Who Are We?</h1>
//       </Box>
//      <Box sx={{width:'1150px', height:'80%',bgcolor:'#EEEEEEE1',borderRadius:'20px',position:'absolute',top:90, right:170,boxShadow:' -4px 9px 10px -3px rgba(0,0,0,0.1)',display:'flex',justifyContent:'space-evenly',paddingTop:'120px'}}>
      
//        <ul style={cardStyle}>
//         <li style={{textAlign:'center'}}><h4><h2>Shelby Industries:</h2>
//         Shelby Industries has been dealing for 50 years with the thing that drives us all: pleasure.
//       We have turned the pleasures of the trip into a real extreme, and only with us you can find a complex that suits everyone</h4></li>
//        </ul>
//        <ul style={cardStyle}>
//         <li><h4>Shelby Industries:
//         Shelby Industries has been dealing for 50 years with the thing that drives us all: pleasure.
//       We have turned the pleasures of the trip into a real extreme, and only with us you can find a complex that suits everyone</h4></li>
//        </ul>
//        <ul style={cardStyle}>
//         <li><h4>Shelby Industries:
//         Shelby Industries has been dealing for 50 years with the thing that drives us all: pleasure.
//       We have turned the pleasures of the trip into a real extreme, and only with us you can find a complex that suits everyone</h4></li>
//        </ul>
//        <ul style={cardStyle}>
//         <li><h4>Shelby Industries:
//         Shelby Industries has been dealing for 50 years with the thing that drives us all: pleasure.
//       We have turned the pleasures of the trip into a real extreme, and only with us you can find a complex that suits everyone</h4></li>
//        </ul>
//      </Box>
//      {/* <Box sx={{width:'450px', height:'50%',bgcolor:'red',position:'absolute',bottom:50, left:130}}>
//      Shelby Industries has been dealing for 50 years with the thing that drives us all: pleasure.
//       We have turned the pleasures of the trip into a real extreme, and only with us you can find a complex that suits everyone
//      </Box> */}
//     </div>
  
//   </>
//  )
// };

// export default About;

// const cardStyle = {
//   padding:'40px',
//   display:'flex',
//   flexDirection:'column',
//   justifyContent:'space-between',
//   alignItems:'start',
//   height:'430px',
//   width:'200px',
//   backgroundColor:'#F3FDE8',
//   borderRadius:'10px',
//   boxShadow:' -4px 9px 10px -3px rgba(0,0,0,0.4)',
//   listStyleType:'none'
  
// };


// const containerStyle= {
//   width:'100%',
//   height:'100vh',
//   display: 'flex',
//   padding:'20px',
//   alignItems: 'center',
//   justifyContent: 'center',
//   // backgroundColor:'#FAF1E4',
//   backgroundImage: `url(${back1})`,
//   backgroundSize: 'cover',
//   inset: '0',
//   position: 'relative',
//   // position: 'relative',
//   // height: '100vh',
//   // marginTop:'-90px',
//   // width: '100%',
//   // display: 'flex',
//   // alignItems: 'center',
//   // justifyContent: 'center',
//   // backgroundImage: `url(${back1})`,
//   // backgroundSize: 'cover',
//   // inset: '0'
//  };


// //  <p style={{textAlign:'center',fontSize:'18px',paddingTop:'100px'}}>
// //       In our racing complex, you will find everything you need.
// //       You will take care of the atmosphere, and we will take care of the car, extremes, photography, and everything else
// //       </p>


