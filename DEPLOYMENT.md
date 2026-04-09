# 🚀 نشر Poster Pro على Vercel

## الطريقة الأولى: النشر المباشر (الأسهل)

### الخطوة 1: اذهب إلى Vercel
```
https://vercel.com
```

### الخطوة 2: اضغط "Import Project"
- اختر "Import Git Repository"
- أدخل رابط المستودع:
```
https://github.com/my-firset/poster-pro-website
```

### الخطوة 3: اختر الإعدادات
- **Framework**: React
- **Build Command**: `npm run build`
- **Output Directory**: `build`

### الخطوة 4: اضغط "Deploy"
- سيتم النشر تلقائياً
- ستحصل على رابط دائم

---

## الطريقة الثانية: استخدام Vercel CLI

### الخطوة 1: تثبيت Vercel CLI
```bash
npm install -g vercel
```

### الخطوة 2: تسجيل الدخول
```bash
vercel login
```

### الخطوة 3: النشر
```bash
cd poster-pro-website
vercel
```

### الخطوة 4: اتبع التعليمات
- اختر المشروع
- اختر الفريق (Personal)
- اضغط Enter للموافقة

---

## الطريقة الثالثة: GitHub Actions (تلقائي)

### الخطوة 1: أضف Vercel Token
1. اذهب إلى: https://vercel.com/account/tokens
2. انسخ التوكن

### الخطوة 2: أضف Secret إلى GitHub
1. اذهب إلى: https://github.com/my-firset/poster-pro-website/settings/secrets/actions
2. اضغط "New repository secret"
3. الاسم: `VERCEL_TOKEN`
4. القيمة: الصق التوكن

### الخطوة 3: أنشئ Workflow
أنشئ ملف `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        run: |
          npm install -g vercel
          vercel --token ${{ secrets.VERCEL_TOKEN }} --prod
```

---

## ✅ التحقق من النشر

بعد النشر، ستحصل على رابط مثل:
```
https://poster-pro-website.vercel.app
```

### اختبر الموقع:
1. افتح الرابط في المتصفح
2. تأكد من ظهور الصفحة الرئيسية
3. اختبر جميع الصفحات
4. تأكد من عمل جميع الأزرار

---

## 📊 المميزات المجانية على Vercel

✅ **مجاني تماماً**
- نشر غير محدود
- HTTPS تلقائي
- CDN عالمي
- Custom domains
- Analytics

✅ **بدون رسوم إضافية**
- لا توجد رسوم شهرية
- لا توجد رسوم نقل البيانات
- لا توجد رسوم إضافية

---

## 🔧 الإعدادات المتقدمة

### إضافة Custom Domain
1. اذهب إلى Vercel Dashboard
2. اختر المشروع
3. اذهب إلى "Settings" → "Domains"
4. أضف نطاقك الخاص

### متغيرات البيئة
1. اذهب إلى "Settings" → "Environment Variables"
2. أضف المتغيرات المطلوبة

---

## 🆘 استكشاف الأخطاء

### الموقع لا يعمل
- تحقق من سجلات البناء في Vercel
- تأكد من أن `package.json` صحيح
- تأكد من أن `build` مجلد موجود

### الصفحات لا تحمل
- تحقق من اتصال الإنترنت
- امسح ذاكرة التخزين المؤقتة
- جرب في متصفح آخر

### الأداء بطيء
- تحقق من حجم الملفات
- استخدم CDN
- قلل حجم الصور

---

## 📞 الدعم

للمساعدة:
- Vercel Docs: https://vercel.com/docs
- GitHub Issues: https://github.com/my-firset/poster-pro-website/issues

