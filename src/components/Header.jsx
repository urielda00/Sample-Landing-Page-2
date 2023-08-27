import { Box,Tabs,Tab } from '@mui/material';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Drawer from './Drawer';

const Header= () => {
  const tabValue = useSelector((state) => state.tab.tabValue); 
  const dispatch = useDispatch();


  return (
    <>
    <Box sx={containerLStyle}>
       <Box sx={{ width: '100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Tabs
        value={tabValue}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >.
        <Tab sx={tabStyle} href='#upperView' value="upperView" label="Top^" />
        <Tab sx={tabStyle} href='#aboutPage' value="aboutPage" label="About Us" />
        <Tab sx={tabStyle} href='#servicesPage' value="servicesPage" label="Services" />
        <Tab sx={tabStyle} href='#contactPage' value="contactPage" label="Contact Us" />
      </Tabs>
    </Box>
    </Box>
    <Box sx={containerSStyle}>
       <Box sx={{ width: '100%',display:'flex',justifyContent:'start',alignItems:'start'}}>
     <Drawer/>
    </Box>
    </Box>
  </>
  )
};

export default Header;

export const containerLStyle= {
  display:{xs:'none',sm:'flex', md: 'flex'},
  position: 'sticky',
  top:'0',
  zIndex:10,
  width: '100%',
  background: 'transparent',
  padding: '16px 16px',
  height: '90px',
};


export const containerSStyle= {
  display:{xs:'flex',sm:'none', md: 'none'},
  position: 'sticky',
  top:'0',
  zIndex:10,
  width: '100%',
  background: 'white',
  padding: '8px 8px',
  height: '60px',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset'
};

const tabStyle = {fontSize:'1.2rem',color:'dark-grey',mixBlendMode:'difference'};
