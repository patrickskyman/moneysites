// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ApiIcon from '@mui/icons-material/Api';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import AssistantIcon from '@mui/icons-material/Assistant';

import MKBox from "../../../src/Layout/main-layout/MKBox"
import MKTypography from "../../../src/Layout/main-layout/MKTypography";

function MoreAboutMe() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <Typography variant="h2" color="green" my={1}>
              See More About Us
            </Typography>
            <MKTypography variant="body2" color="text" mb={2}>
            Explore the innovation behind Moneysites – your go-to partner for cutting-edge software development. Our skilled team blends creativity and technical prowess to deliver solutions that transcend expectations. Discover the power of collaboration with us.
            </MKTypography>
            <MKTypography
              component="a"
              href="#"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              More about us
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <ApiIcon/>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                From seamless integrations to robust architecture, we specialize in crafting APIs that elevate your software infrastructure. 
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <ArchitectureIcon/>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                We meticulously design scalable, efficient structures that form the backbone of high-performance systems.
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <AssistantIcon/>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                Navigate the complexity of software development effortlessly with our dedicated assistance in documentation. 
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default MoreAboutMe;