module.exports = {
  apps: [
    {
      name: 'backend-api',
      script: 'npm',
      args: 'start',
      interpreter: 'none',
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
}
