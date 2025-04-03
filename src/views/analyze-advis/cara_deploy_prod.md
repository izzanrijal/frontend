# 🚀 PM2 Deploy Guide for `materio-vuetify-vuejs-admin-template-free`

This guide covers the full deployment process using PM2, including setting up deploy keys, configuring build scripts, and handling common errors.

---

## 📁 1. Project Structure

Ensure your project has an `ecosystem.config.cjs` like below:

```js
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
      key: '/home/berkompetenapp/.ssh/deploy_key',
      ref: 'origin/master',
      repo: 'git@github.com:izzanrijal/frontend.git',
      path: '/home/berkompetenapp/apps/fe-berkompeten',
      'post-deploy': 'npm install && npm run build:icons && /home/berkompetenapp/.nvm/versions/node/v22.12.0/bin/pm2 reload ecosystem.config.cjs --env production'
    }
  }
}
```

---

## 🔐 2. Deploy Key Setup

**On server:**
```bash
ssh-keygen -t ed25519 -C "deploy@fe-berkompeten"
# Save at: /home/berkompetenapp/.ssh/deploy_key
```

**On GitHub:**
- Go to your repo → Settings → Deploy Keys
- Add new key → paste content from:
```bash
cat ~/.ssh/deploy_key.pub
```
- ✅ Check "Allow write access"

---

## 💻 3. Prepare the server

```bash
ssh berkompetenapp@82.197.70.234
npm install -g pm2
npm install -g tsx
```

> Make sure PM2 is globally available:
```bash
pm2 -v
# Should return something like: 6.0.5
```

---

## 🧪 4. Test build:icons manually (optional but recommended)

```bash
cd /home/berkompetenapp/apps/fe-berkompeten/source
npm install
npm run build:icons
```

Output should look like:
```
Saved CSS to /src/plugins/iconify/icons.css!
```

---

## 🚀 5. Local Deploy Flow

### Make sure code is committed:
```bash
git add .
git commit -m "ready to deploy"
git push origin master
```

### Deploy to server:
```bash
pm2 deploy ecosystem.config.cjs production --force
```

---

## 🛠️ Troubleshooting

### ❌ `pm2: command not found`  
**Fix:** PM2 is not in the remote shell PATH.

✅ Use full path in `post-deploy`:
```bash
/home/berkompetenapp/.nvm/versions/node/v22.12.0/bin/pm2 reload ecosystem.config.cjs --env production
```

---

### ❌ `SyntaxError: Unexpected token '.'`  
**Fix:** Likely due to unsupported syntax in `build:icons`. Make sure:
- Node.js is modern (v18+)
- `tsx` is installed globally: `npm install -g tsx`

---

### ❌ `push your changes before deploying`  
**Fix:**
```bash
git push origin master
pm2 deploy ecosystem.config.cjs production
```

Or force it:
```bash
pm2 deploy ecosystem.config.cjs production --force
```

---

### ❌ `bash: pm2: command not found (during deploy only)`  
**Fix:** SSH session from PM2 doesn't load full environment. Use full path to pm2.

---

## ✅ Done!

Now your app is:
- Installed
- Icons built
- Reloaded with PM2
- Running at `http://your-server-ip:5050`

---

## 🎁 Optional Next Steps

- Setup Nginx reverse proxy to `localhost:5050`
- Add SSL via Let's Encrypt
- Enable auto-restart on reboot: `pm2 startup`

---

Happy shipping! 🚀  
