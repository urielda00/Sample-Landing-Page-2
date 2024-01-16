import * as Mui from '@mui/material';
import Paper from '@mui/material/Paper';
import back1 from '../assets/contactBack1.jpg';

// Icons
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
	return (
		<Mui.Grid id='contactPage' container component='main' sx={{ height: '88vh' }}>
			<Mui.Grid item xs={false} sm={4} md={7} sx={imageContainerStyle} />
			<Mui.Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<Mui.Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Mui.Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<PhoneIcon />
					</Mui.Avatar>
					<Mui.Typography sx={{ mb: 3 }} component='h1' variant='h5'>
						Contact Us
					</Mui.Typography>
					<Mui.Box
						action='https://formsubmit.co/shopme2024@gmail.com'
						method='POST'
						onSubmit={() => {
							alert('information confirmed successfully');
						}}
						component='form'
						id='contactForm'
						sx={{ mt: 1 }}
					>
						<input type='hidden' name='_next' value='https://curious-alpaca-414f68.netlify.app/'></input>
						<input type='hidden' name='_subject' value='New Contacter Cars'></input>
						<input type='hidden' name='_template' value='table' />
						<Mui.Grid container spacing={2}>
							<Mui.Grid item xs={12} sm={6}>
								<Mui.TextField required autoComplete='email' id='email' name='email' fullWidth label='Email Address' type='email' />
							</Mui.Grid>

							<Mui.Grid item xs={12} sm={6}>
								<Mui.TextField required autoComplete='phone' fullWidth id='phone' name='phone' label='Phone Number' type='tel' />
							</Mui.Grid>

							<Mui.Grid item xs={12} sm={6}>
								<Mui.TextField required autoComplete='given-name' fullWidth label='First Name' id='fName' name='fName' type='text' />
							</Mui.Grid>

							<Mui.Grid item xs={12} sm={6}>
								<Mui.TextField required autoComplete='family-name' fullWidth label='Last Name' id='lName' name='lName' type='text' />
							</Mui.Grid>

							<Mui.Grid item xs={12} sm={12}>
								<Mui.TextField fullWidth rows={4} label='Provide information here...' type='text' id='moreInfo' name='moreInfo' multiline={true} />
							</Mui.Grid>

							<Mui.Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
								Submit
							</Mui.Button>
						</Mui.Grid>
					</Mui.Box>
				</Mui.Box>
			</Mui.Grid>
		</Mui.Grid>
	);
};

export default Contact;

// Style here:
const imageContainerStyle = {
	opacity: 0.85,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundImage: `url(${back1})`,
};
