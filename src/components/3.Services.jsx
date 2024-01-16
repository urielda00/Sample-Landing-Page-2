import CardIs from './Card';
import { Box } from '@mui/material';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import React, { useEffect, useRef } from 'react';

const Services = () => {
	const placeHolder = 'Some text go here';

	const cardRefs = useRef([]);
	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};

		const handleIntersect = (entries) => {
			entries.forEach((entry) => {
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

		cardRefs.current.forEach((ref) => {
			observer.observe(ref);
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<Box id='servicesPage'>
			<Box style={{ ...baseContainer, ...containerStyle }} sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }} className='scroll-container'>
				<Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }} className='cards'>
					<Box ref={(el) => (cardRefs.current[0] = el)} className='card-wrapper'>
						<CardIs image={card1} title={'Fun Days'} text={placeHolder} />
					</Box>
					<Box ref={(el) => (cardRefs.current[1] = el)} className='card-wrapper'>
						<CardIs image={card2} title={'Family Days'} text={placeHolder} />
					</Box>
					<Box ref={(el) => (cardRefs.current[2] = el)} className='card-wrapper'>
						<CardIs image={card3} title={'Friends Days'} text={placeHolder} />
					</Box>
				</Box>
			</Box>
			<Box sx={{ ...baseContainer, ...containerSStyle }}>
				<CardIs image={card1} title={'Fun Days'} text={placeHolder} />
				<CardIs image={card2} title={'Family Days'} text={placeHolder} />
				<CardIs image={card3} title={'Friends Days'} text={placeHolder} />
			</Box>
		</Box>
	);
};

export default Services;

const containerStyle = {
	justifyContent: 'center',
	display: { xs: 'none', sm: 'flex', md: 'flex' },
};

const containerSStyle = {
	padding: '20px',
	display: { xs: 'flex', sm: 'none', md: 'none' },
};

const baseContainer = {
	width: '100%',
	height: '100vh',
	alignItems: 'center',
	flexDirection: 'column',
	backgroundColor: '#FFE5E5',
};
