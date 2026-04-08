# دليل رفع موقع "روح" على الدومين والاستضافة الخاصة

## الخطوة 1: تحضير ملفات المشروع للنشر

### 1.1 بناء نسخة الإنتاج (Production Build)
```bash
cd /app/frontend
yarn build
```

هذا الأمر سينشئ مجلد `build` يحتوي على الملفات الجاهزة للنشر.

---

## الخطوة 2: تنزيل ملفات المشروع

### الطريقة الأولى: تنزيل كملف مضغوط
1. من واجهة Emergent، اذهب إلى "Download Code"
2. سيتم تنزيل ملف ZIP يحتوي على المشروع كاملاً

### الطريقة الثانية: باستخدام Git (إذا كان متاح)
```bash
git clone [رابط المشروع]
```

---

## الخطوة 3: رفع الملفات على الاستضافة

### حسب نوع الاستضافة لديك:

### أ) استضافة Shared Hosting (مثل cPanel, Plesk)

#### الخطوات:
1. **تسجيل الدخول إلى cPanel/Plesk**

2. **الذهاب إلى File Manager (مدير الملفات)**

3. **رفع ملفات المشروع:**
   - افتح مجلد `public_html` (أو المجلد الرئيسي لدومينك)
   - احذف ملف `index.html` القديم إذا كان موجوداً
   - ارفع محتويات مجلد `build` (وليس المجلد نفسه)
   - الملفات المطلوبة:
     ```
     - index.html
     - static/
       ├── css/
       ├── js/
       └── media/
     - asset-manifest.json
     - favicon.ico
     - manifest.json
     - robots.txt
     ```

4. **ضبط صلاحيات الملفات:**
   - الملفات: 644
   - المجلدات: 755

---

### ب) استضافة VPS (مثل DigitalOcean, AWS, Linode)

#### الخطوات:

1. **الاتصال بالسيرفر عبر SSH:**
```bash
ssh username@your-server-ip
```

2. **تثبيت Nginx (إذا لم يكن مثبتاً):**
```bash
sudo apt update
sudo apt install nginx
```

3. **رفع الملفات:**
```bash
# على جهازك المحلي
scp -r /path/to/build/* username@your-server-ip:/var/www/html/
```

4. **ضبط إعدادات Nginx:**
```bash
sudo nano /etc/nginx/sites-available/rouh
```

أضف التكوين التالي:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

5. **تفعيل الموقع:**
```bash
sudo ln -s /etc/nginx/sites-available/rouh /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

6. **تثبيت شهادة SSL (HTTPS) - مجاناً من Let's Encrypt:**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

### ج) استضافة Vercel (سهلة ومجانية - موصى بها!)

#### الخطوات:
1. **إنشاء حساب على Vercel:**
   - اذهب إلى: https://vercel.com
   - سجل دخول بحساب GitHub أو Google

2. **رفع المشروع:**
   
   **الطريقة 1: من الواجهة (أسهل):**
   - اضغط "New Project"
   - اسحب مجلد المشروع أو اختر من GitHub
   - Vercel ستكتشف React تلقائياً
   - اضغط "Deploy"

   **الطريقة 2: من Terminal:**
   ```bash
   # تثبيت Vercel CLI
   npm install -g vercel

   # في مجلد المشروع
   cd /path/to/your/project/frontend
   vercel
   ```

3. **ربط الدومين الخاص:**
   - من لوحة تحكم Vercel
   - اذهب إلى Settings > Domains
   - أضف دومينك: `yourdomain.com`
   - Vercel ستعطيك DNS records

4. **تحديث DNS عند مزود الدومين:**
   - Type: A Record
   - Name: @
   - Value: 76.76.21.21
   
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

---

## الخطوة 4: ربط الدومين بالاستضافة

### إذا كان الدومين من مزود مختلف (مثل GoDaddy, Namecheap):

1. **تسجيل الدخول إلى لوحة تحكم الدومين**

2. **الذهاب إلى DNS Management**

3. **إضافة/تعديل السجلات (DNS Records):**

   **لـ Shared Hosting:**
   ```
   Type: A
   Host: @
   Points to: [IP address من الاستضافة]
   TTL: Automatic

   Type: A  
   Host: www
   Points to: [IP address من الاستضافة]
   TTL: Automatic
   ```

   **لـ VPS:**
   ```
   Type: A
   Host: @
   Points to: [IP الخاص بالـ VPS]
   TTL: 3600

   Type: A
   Host: www
   Points to: [IP الخاص بالـ VPS]
   TTL: 3600
   ```

4. **الانتظار (15 دقيقة - 48 ساعة)** حتى ينتشر التحديث

---

## الخطوة 5: التحقق من عمل الموقع

1. افتح المتصفح واذهب إلى: `http://yourdomain.com`
2. تأكد من:
   - ظهور اللوجو
   - تبديل اللغة يعمل
   - روابط السوشيال ميديا تعمل
   - زر الواتساب يعمل

---

## ملاحظات مهمة:

### 🔒 SSL Certificate (HTTPS)
- **مهم جداً** لمصداقية الموقع
- مجاني من Let's Encrypt
- Vercel تضيفه تلقائياً
- لـ cPanel: استخدم AutoSSL من لوحة التحكم

### ⚡ تحسين الأداء
```nginx
# إضافة Cache Headers في Nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 📱 اختبار على الموبايل
- افتح الموقع من الجوال
- تأكد من Responsive Design
- اختبر السرعة على: https://pagespeed.web.dev

---

## حل المشاكل الشائعة

### المشكلة 1: "404 Not Found" عند التحديث
**الحل:** تأكد من إعدادات Nginx/Apache لدعم React Router

### المشكلة 2: الصور لا تظهر
**الحل:** تأكد من رفع مجلد `static` بالكامل

### المشكلة 3: الموقع لا يفتح
**الحل:** 
- تحقق من DNS بأداة: https://dnschecker.org
- تأكد من IP الاستضافة صحيح

---

## توصيات إضافية

### 🎯 استخدم Cloudflare (مجاناً):
1. سجل على: https://cloudflare.com
2. أضف دومينك
3. غيّر Nameservers عند مزود الدومين
4. مزايا:
   - حماية DDoS
   - تسريع الموقع (CDN)
   - شهادة SSL مجانية
   - Analytics

---

## ملخص سريع (الطريقة الأسهل):

### استخدام Vercel + Cloudflare:
1. ✅ ارفع المشروع على Vercel (5 دقائق)
2. ✅ سجل الدومين على Cloudflare (10 دقائق)
3. ✅ اربط Vercel بالدومين (5 دقائق)
4. ✅ انتهى! 🎉

---

## الدعم
إذا واجهت أي مشكلة، أخبرني بـ:
- نوع الاستضافة (Shared/VPS/Cloud)
- رسالة الخطأ
- لقطة شاشة من لوحة التحكم
