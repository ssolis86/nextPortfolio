import { Container, Grid } from "@mui/material";
import Image from "next/image";


const SectionAbout = () => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <Image
                src="/webDev.svg"
                alt="A Developer"
                layout="responsive"
                width={800}
                height={600}
            />
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;
