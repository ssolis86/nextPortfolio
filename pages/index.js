import React from "react";
import Container from "@mui/material/Container";
import Hero from '@components/Hero';
import SectionAbout from "@components/SectionAbout";
import SectionImage from "@components/SectionImage";
import SectionClients from "@components/SectionClients";

const Homepage = () => {
  return (
   <React.Fragment>
     <Hero
        imgSrc="/chipset.jpg"
        imgAlt="motherboard chipset"
        title='Stephen Solis'
        subtitle='Full Stack Web Developer'
      />

      <SectionAbout />

      <SectionImage imgSrc="/desktop.jpg" imgAlt="laptop on a desk" />

      <SectionClients />
    </React.Fragment>
  );
};

export default Homepage;
