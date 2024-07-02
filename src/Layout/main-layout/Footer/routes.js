// react-router-dom components

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const router = {
  brand: "Moneysites",
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/patrick.pope.pp/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/Patrickskyman",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/@patpython",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://money-sites.vercel.app/about-us" },
        { name: "freebies", href: "https://money-sites.vercel.app/freebies" },
        { name: "blog", href: "https://money-sites.vercel.app/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "affiliate program", href: "https://money-sites.vercel.app/affiliate-program"},
        { name: "Our Works", href: "https://money-sites.vercel.app"},
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://money-sites.vercel.app/contact-us"},
        { name: "knowledge center",href: "https://money-sites.vercel.app/knowledge-center" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://money-sites.vercel.app/terms-conditions"},
        { name: "privacy policy", href: "https://money-sites.vercel.app/privacy-policy" },
      ],
    },
  ],
};

export default router;