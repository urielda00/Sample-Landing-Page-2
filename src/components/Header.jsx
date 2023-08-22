import { Box,Tabs,Tab } from '@mui/material';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

const Header= () => {
  const tabValue = useSelector((state) => state.tab.tabValue); 
  const dispatch = useDispatch();


  return (
    <Box sx={containerStyle}>
       <Box sx={{ width: '100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Tabs
        value={tabValue}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >.
        <Tab sx={tabStyle} href='#upperView' value="zero" label="Top^" />
        <Tab sx={tabStyle} href='#aboutPage' value="one" label="About Us" />
        <Tab sx={tabStyle} href='#servicesPage' value="two" label="Services" />
        <Tab sx={tabStyle} href='#contactPage' value="three" label="Contact Us" />
      </Tabs>
    </Box>
    </Box>
  )
};

export default Header;

export const containerStyle= {
  position: 'sticky',
  top:'0',
  zIndex:10,
  width: '100%',
  background: 'transparent',
  padding: '16px 16px',
  height: '90px',
};

const tabStyle = {fontSize:'1.2rem',color:'dark-grey',mixBlendMode:'difference'};