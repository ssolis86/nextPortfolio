import { Container, Grid, Typography } from "@mui/material";
import Sushihana from "./ClientCard/Sushihana";
import Photography from "./Hobbies/Photography";
import Golf from "./Hobbies/Golf";
import Music from "./Hobbies/Music";
import NavigationCard from "./NavigationCard";

const Hobbies = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 15 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
        Hobbies
      </Typography>
        <Grid container spacing={3}>
            <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
                <Photography />
            </Grid>
            <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
                <Golf />
            </Grid>
            <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
                <Music />
            </Grid>
        </Grid>
    </Container>
    

  );
};

export default Hobbies;