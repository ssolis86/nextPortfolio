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
        priority
      />

      <AboutSectionAbout />

      <SectionImage imgSrc="/laptop.jpg" imgAlt="laptop on a desk" />

      <Hobbies />

      <SectionImage imgSrc="/desktop.jpg" imgAlt="laptop on a desk" />

    </React.Fragment>
    );
};

export default AboutMePage;