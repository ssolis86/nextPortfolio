import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Photography() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href='https://www.instagram.com/barrett0101/' target='_blank'>
        <CardMedia
          component="img"
          height="fill"
          src='/lightstring.jpg'
          alt="Stephen's Instagram"
        />
        <CardContent>
          <Typography textAlign='center' gutterBottom variant="h5" component="div">
            Photography
          </Typography>
          <Typography textAlign='center' variant="body2" color="text.secondary">
            {`A few pictures I've taken`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};