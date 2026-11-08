// بيقفل اللعبة على الوضع الطولي (Portrait) بعد ما Capacitor يولّد مشروع الأندرويد
const fs = require('fs');
const p = 'android/app/src/main/AndroidManifest.xml';
let x = fs.readFileSync(p, 'utf8');
if (!x.includes('screenOrientation')) {
  x = x.replace('<activity', '<activity android:screenOrientation="portrait"');
}
fs.writeFileSync(p, x);
console.log('Manifest patched');
