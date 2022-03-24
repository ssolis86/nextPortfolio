import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Golf() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href='https://www.lacanteragolfclub.com/' target='_blank'>
        <CardMedia
          component="img"
          height="fill"
          src='/golf.jpg'
          alt="golf.com website"
        />
        <CardContent>
          <Typography textAlign='center' gutterBottom variant="h5" component="div">
            Golf
          </Typography>
          <Typography textAlign='center' variant="body2" color="text.secondary">
          My favorite local course!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};