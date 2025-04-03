module.exports = {
  apps: [
    {
      name: 'materio-vuetify-app',
      script: 'server.cjs',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 5050,
        HOST: 'app.berkompeten.id'
      }
    }
  ],

  deploy: {
  production: {
    user: 'berkompetenapp',
    host: '82.197.70.234',
    ref: 'origin/master',
    repo: 'https://github.com/izzanrijal/frontend.git',
    path: '/home/berkompetenapp/apps/fe-berkompeten',
    'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production'
  }
}

}
