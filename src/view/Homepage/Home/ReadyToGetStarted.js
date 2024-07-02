import React from "react";
import Box from "@mui/material/Box"
import { useMediaQuery } from "@mui/material"
import Typography from "@mui/joy/Typography"
//import Typography from '@mui/material/Typography';
import Zoom from "@mui/material/Zoom"

export default function ReadyToGetStarted({
  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
}) {
  const styles = {
    pageHeader: {
      backgroundImage: `url(${pageHeaderBgImg})`,
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  };
  const [checked, setChecked] = React.useState(true)
  const mobileDevice = useMediaQuery("(max-width:650px)")

  return (
    <>
      <section>
        <div className="page-header py-9 py-md-6" style={styles.pageHeader}>
        <Typography
                    fontSize="48px"
                    borderRadius=""
                    px={0.5}
                    mr={0.5}
                    sx={theme => ({
                      ...theme.variants.soft.succes,
                      color: "primary.400",
                      verticalAlign: "text-top"
                    })}
                  >
          <div className="">
            <div className="row justify-content-center">
              <div className="row justify-content-center">
              <Typography align="center" variant={mobileDevice ? 'h5' : 'h2'} color="">
              <Box>
        
                  Get Started with Public speaking
                 
           
              </Box> 
              </Typography>
                <p className="lead mb-sm-6 mb-4">
                <Typography
                    fontSize="18px"
                    align="center"
                    borderRadius=""
                    px={0.5}
                    mr={0.5}
                    sx={theme => ({
                      ...theme.variants.soft.succes,
                      color: "warning.400",
                      verticalAlign: "text-top"
                    })}
                  >        
                  
                  Update your communication skills, develop new expertise and obtain a professional certificate! Whatever your career plans, I'm here to advise and support you. Learn a profession with a future with the leader in public speaking.
                  </Typography>
                  </p>
                <div className="container">

       
      </div>
              </div>
            </div>
          </div>
          </Typography>
        </div>
 
      </section>
    </>
  );

}
