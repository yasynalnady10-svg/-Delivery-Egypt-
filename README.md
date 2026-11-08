# 🛵 دليفري بعجلة - تحويل اللعبة لـ APK

## الخطوات
1. افتح GitHub واعمل Repository جديد (New repository).
2. فك الضغط عن الملف ده، وارفع **كل** الملفات والفولدرات جوه الـ Repository
   (Add file ← Upload files). تأكد إن فولدر `.github` اترفع (ممكن يكون مخفي عندك).
3. روح تبويب **Actions** ← اختار **Build APK** ← **Run workflow**.
   (وكمان بيشتغل لوحده أول ما ترفع الملفات.)
4. استنى حوالي 5-8 دقايق لحد ما يبقى فيه علامة ✅.
5. افتح التشغيلة الأخيرة، ونزّل من تحت **Artifacts** الملف `delivery-game-apk`.
6. فك الضغط هتلاقي `app-debug.apk`. انقله للموبايل وثبّته
   (فعّل "السماح بالتثبيت من مصادر غير معروفة").

## الملفات
- `www/index.html` ← اللعبة نفسها
- `package.json` ← مكتبات Capacitor
- `capacitor.config.json` ← اسم التطبيق والمعرّف
- `scripts/patch-android.js` ← بيقفل اللعبة على الوضع الطولي
- `.github/workflows/build-apk.yml` ← بيبني الـ APK على GitHub
- `.gitignore`
- `README.md`

## ملاحظات
- ده APK تجريبي (Debug) للتثبيت المباشر. لو عايز تنزله على Google Play محتاج نسخة موقّعة (Release).
- لتغيير اسم التطبيق عدّل `appName`، ولتغيير المعرّف عدّل `appId` في `capacitor.config.json`.
