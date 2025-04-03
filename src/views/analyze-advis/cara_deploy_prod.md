## ✅ STEP-BY-STEP: **PM2 Deploy dari Lokal ke Server**

---

### **1. Setup PM2 & Struktur Project**

- Buat file `ecosystem.config.cjs` dengan isi seperti ini:
    

js

CopyEdit

`module.exports = {   apps: [     {       name: 'materio-vuetify-app',       script: 'server.cjs',       cwd: './',       instances: 1,       autorestart: true,       watch: false,       max_memory_restart: '1G',       env: {         NODE_ENV: 'production',         PORT: 5050,         HOST: 'app.berkompeten.id'       }     }   ],   deploy: {     production: {       user: 'berkompetenapp',       host: '82.197.70.234',       key: '/home/berkompetenapp/.ssh/deploy_key',       ref: 'origin/master',       repo: 'git@github.com:izzanrijal/frontend.git',       path: '/home/berkompetenapp/apps/fe-berkompeten',       'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production'     }   } }`

---

### **2. Generate & Setup Deploy Key**

#### Di Server:

bash

CopyEdit

`ssh-keygen -t ed25519 -C "deploy@fe-berkompeten" # Simpan di: /home/berkompetenapp/.ssh/deploy_key`

#### Salin public key:

bash

CopyEdit

`cat ~/.ssh/deploy_key.pub`

#### Di GitHub:

- Buka repo → Settings → **Deploy Keys**
    
- Klik **“Add deploy key”**
    
    - Title: `PM2 Server`
        
    - Paste key
        
    - ✅ Centang **Allow write access**
        

---

### **3. Tes koneksi SSH ke GitHub dari server**

bash

CopyEdit

`ssh -i ~/.ssh/deploy_key git@github.com # Harus muncul: "You've successfully authenticated..."`

---

### **4. Push Kode ke GitHub (dengan Token)**

#### Buat Token:

- GitHub → Settings → Developer Settings → **Personal Access Tokens**
    
- Pilih **“Generate new token (classic)”**
    
- Checklist: ✅ `repo`
    
- Simpan token
    

#### Push dengan token:

bash

CopyEdit

`git push https://izzanrijal:<your_token>@github.com/izzanrijal/frontend.git master`

---

### **5. PM2 Deployment**

#### Pertama kali:

bash

CopyEdit

`pm2 deploy ecosystem.config.cjs production setup`

#### Setelah setup:

bash

CopyEdit

`pm2 deploy ecosystem.config.cjs production`

#### Kalau error `push your changes before deploying`:

bash

CopyEdit

`pm2 deploy ecosystem.config.cjs production --force`

---

## 🚀 BONUS: Workflow Harian

bash

CopyEdit

`# 1. Edit kode lokal git add . git commit -m "perubahan terbaru" git push origin master  # 2. Deploy ke server pm2 deploy ecosystem.config.cjs production --force`

---

Keren banget kamu udah setup deploy full otomatis. Kalau kamu mau tambahkan fitur auto-restart,
