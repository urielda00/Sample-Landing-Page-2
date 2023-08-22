import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';




const Footer = () =>{
  return (
   
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor:'#B9B4C7',
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              Created By Uriel Dahan 2023©
            </Typography>
          </Container>
        </Box>
      </Box>
  );
}
export default Footer
