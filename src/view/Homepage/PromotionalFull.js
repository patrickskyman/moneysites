import React from "react"
import {  Grid } from "@mui/material"

import Container from "@mui/material/Container";

import MKBox from "components/MKBox"
import MKTypography from "components/MKTypography"

// https://source.unsplash.com/XyONj_Aq-rg

// https://unsplash.com/photos/RGxEXgEym5U

      //  <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
      //    Talk to us
       // </MKButton>
export default function PromotionalFull() {
 

  return (
    <>
  
    <MKBox
    minHeight="75vh"
    width="100%"
    sx={{
      backgroundColor: "green", // Set the background color to black
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "grid",
      placeItems: "center",
      m: 0,  // Set margin to zero
      p: 0,  // Set padding to zero
    }}
  >
    <Grid container spacing={0}>
    <Container>
      <Grid
        container
        item
        xs={12}
        lg={8}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ mx: "auto", textAlign: "center" }}
      >
        <MKTypography
          variant="h1"
          color="white"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
        Work with an Innovative Company
        </MKTypography>
        <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
        Unlocking Creative Potentials and Nurturing Aspirations. We'd like you to be part of this journey.
        </MKTypography>
    
      </Grid>
    </Container>
    </Grid>
  </MKBox>

  </>
  )
}