import React from 'react';
import Box from '@mui/joy/Box';
import Typography from "@mui/joy/Typography"

//import { Typography } from '@mui/material';
import styled from "styled-components";


const Main = styled.main`
  margin: 1em;
`;


const Learn = () => (
    <>
   <Main>
  <div className="pt-3">
  <Typography
                    fontSize="48px"
                    fontWeight="bold"
                    align="center"
                    borderRadius=""
                    px={0.5}
                    mr={0.5}
                    sx={theme => ({
                     
                      color: "primary.400",
                      verticalAlign: "text-top"
                    })}
                  >
            Learn. Apply!
    </Typography>

    <p className="row justify-content-center lead text-blue mb-sm-6 mb-4">
    <Typography
                    fontSize="18px"
                    fontWeight="bold"
                    align="center"
                    borderRadius=""
                    px={0.5}
                    mr={0.5}
                    sx={theme => ({
                     
                      color: "warning.400",
                      verticalAlign: "text-top"
                    })}
                  >
      
      Discover our 3 new ways of learning: 20% theory, 80% practice.
      </Typography>
      </p>
    </div>
    </Main>
    <Box
    sx={{
      display: 'flex',
      gap: 1,
      py: 1,
      overflow: 'auto',
      width: 'auto',
     
      margin: 1,
      scrollSnapType: 'x mandatory',
      '& > *': {
        scrollSnapAlign: 'center',
      },
      '::-webkit-scrollbar': { display: 'none' },
    }}
  >
   

  
  </Box>
  </>
);

export default Learn;
