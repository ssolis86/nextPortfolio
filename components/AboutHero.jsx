import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import ArrowDownward from "@mui/icons-material/ArrowDownward";

const AboutHero = ({ imgSrc, imgAlt, title, subtitle }) => {
    return (
        <Grid
            component="section"
            container
            sx={{
                position: `relative`,
                height: "100vh",
                width: `100vw`,
                overflow: `hidden`,
                zIndex: -100,
                mb: 15,
            }}
            >
                <Image src={imgSrc} priority alt={imgAlt} layout="fill" objectFit="cover" />

                <Grid
                    container
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0, .7)",
                    }}
                >
                    <Grid
                        container
                        item
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        >
                        <Typography
                            variant="h1"
                            align="center"
                            gutterBottom
                            sx={{
                            color: "secondary.main",
                            fontWeight: 100,
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            component="p"
                            variant="h3"
                            align="center"
                            color="common.white"
                            sx={{
                            mb: 10,
                            }}
                        >
                            {subtitle}
                        </Typography>
                        <Typography component="p" variant="h6" color="secondary" gutterBottom>
                        
                        </Typography>
                        <ArrowDownward fontSize="large" color="secondary" />
                    </Grid> 
                </Grid>
            </Grid>


    );
}

export default AboutHero;