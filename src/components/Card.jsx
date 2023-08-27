import * as React from 'react';
import { Typography, Card, CardMedia, CardContent, CardActionArea } from "@mui/material";

const CardIs = ({image,title,text})=> {
  return (
  <>
    <Card sx={{ maxWidth: 345, width:'300px', height:'300px', marginRight:'10px',display:{xs:'none',sm:'block', md: 'block'} }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

{/* For mobile */}
     <Card sx={{ width:'250px', height:'250px',marginBottom:'10px',display:{xs:'block',sm:'none', md: 'none'} }}>
     <CardActionArea>
       <CardMedia
        component="img"
         height="140"
         image={image}
         alt="image"
        />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           {title}
         </Typography>
         <Typography variant="body2" color="text.secondary">
           {text}
         </Typography>
       </CardContent>
     </CardActionArea>
     </Card>
    
  </>
  );
}
export default CardIs;


