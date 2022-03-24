import { Container, Grid, Typography } from "@mui/material";
import Sushihana from "./ClientCard/Sushihana";
import BenchmarkDental from "./ClientCard/Benchmark";
import NavigationCard from "./NavigationCard";

const SectionClients = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 15 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
        Existing Clients
      </Typography>
        <Grid container spacing={3}>
            <Grid container item justifyContent="center" xs={12} sm={6} md={6}>
                <Sushihana />
            </Grid>
            <Grid container item justifyContent="center" xs={12} sm={6} md={6}>
                <BenchmarkDental />
            </Grid>
        </Grid>
    </Container>
    

  );
};

export default SectionClients;
