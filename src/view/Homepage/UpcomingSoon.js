import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from "@mui/joy/Typography"

import Upcoming from './Upcoming';



function UpcomingSoon() {

    return (
       <>
      <div className='container'> 
    <div className="">
    <div className="page-width">
      <div className="row justify-content-center lead text-blue mb-sm-6 mb-4">
      <Typography
                    fontSize="35px"
                    align="center"
                    borderRadius=""
                    px={0.5}
                    mr={0.5}
                    sx={theme => ({
                      ...theme.variants.soft.succes,
                      color: "primary.400",
                      verticalAlign: "text-top"
                    })}
                  >         
        Upcoming Meetings
        </Typography>
      </div>  
      </div>


    </div>
    </div>
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
   
        <Upcoming />
  
        </Box>
       
        </>
      );
}
export default UpcomingSoon;