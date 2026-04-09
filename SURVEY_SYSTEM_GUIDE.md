# 🎯 نظام الاستبيان وجمع البيانات - دليل شامل

## ✅ ما تم إنجازه

### 1. **صفحة الاستبيان التفاعلية** (`/survey`)
- 9 أسئلة عن التفضيلات والمشاكل
- نموذج متعدد الخطوات (Multi-step Form)
- شريط تقدم ديناميكي
- تحقق من صحة البيانات

### 2. **البيانات المطلوبة**
**معلومات شخصية:**
- الاسم الكامل (إجباري)
- رقم الموبايل (إجباري)
- البريد الإلكتروني (اختياري)
- العمر (إجباري)
- الجنس (إجباري)
- المنطقة/المدينة (إجباري)

**أسئلة عن التفضيلات:**
1. عطورك المفضلة
2. كم مرة تشتري عطر؟
3. المشاكل التي تواجهك
4. الميزانية المفضلة
5. نوع العطر المفضل
6. كيف تكتشف العطور الجديدة؟
7. وصف العطر المثالي (حلمك)

### 3. **نظام كود الخصم**
- ✅ توليد كود خصم فريد (مثال: ROUH6A7B9C)
- ✅ عرض الكود على الشاشة مباشرة
- ✅ زر نسخ سريع
- ✅ تذكير بأخذ سكرين شوت
- ✅ خصم 20% لمرة واحدة فقط لكل رقم

### 4. **التحقق من الأرقام**
- ✅ كل رقم موبايل يمكنه الحصول على الخصم **مرة واحدة فقط**
- ✅ رسالة خطأ واضحة إذا حاول شخص استخدام نفس الرقم مرتين

### 5. **Backend API**
**Endpoints:**
- `POST /api/survey/submit` - إرسال الاستبيان
- `GET /api/survey/responses` - عرض كل الردود (للإدارة)
- `POST /api/survey/mark-used/{code}` - تحديد كود كمستخدم

**قاعدة البيانات:** MongoDB
**Collection:** `survey_responses`

---

## 📊 هيكل البيانات في MongoDB

```javascript
{
  "_id": ObjectId("..."),
  "name": "أحمد محمد",
  "phone": "+963933898625",
  "phone_normalized": "963933898625",  // للتحقق من التكرار
  "email": "ahmad@example.com",
  "age": 28,
  "gender": "male",
  "location": "دمشق",
  "favoritePerfumes": "Dior Sauvage, Chanel",
  "purchaseFrequency": "quarterly",
  "mainProblem": "العطر ما بيدوم طويل",
  "priceRange": "100-200",
  "perfumeType": "mixed",
  "discoveryMethod": "social",
  "wishList": "عطر يدوم 12 ساعة ورائحة قوية",
  "discountCode": "ROUH6A7B9C",
  "isUsed": false,
  "createdAt": "2025-12-08T15:30:00Z",
  "usedAt": null
}
```

---

## 🎨 تجربة المستخدم

### رحلة العميل:
1. **الصفحة الرئيسية** → يشاهد زر "🎁 احصل على خصم 20%"
2. **ينقر على الزر** → ينتقل لصفحة الاستبيان
3. **يجيب على 9 أسئلة** → كل سؤال في صفحة منفصلة
4. **يضغط "احصل على الخصم"** → يتم حفظ البيانات
5. **يظهر كود الخصم** → ROUH6A7B9C
6. **ينسخ الكود** → أو يأخذ سكرين شوت
7. **يتواصل عبر واتساب** → لاستخدام الكود

---

## 🔧 كيفية استخدام النظام

### 1. الوصول للاستبيان
```
https://yourdomain.com/survey
```

### 2. عرض جميع الردود (API)
```bash
curl https://yourdomain.com/api/survey/responses
```

### 3. تحديد كود كمستخدم
```bash
curl -X POST https://yourdomain.com/api/survey/mark-used/ROUH6A7B9C
```

---

## 📱 استخراج البيانات

### طريقة 1: من MongoDB Compass
1. افتح MongoDB Compass
2. اتصل بقاعدة البيانات
3. افتح collection: `survey_responses`
4. Export → CSV/JSON

### طريقة 2: من Backend API
```bash
# Get all responses
curl https://yourdomain.com/api/survey/responses > responses.json
```

### طريقة 3: Python Script
```python
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['rouh_db']
responses = list(db.survey_responses.find())

# Export to CSV
import csv
with open('survey_data.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=responses[0].keys())
    writer.writeheader()
    writer.writerows(responses)
```

---

## 🛡️ الأمان والحماية

### ✅ تم تطبيقه:
1. **التحقق من الأرقام:** لا يمكن لنفس الرقم الحصول على أكثر من كود
2. **تنظيف الأرقام:** إزالة المسافات والرموز قبل المقارنة
3. **Validation:** التحقق من صحة البيانات قبل الحفظ
4. **Error Handling:** رسائل خطأ واضحة بالعربية

### 💡 اقتراحات إضافية:
- [ ] إضافة Rate Limiting (تحديد عدد المحاولات)
- [ ] إضافة CAPTCHA
- [ ] إرسال إشعار على الواتساب عند الإجابة
- [ ] Dashboard لعرض الإحصائيات

---

## 📈 الإحصائيات المتاحة

يمكنك تحليل:
1. **أكثر العطور شيوعاً** (من `favoritePerfumes`)
2. **المشاكل الأكثر تكراراً** (من `mainProblem`)
3. **الفئة العمرية الأكثر اهتماماً** (من `age`)
4. **الميزانية المفضلة** (من `priceRange`)
5. **المناطق الأكثر طلباً** (من `location`)
6. **نسبة الذكور/الإناث** (من `gender`)

---

## 🚀 الخطوات التالية (اختياري)

### 1. إرسال الكود على الواتساب تلقائياً
```python
# استخدام Twilio API
from twilio.rest import Client

def send_whatsapp_code(phone, code):
    client = Client(account_sid, auth_token)
    message = client.messages.create(
        from_='whatsapp:+14155238886',
        body=f'مبروك! كود الخصم الخاص بك: {code}',
        to=f'whatsapp:{phone}'
    )
```

### 2. Dashboard للإدارة
- عرض عدد الردود
- تصدير البيانات
- إحصائيات مباشرة
- إدارة أكواد الخصم

### 3. Email التأكيد
- إرسال إيميل بالكود
- رسالة شكر
- تذكير بالاستخدام

---

## 🔄 سير العمل الموصى به

### عند استلام طلب شراء:
1. اطلب من العميل كود الخصم
2. تحقق من الكود في قاعدة البيانات:
   ```bash
   # ابحث عن الكود
   db.survey_responses.findOne({discountCode: "ROUH6A7B9C"})
   ```
3. تأكد أن `isUsed: false`
4. قدم الخصم 20%
5. حدث الكود:
   ```bash
   curl -X POST https://yourdomain.com/api/survey/mark-used/ROUH6A7B9C
   ```

---

## 📝 ملاحظات مهمة

1. **النسخ الاحتياطي:**
   - قم بعمل backup يومي لقاعدة البيانات
   - احفظ البيانات في أكثر من مكان

2. **الخصوصية:**
   - البيانات حساسة (أرقام هواتف، إيميلات)
   - لا تشارك البيانات مع طرف ثالث
   - احذف البيانات القديمة بعد فترة

3. **المتابعة:**
   - تواصل مع العملاء عبر الواتساب
   - أرسل تحديثات عن المنتجات الجديدة
   - استخدم البيانات لتحسين المنتجات

---

## 🎯 الأهداف المحققة

✅ جمع بيانات العملاء المحتملين
✅ فهم تفضيلات السوق
✅ معرفة المشاكل الشائعة
✅ بناء قاعدة بيانات تسويقية
✅ تقديم حافز للمشاركة (خصم 20%)
✅ منع التكرار والاحتيال
✅ تجربة مستخدم ممتازة

---

**تم بناء النظام بنجاح! 🎉**

للأسئلة أو الدعم، راجع الملفات:
- `/app/frontend/src/pages/Survey.jsx` - واجهة الاستبيان
- `/app/backend/routes/survey.py` - Backend API
- `/app/backend/server.py` - Server الرئيسي
