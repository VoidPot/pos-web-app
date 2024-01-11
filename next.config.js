/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  // output: "export",
  // distDir: "out",
  images: { unoptimized: true },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

module.exports = nextConfig;
