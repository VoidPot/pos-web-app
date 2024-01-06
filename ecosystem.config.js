module.exports = {
  apps: [
    {
      name: "soclif-web-application",
      script: "npm run start -- -p 3030",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
