import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function Sushihana() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="fill"
          src="/sushihanaImage.jpg"
          alt="Sushihana Japanese Restaurant"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sushihana Japanese Restaurant
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sushihana Japanese Restaurant serves the finest traditional Japanese and 
          modern Asian Fusion cuisines available in San Antonio. If you’re looking for a 
          sushi restaurant that offers exotic nigiri and sashimi, signature sushi rolls, innovative 
          entrées and an outstanding selection of premium wine, sake, and Japanese and American beer, 
          Sushihana is the place to go.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}