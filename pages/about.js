import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AboutHero from "@components/AboutHero";
import Hobbies from "@components/Hobbies";
import AboutSectionAbout from "@components/AboutSectionAbout";
import SectionImage from "@components/SectionImage";
import SectionClients from "@components/SectionClients";
import NavigationCard from "@components/NavigationCard";

const AboutMePage = () => {
    return (
    <React.Fragment>
     <AboutHero
        imgSrc="/me.jpg"
        imgAlt="motherboard chipset"
        title='About Me'
        subtitle=''
      />

      <AboutSectionAbout />

      <SectionImage imgSrc="/laptop.jpg" imgAlt="laptop on a desk" />

      <Hobbies />

      

      <SectionImage imgSrc="/desktop.jpg" imgAlt="laptop on a desk" />

      <Container maxWidth="md" sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={6}>
            {/* <NavigationCard
                imgSrc="/menu.jpg"
                imgAlt="food menu"
                title="Menu"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
                pagePath="./menu"
                ctaText="Check Out"
              /> */}
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={6}>
            {/* <NavigationCard
                imgSrc="/catering.jpg"
                imgAlt="catering"
                title="Catering"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
                pagePath="./catering"
                ctaText="Find Out"
              /> */}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
    );
};

export default AboutMePage;