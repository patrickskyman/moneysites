import React from "react"
import {  Typography, useMediaQuery } from "@mui/material"
import Card from "@mui/material/Card";
import Page from '../../components/Page';
//import NewlyListed from './NewlyListed';
import Information from "pages/LandingPages/AboutUs/sections/Information";

import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";
import PromotionalFull from './PromotionalFull';
import MoreAboutMe from './MoreAboutMe';



const Main = () => {
  const mobileDevice = useMediaQuery("(max-width:650px)")

  return (
    <>
    <Page title="Home - Moneysites">
    
    {mobileDevice ? (
 
    < >
          <Typography variant={mobileDevice ? 'h4' : 'h2'}>
    
          <PromotionalFull/>
          <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        </Card>

        <MoreAboutMe/>
        <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      > 
        <Featuring />
        </Card>   
     
   
      <Newsletter />  
   
        </Typography>
    </>
  
    ) : (
        <>
       
      
        <PromotionalFull/>
        <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        </Card>

        <MoreAboutMe/>
        <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >     
        <Featuring />
        </Card>
      <Newsletter />
    
        </>
)}

    </Page>

    </>
  )
}

export default Main
