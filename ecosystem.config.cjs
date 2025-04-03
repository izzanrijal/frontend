module.exports = {
  apps: [
    {
      name: 'materio-vuetify-app',
      script: 'node_modules/vite/bin/vite.js',
      args: 'preview --host app.berkompeten.id',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
} 
