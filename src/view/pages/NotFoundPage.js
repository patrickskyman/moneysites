import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import MKTypography from 'components/MKTypography';

import Page from '../../../src/components/Page'

const NotFoundPage = () => {
  const mobileDevice = useMediaQuery('(max-width:650px)');

  return (
    <Page title="Not Found Page">
    
        <Box
          height={mobileDevice ? '50vh' : '100vh'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          style={{
            backgroundColor: "green",
        
        // Adjust the value to control the curve
          }}
        >
          <MKTypography
          variant={mobileDevice ? 'h4' : 'h1'}
          color="white"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
          style={{ display: "inline", padding: "5px" }}
        >
          404 Page Not Found
        </MKTypography>
        </Box>
    
    </Page>
  );
};

export default NotFoundPage;
