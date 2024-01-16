import React from 'react';
import back1 from '../assets/back7.jpg';

import { Box } from '@mui/material';
const About = () => {
	return (
		<Box style={containerStyle} id='aboutPage'>
			<Box sx={{ ...baseInContainer, ...insideContainerStyle }}>
				<p style={{ fontSize: '28px' }}>ABOUT US</p>
				<div style={{ width: '100px', border: '1px solid black', marginTop: '10px' }}></div>
				<p style={{ marginTop: '15px' }}>Here is some "About Us" section</p>
			</Box>
			<Box sx={{ ...baseInContainer, ...insideContainerSStyle }}>
				<p style={{ fontSize: '28px' }}>ABOUT US</p>
				<div style={{ width: '100px', border: '1px solid black', marginTop: '10px' }}></div>
				<p style={{ marginTop: '15px' }}>Here is some "About Us" section</p>
			</Box>
		</Box>
	);
};

export default About;

const containerStyle = {
	inset: '0',
	width: '100%',
	height: '100vh',
	display: 'flex',
	padding: '20px',
	position: 'relative',
	alignItems: 'center',
	backgroundSize: 'cover',
	justifyContent: 'center',
	backgroundColor: '#FFFFFF',
	backgroundImage: `url(${back1})`,
};

const insideContainerStyle = {
	width: '45%',
	height: '60vh',
	display: { xs: 'none', sm: 'flex', md: 'flex' },
};

const insideContainerSStyle = {
	width: '80%',
	height: '75vh',
	display: { xs: 'flex', sm: 'none', md: 'none' },
};

const baseInContainer = {
	padding: '20px',
	bgcolor: 'white',
	textAlign: 'center',
	alignItems: 'center',
	flexDirection: 'column',
};
