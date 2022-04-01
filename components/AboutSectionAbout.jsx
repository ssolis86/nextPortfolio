import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";




const AboutSectionAbout = () => {
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
                    fontFamily='Roboto'
                    fontWeight='300'
                >
                    {`I'm currently a Freelance Web Developer helping businesses grow their presence online`}
                </Typography>
                <Typography 
                    textAlign="center"
                    sx={{ mb: 5}}
                >
                    {``}
                </Typography>
                {/* <MuiNextLink href="/about"
                >
                    <Button variant="contained" size="large">
                        About Me
                    </Button>
                </MuiNextLink> */}

            </Grid>
        </Grid>
    </Container>
  );
};

export default AboutSectionAbout;
