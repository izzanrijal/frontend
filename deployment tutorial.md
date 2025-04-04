# 🚀 PM2 Continuous Integration Deployment Guide

Dokumentasi lengkap step-by-step setup deploy frontend menggunakan **PM2**, **Vite**, dan GitHub untuk proyek `materio-vuetify-vuejs-admin-template-free`.

---

## 📌 Tujuan

- Build app **di lokal**
- Commit hasil build (`dist/`, `icons.css`)
- Push ke GitHub
- **Deploy otomatis** ke server menggunakan `pm2 deploy`
- Tanpa perlu build di server (karena masalah ESM & top-level await)

---

## 🧱 Struktur Umum

```
📁 project-root/
├─ ecosystem.config.cjs         → PM2 deploy config
├─ build-and-deploy.sh          → Script satu klik deploy
├─ dist/                        → Folder hasil Vite build
├─ src/plugins/iconify/icons.css → File hasil build iconify
├─ package.json
```

---

## 🪜 STEP-BY-STEP SETUP

### ✅ 1. Inisialisasi Git & PM2 di Server

```bash
npm install -g pm2
pm2 init
```

### ✅ 2. Setup Deploy SSH Key

Di laptop kamu:

```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/deploy_key
```

Upload `deploy_key.pub` ke file `~/.ssh/authorized_keys` di server.

Tambahkan `deploy_key` ke `.ssh/config` atau reference-nya di `ecosystem.config.cjs`.

---

### ✅ 3. Buat `ecosystem.config.cjs`

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
        PORT: 5050, #port harus selalu di set, dan juga allowed domain, namun kali ini pakai host 0.0.0.0
        HOST: '0.0.0.0'
      }
    }
  ],

  deploy: { #params harus ditulis untuk fungsi deployment dari pm2
    production: {
      user: 'berkompetenapp',
      host: '82.197.70.234',
      key: '/home/berkompetenapp/.ssh/deploy_key',
      ref: 'origin/master',
      repo: 'git@github.com:izzanrijal/frontend.git',
      path: '/home/berkompetenapp/apps/fe-berkompeten',
      'post-deploy': 'npm install && /home/berkompetenapp/.nvm/versions/node/v22.12.0/bin/pm2 reload ecosystem.config.cjs --env production'
    }
  }
}
```

---

### ✅ 4. Setup Script `build-and-deploy.sh`

```bash
#!/bin/bash

echo "🔧 npm install"
npm install

echo "🎨 build iconify"
npm run build:icons

echo "🏗️ build vite"
npm run build

echo "📦 commit dist & icons"
git add -f dist src/plugins/iconify/icons.css
git commit -m "chore: prebuilt dist and icons"
git push origin master

echo "🚀 deploy to server"
pm2 deploy ecosystem.config.cjs production --force
```

> Jadikan executable:
```bash
chmod +x build-and-deploy.sh
```

---

### ✅ 5. Tambahkan Script di `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview --port 5050",
  "start": "vite preview --port 5050",
  "build:icons": "tsx src/plugins/iconify/build-icons.js",
  "predeploy": "npm run build:icons" # predeploy dulu karena gagal build saat di pm2, push predeploy ke git remote untuk dipakai dist pre-deploy
}
```

---

### ✅ 6. Build Manual Pertama Kali (Lokal)

```bash
npm install
npm run build:icons
npm run build
```

---

### ✅ 7. Commit `dist/` & `icons.css`

```bash
git add -f dist src/plugins/iconify/icons.css
git commit -m "chore: prebuilt dist and icons"
git push origin master
```

---

### ✅ 8. Deploy!

```bash
./build-and-deploy.sh
```

---

## 🎯 Hasil Akhir

- Aplikasi dideploy via PM2
- Tidak ada proses build di server
- Aman dari error `SyntaxError: Unexpected token '.'`
- Fast, stable, production-ready

---

## 🌐 Akses Aplikasi

```bash
http://82.197.70.234:5050
https://app.berkompeten.id (setelah setup Nginx + SSL)
```

---

## 📦 Bonus (Opsional)

- Tambahkan `dist/` ke `.gitignore` kembali setelah punya CI/CD
- Setup Nginx untuk reverse proxy + SSL Let's Encrypt
- Tambahkan cron `pm2 startup` untuk auto restart saat reboot

---

## 👨‍💻 Maintainer

- 🔧 DevOps: @izzanrijal
- 🤖 Flow Design: @wibuk (ChatGPT)

