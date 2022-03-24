import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import MuiNextLink from "@components/MuiNextLink";
import Button from "@mui/material/Button";
import Link from 'next/link';



const SectionAbout = () => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
        <Grid container spacing={3}>
            <Grid 
                item xs={12} 
                sm={6}
            >
                <Image
                    src="/webDev.svg"
                    alt="A Developer"
                    layout="responsive"
                    width={800}
                    height={600}
                />
            </Grid>
            <Grid 
                item xs={12} 
                sm={6} 
                container 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="center"
            >
                <Typography 
                    component="h2" 
                    variant="h4" 
                    textAlign="center" 
                    gutterBottom
                >
                    A Full Stack Web Developer Who Loves Technology
                </Typography>
                <Typography 
                    textAlign="center"
                    sx={{ mb: 5}}
                >
                    
                </Typography>
                <MuiNextLink href="/about"
                >
                    <Button variant="contained" size="large">
                        About Me
                    </Button>
                </MuiNextLink>

            </Grid>
        </Grid>
    </Container>
  );
};

export default SectionAbout;
