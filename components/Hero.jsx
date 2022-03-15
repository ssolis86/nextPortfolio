import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

const Hero = ({ imgSrc, imgAlt, title, subtitle }) => {
    return (
        <Grid component="section" container sx={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0, .7)", }}>
            <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
        </Grid>

    );
}

export default Hero;