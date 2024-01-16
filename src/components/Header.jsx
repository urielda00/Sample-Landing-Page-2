import React from 'react';
import Drawer from './Drawer';
import { useSelector } from 'react-redux';
import { Box, Tabs, Tab } from '@mui/material';

const Header = () => {
	const tabValue = useSelector((state) => state.tab.tabValue);
	return (
		<>
			<Box sx={{ ...baseContainer, ...containerLStyle }}>
				<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Tabs value={tabValue} textColor='secondary' indicatorColor='secondary' aria-label='secondary tabs example'>
						.
						<Tab sx={tabStyle} href='#upperView' value='upperView' label='Top^' />
						<Tab sx={tabStyle} href='#aboutPage' value='aboutPage' label='About Us' />
						<Tab sx={tabStyle} href='#servicesPage' value='servicesPage' label='Services' />
						<Tab sx={tabStyle} href='#contactPage' value='contactPage' label='Contact Us' />
					</Tabs>
				</Box>
			</Box>
			<Box sx={{ ...baseContainer, ...containerSStyle }}>
				<Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
					<Drawer />
				</Box>
			</Box>
		</>
	);
};

export default Header;

const baseContainer = {
	top: '0',
	zIndex: 10,
	width: '100%',
	position: 'sticky',
};

export const containerLStyle = {
	height: '90px',
	padding: '16px 16px',
	background: 'transparent',
	display: { xs: 'none', sm: 'flex', md: 'flex' },
};

export const containerSStyle = {
	height: '60px',
	padding: '8px 8px',
	background: 'white',
	display: { xs: 'flex', sm: 'none', md: 'none' },
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
};

const tabStyle = { fontSize: '1.2rem', color: 'dark-grey', mixBlendMode: 'difference' };
