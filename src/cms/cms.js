import CMS from "netlify-cms-app";

const config = {
  backend: {
    name: "git-gateway",
    branch: process.env.GATSBY_BRANCH || "main",
  },
};

CMS.init({ config });
