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
  HOST: '0.0.0.0'
}
    }
  ],

  deploy: {
    production: {
      user: 'berkompetenapp',
      host: '82.197.70.234',
      key: '.ssh/deploy_key',
      ref: 'login-error',
      repo: 'git@github.com:izzanrijal/frontend.git',
      path: '/home/berkompetenapp/apps/fe-berkompeten',
	'post-deploy': 'npm install && /home/berkompetenapp/.nvm/versions/node/v22.12.0/bin/pm2 reload ecosystem.config.cjs --env production'
    }
  }
}
