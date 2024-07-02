
// @mui material components
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
// Material Kit 2 React components
import Grid from "@mui/material/Grid";


import Page from '../../../src/components/Page'


// About Us page sections
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import Team from "pages/LandingPages/AboutUs/sections/Team";

import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";


const AboutPage = () => {


  return (
    <>
    <Page title="About - Moneysites">
    <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundColor: "green", // Set the background color to black
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              About Us{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Never express yourself more clearly than you are able to think. – Niels Bohr 
              
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
   
        <Team />
    
      </Card>
      <Newsletter />
      </Page>
    </>
  );
}

export default AboutPage;
