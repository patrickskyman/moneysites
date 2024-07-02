// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images


function Places() {
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
          Latest blogs {" "}
        </MKTypography>
        <MKTypography
          variant="body1"
          color="white"
          textAlign="center"
          px={{ xs: 6, lg: 12 }}
          mt={1}
        >
Knowledge is of two kinds. We know a subject ourselves, or we know where 
we can find information on it. – Samuel Johnson 
          
        </MKTypography>
      </Grid>
    </Container>
  </MKBox>
  <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            See our latest blogs
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
             
              title="GANs vs. VAEs: What is the best generative AI approach?"
              description="The use of generative AI is taking off across industries. Two popular approaches are GANs, which are used to generate multimedia, and VAEs, used more for signal analysis..."
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
             
              title="deepfake AI (deep fake)"
              description="What is deepfake AI? Deepfake AI is a type of artificial intelligence used to create convincing images, audio..."
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
             
              title="GPT-4"
              description="What is GPT-4? GPT-4 is OpenAI's large multimodal language model that generates text from textual and visual..."
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
            
              title="ChatGPT"
              description="What is ChatGPT? ChatGPT is an artificial intelligence (AI) chatbot that uses natural language processing to"
              action={{
                type: "internal",
                route: "",
                label: "read more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
    </Card>
    </>
  );
}

export default Places;
