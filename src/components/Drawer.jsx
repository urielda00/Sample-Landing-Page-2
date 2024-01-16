import * as React from 'react';

import * as Mui from '@mui/material';

// Icons:
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const listArray = [
	['Top', 'upperView'],
	['ABOUT US', 'aboutPage'],
	['SERVICES', 'servicesPage'],
	['CONTACT', 'contactPage'],
];

const Drawer = () => {
	const [state, setState] = React.useState({
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Mui.Box sx={{ width: '250px' }} role='presentation' onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
			<Mui.List>
				{listArray.map((text, index) => (
					<Mui.ListItem key={text[0]} disablePadding>
						<Mui.ListItemButton href={`#${text[1]}`}>
							<Mui.ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</Mui.ListItemIcon>
							<Mui.ListItemText primary={text[0]} />
						</Mui.ListItemButton>
					</Mui.ListItem>
				))}
			</Mui.List>
			<Mui.Divider />
			<Mui.List>
				{['Special Offers', 'Recommendations', 'Car Shop'].map((text, index) => (
					<Mui.ListItem key={text} disablePadding>
						<Mui.ListItemButton>
							<Mui.ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</Mui.ListItemIcon>
							<Mui.ListItemText primary={text} />
						</Mui.ListItemButton>
					</Mui.ListItem>
				))}
			</Mui.List>
		</Mui.Box>
	);

	return (
		<div>
			{['right'].map((anchor) => (
				<React.Fragment key={anchor}>
					<Mui.Button onClick={toggleDrawer(anchor, true)}>
						<MenuIcon fontSize='large' sx={{ color: 'black' }} />
					</Mui.Button>
					<Mui.SwipeableDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} onOpen={toggleDrawer(anchor, true)}>
						{list(anchor)}
					</Mui.SwipeableDrawer>
				</React.Fragment>
			))}
		</div>
	);
};

export default Drawer;
