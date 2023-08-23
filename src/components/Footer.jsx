import * as React from 'react';
import { Box,Typography,Container } from '@mui/material';


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
            mt: {xs:2,sm:0, md: 0},
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