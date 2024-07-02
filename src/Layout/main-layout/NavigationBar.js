import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from "routes";


function ResponsiveAppBar() {



  return (
    <AppBar position="sticky">
<DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.moneysites/news",
          label: "News",
       
        }}
        transparent
        light
      />
      
    </AppBar>
  );
}
export default ResponsiveAppBar;