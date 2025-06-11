
# 🏠 عقاراتنا - منصة العقارات

منصة عقارية شاملة تم تطويرها باستخدام React و TypeScript لعرض وإدارة العقارات بطريقة حديثة وسهلة الاستخدام.

## ✨ المميزات

- 🏡 **عرض العقارات**: استعراض مجموعة متنوعة من العقارات مع صور عالية الجودة
- 🔍 **البحث والتصفية**: إمكانية البحث بحسب الموقع، السعر، وعدد الغرف
- 📱 **تصميم متجاوب**: يعمل بشكل مثالي على جميع الأجهزة (الهاتف، التابلت، الكمبيوتر)
- 🖼️ **معرض الصور**: عرض تفاعلي للصور مع إمكانية التكبير والتصغير
- 📞 **طلب التواصل**: نموذج تواصل مباشر مع مالك العقار
- 🌙 **واجهة حديثة**: تصميم عصري ومريح للعين
- 🌐 **دعم اللغة العربية**: واجهة مصممة خصيصاً للمحتوى العربي

## 🛠️ التقنيات المستخدمة

- **React 18** - مكتبة JavaScript للواجهات
- **TypeScript** - للكتابة الآمنة والمطورة
- **Vite** - أداة البناء السريعة
- **Tailwind CSS** - إطار عمل CSS للتصميم
- **Shadcn/UI** - مكونات واجهة المستخدم
- **React Router Dom** - للتنقل بين الصفحات
- **Lucide React** - مكتبة الأيقونات
- **Capacitor** - لتحويل التطبيق إلى تطبيق موبايل

## 📁 هيكل المشروع

```
src/
├── components/          # مكونات الواجهة
│   ├── ui/             # مكونات Shadcn/UI
│   ├── HeroSection.tsx # قسم البطل الرئيسي
│   ├── PropertyCard.tsx # بطاقة العقار
│   ├── PropertyGrid.tsx # شبكة العقارات
│   ├── SearchFilters.tsx # مرشحات البحث
│   ├── ImageGallery.tsx # معرض الصور
│   └── ContactButton.tsx # زر التواصل
├── pages/              # صفحات التطبيق
│   ├── Index.tsx       # الصفحة الرئيسية
│   ├── Properties.tsx  # صفحة العقارات
│   ├── PropertyDetails.tsx # تفاصيل العقار
│   └── Contact.tsx     # صفحة التواصل
├── lib/                # المكتبات والوظائف المساعدة
│   ├── data.ts         # بيانات العقارات
│   └── utils.ts        # وظائف مساعدة
└── hooks/              # React Hooks مخصصة
```

## 🚀 البدء السريع

### متطلبات النظام

- Node.js (الإصدار 16 أو أحدث)
- npm أو yarn أو bun

### التثبيت

1. **استنساخ المشروع**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **تثبيت التبعيات**
   ```bash
   npm install
   # أو
   yarn install
   # أو
   bun install
   ```

3. **تشغيل المشروع**
   ```bash
   npm run dev
   # أو
   yarn dev
   # أو
   bun dev
   ```

4. **فتح التطبيق**
   افتح المتصفح على العنوان: `http://localhost:8080`

## 📱 إنشاء تطبيق موبايل

### Android

1. **إضافة منصة Android**
   ```bash
   npx cap add android
   ```

2. **بناء المشروع**
   ```bash
   npm run build
   npx cap sync
   ```

3. **فتح مشروع Android**
   ```bash
   npx cap open android
   ```

### iOS

1. **إضافة منصة iOS**
   ```bash
   npx cap add ios
   ```

2. **بناء المشروع**
   ```bash
   npm run build
   npx cap sync
   ```

3. **فتح مشروع iOS**
   ```bash
   npx cap open ios
   ```

## 🎨 التخصيص

### تعديل البيانات

يمكنك تعديل بيانات العقارات من خلال ملف `src/lib/data.ts`:

```typescript
export const properties: Property[] = [
  {
    id: "1",
    title: "شقة فاخرة في الرياض",
    description: "شقة حديثة ومجهزة بالكامل...",
    price: 450000,
    location: "الرياض",
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    images: ["image1.jpg", "image2.jpg"],
    featured: true,
    createdAt: "2024-01-01"
  }
  // المزيد من العقارات...
];
```

### تعديل الألوان والتصميم

يتم التحكم في التصميم من خلال ملف `src/index.css` و `tailwind.config.ts`.

## 📋 الأوامر المتاحة

- `npm run dev` - تشغيل الخادم التطويري
- `npm run build` - بناء المشروع للإنتاج
- `npm run preview` - معاينة البناء المحلي
- `npm run lint` - فحص الكود
- `npx cap sync` - مزامنة التغييرات مع تطبيقات الموبايل

## 🌐 النشر

### نشر ويب

يمكنك نشر التطبيق على منصات مثل:
- **Vercel**
- **Netlify** 
- **GitHub Pages**
- **Firebase Hosting**

### نشر تطبيق موبايل

- **Android**: رفع على Google Play Store
- **iOS**: رفع على App Store

## 🤝 المساهمة

نرحب بمساهماتكم! يرجى:

1. عمل Fork للمشروع
2. إنشاء فرع جديد للميزة (`git checkout -b feature/amazing-feature`)
3. تنفيذ التغييرات وإضافة commit (`git commit -m 'Add amazing feature'`)
4. رفع التغييرات (`git push origin feature/amazing-feature`)
5. فتح Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - راجع ملف LICENSE للتفاصيل.

## 📞 التواصل

- **المطور**: Lovable AI
- **الموقع**: [https://lovable.dev](https://lovable.dev)
- **الدعم**: [https://docs.lovable.dev](https://docs.lovable.dev)

## 🙏 شكر خاص

- شكر لفريق React على المكتبة الرائعة
- شكر لفريق Tailwind CSS على إطار العمل المميز
- شكر لجميع المساهمين في المشروع

---

**ملاحظة**: هذا المشروع تم إنشاؤه باستخدام منصة Lovable لتطوير التطبيقات بالذكاء الاصطناعي.
