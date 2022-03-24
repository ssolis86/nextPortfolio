import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Music() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href='' target='_blank'>
        <CardMedia
          component="img"
          height="fill"
          src='/amp.jpg'
          alt="Stephen's Instagram"
        />
        <CardContent>
          <Typography textAlign='center' gutterBottom variant="h5" component="div">
            Music
          </Typography>
          <Typography textAlign='center' variant="body2" color="text.secondary">
          I love playing guitar and jamming out when I can!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}