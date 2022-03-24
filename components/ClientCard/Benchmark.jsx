import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BenchmarkDental() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href='https://www.benchmarkdental.com/' target='_blank'>
        <CardMedia
          component="img"
          height="fill"
          src='/bmDental.jpg'
          alt="Benchmark Dental Plans"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Benchmark Dental Plans
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The primary goal at Benchmark Dental is to provide members access to the best quality dental care at affordable rates. Benchmark Dental Plans help bridge the gap between your dentist, you, and the high cost of dental care. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

  