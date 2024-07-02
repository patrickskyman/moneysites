
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// Material Kit 2 React components
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box"

import Page from "components/Page";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import CommentSummaryChart from "view/Detail/Imports/CommentSummaryChart";
// Material Kit 2 React examples



function ContactUs() {
  return (
    <>
    <Page title="Contact - Moneysites">
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
              Contact Us{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Anyone can have an idea; it's what you do with the idea that's the important thing. – Terry Pratchett 
              
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
  <Container>
  <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
              <Container maxWidth="sm">
        <Typography align="center" variant="h2" color="green">
          Got any thoughts?
        </Typography>
        <Box mt={3}>
          <Typography align="center" variant="subtitle1" color="textSecondary">
        When you wish to instruct, be brief. – Cicero 
          </Typography>
        </Box>
     
      </Container>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
        <div className="my-5">
        <CommentSummaryChart/>       
      </div>
        </Grid>
        <Grid item xs={12} lg={6}>
        
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 9 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={0}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h5" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                For further questions, including partnership opportunities, please email
                hello@moneysites.net or contact us using our contact form.
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={0}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Full Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="How can we help you?"
                      placeholder="Tell us more"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>

      </Grid>
      </Card>
      </Container>
      </Page>
    </>
  );
}

export default ContactUs;
