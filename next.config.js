/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  /* config options here */
  env: {
    APP_NAME: "LMS Class:Live",
  },
  compress: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
