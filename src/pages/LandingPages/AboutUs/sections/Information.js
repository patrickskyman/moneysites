
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  const image = "/images/searchinsights.jpg";
  return (
    <MKBox component="section" py={12}>
      <Container>
      <Typography
          variant="h2"
          color="green"
    
        >
          Empower your online presence today
        </Typography>
        <br></br>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="End-to-end Solution"
                    description="We use the best technology to create stunning software that match the current trends. Technology is everevolving."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="web"
                    title="Improve performance"
                    description="Slow websites hurt SEO and conversions. With us, you'll rank among the top 10 without spending a cent."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="computer"
                    title="Responsive Design"
                    description="Our Apps give the best visual experience on all platforms."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="speed"
                    title="Improved platform"
                    description="We ensure there is improved performance no matter the traffic."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard

              image={image}
              title="Get insights on Search"
              description="See how we can help you track your searches and make useful insights."
              action={{
                type: "internal",
                route: "about-us",
                color: "info",
                label: "learn more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
