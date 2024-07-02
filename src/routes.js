
// Pages
import AboutUs from "../src/view/pages/AboutPage"
import ContactUs from "layouts/pages/landing-pages/contact-us";
//import SignIn from "layouts/pages/authentication/sign-in";
import Presentation from "pages/Presentation";
import PricingPage from "products/LoggedIn/pricing/PricingPage";
import Places from "pages/LandingPages/Author/sections/Posts";

const routes = [
  {
    name: "research",
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Overview",
        collapse: [
          {
            name: "about us",
            route: "/about-us",
            component: <AboutUs />,
          },
          {
            name: "Contact",
            route: "/contact-us",
            component: <ContactUs />,
          },

        ],
      },
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/sign-in",
            component: <Presentation />,
          },
        ],
      },
    ],
  },
  {
    name: "API",
    name: "Overview",
    collapse: [
  
        {
          name: "Developers Page",
          description: "Read more",
          route: "/moneysites-for-developers",
          component: <Presentation />,
        },
      
      {
        name: "Pricing",
        description: "Read more",
        route: "/pricing",
        component: <PricingPage />,
      },

    ],
  },
  {
    name: "company",
    collapse: [
      {
        name: "blog",
        description: "See our blogs",
        route: "/blog",
        component: <Places />,
      },
      {
        name: "careers",
        description: "Current openings",
        href: "https://www.moneysites.net/careers",
      },
      {
        name: "customer stories",
        description: "Read interesting customer stories",
        href: "https://www.moneysites.net/customer-stories",
      },

    ],
  },

];

export default routes;
