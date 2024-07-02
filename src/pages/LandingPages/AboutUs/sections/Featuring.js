// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container spacing={3} sx={{ mb: 12 }}>
          <Grid item xs={6} md={2} lg={2}>
            <Link href="https://svgcraft-eight.vercel.app" target="_blank" rel="noopener noreferrer">
              <MKTypography variant="h6" color="green">
                SVG Craft
              </MKTypography>
            </Link>
          </Grid>
          <Grid item xs={6} md={2} lg={2}>
            <Link href="https://healthsquare.vercel.app" target="_blank" rel="noopener noreferrer">
              <MKTypography variant="h6" color="green">
                Healthsquare
              </MKTypography>
            </Link>
          </Grid>
          <Grid item xs={6} md={2} lg={2}>
            <Link href="https://assess-ten.vercel.app" target="_blank" rel="noopener noreferrer">
              <MKTypography variant="h6" color="green">
                Assess
              </MKTypography>
       
            </Link>
          </Grid>
          <Grid item xs={6} md={2} lg={2}>
            <Link href="https://babywardrobe.vercel.app" target="_blank" rel="noopener noreferrer">
              <MKTypography variant="h6" color="green">
                Babywardrobe
              </MKTypography>
            </Link>
          </Grid>
          <Grid item xs={6} md={2} lg={2}>
            <Link href="https://frontendbetter.vercel.app" target="_blank" rel="noopener noreferrer">
              <MKTypography variant="h6" color="green">
                Cars-Bids
              </MKTypography>
            </Link>
          </Grid>
          <Grid item xs={6} md={2} lg={2}>
            <Link href="https://rhipfactory.vercel.app" target="_blank" rel="noopener noreferrer">
              <MKTypography variant="h6" color="green">
                Rhipfactory
              </MKTypography>
            </Link>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={50}
              separator=","
              suffix="+"
              title="Projects"
              description="Number of High Level projects completed."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={4000}
              separator=","
              suffix="+"
              title="Hours"
              description="Hours our developers have spent coding."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title="Support"
              description="Our Team offers 24/7 support for our projects."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
