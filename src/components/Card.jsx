import * as React from 'react';
import * as Mui from '@mui/material';

const CardIs = ({ image, title, text }) => {
	return (
		<>
			<Mui.Card sx={{ maxWidth: 345, width: '300px', height: '300px', marginRight: '10px', display: { xs: 'none', sm: 'block', md: 'block' } }}>
				<Mui.CardActionArea>
					<Mui.CardMedia component='img' height='140' image={image} alt='image' />
					<Mui.CardContent>
						<Mui.Typography gutterBottom variant='h5' component='div'>
							{title}
						</Mui.Typography>
						<Mui.Typography variant='body2' color='text.secondary'>
							{text}
						</Mui.Typography>
					</Mui.CardContent>
				</Mui.CardActionArea>
			</Mui.Card>

			{/* For mobile */}
			<Mui.Card sx={{ width: '250px', height: '250px', marginBottom: '10px', display: { xs: 'block', sm: 'none', md: 'none' } }}>
				<Mui.CardActionArea>
					<Mui.CardMedia component='img' height='140' image={image} alt='image' />
					<Mui.CardContent>
						<Mui.Typography gutterBottom variant='h5' component='div'>
							{title}
						</Mui.Typography>
						<Mui.Typography variant='body2' color='text.secondary'>
							{text}
						</Mui.Typography>
					</Mui.CardContent>
				</Mui.CardActionArea>
			</Mui.Card>
		</>
	);
};

export default CardIs;
