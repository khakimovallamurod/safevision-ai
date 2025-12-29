# 🛡️ SafeVision — AI Construction Safety Monitoring Platform

SafeVision — **sun’iy intellekt (Computer Vision)** asosida qurilish maydonlarida xavfsizlikni **real-time** nazorat qiluvchi zamonaviy platforma.
Tizim ishchilar, shaxsiy himoya vositalari (PPE), yong‘in va tutunni avtomatik aniqlaydi hamda tezkor ogohlantirishlar yuboradi.

🌐 Website: **[http://safevision.uz](http://safevision.uz)**

---

## 🚀 Asosiy imkoniyatlar

* 🎯 **Real-time Detection** — 100ms dan kam vaqtda video oqimlarni tahlil qilish
* 🦺 **PPE Compliance** — kaska va jilet kiyilishini 24/7 nazorat qilish
* 🔥 **Fire & Smoke Detection** — yong‘in va tutunni ilk bosqichda aniqlash
* 📹 **Multi-camera Support** — cheksiz miqdordagi kameralar bilan ishlash
* 📊 **Live Dashboard** — real vaqtda video va analitika
* 🔔 **Alerts & Notifications** — Telegram / SMS orqali ogohlantirish

---

## 🧠 AI Detection Classes

Platforma quyidagi obyektlarni real vaqtda aniqlaydi:

| Class ID    | Nomi          | Tavsif               |
| ----------- | ------------- | -------------------- |
| `person`    | Xodim         | Ishchilarni aniqlash |
| `helmet`    | Kaska         | Kaska kiyilgan xodim |
| `no-helmet` | Ogohlantirish | Kaskasiz xodim       |
| `vest`      | Jilet         | Himoya jileti        |
| `no-vest`   | Ogohlantirish | Jiletsiz xodim       |
| `fire`      | Yong‘in       | Olov aniqlash        |
| `smoke`     | Tutun         | Tutun aniqlash       |

---

## 🖥️ Frontend texnologiyalar

* ⚛️ **React (TypeScript)**
* 🎨 **Tailwind CSS**
* 🧩 **Lucide Icons**
* 🧠 **Component-based architecture**
* 🌓 **Glassmorphism & modern UI**
* 📱 **Fully responsive design**

---

## 📁 Loyiha tuzilmasi

```bash
src/
├── components/
│   ├── Features.tsx
│   ├── DetectionClasses.tsx
│   └── ...
├── constants.tsx
├── types.ts
├── index.tsx
├── index.css
└── App.tsx
```

---

## ⚙️ O‘rnatish va ishga tushirish

### 1️⃣ Repository’ni klonlash

```bash
git clone https://github.com/khakimovallamurod/safevision-ai
cd safevision
```

### 2️⃣ Paketlarni o‘rnatish

```bash
npm install
```

### 3️⃣ Lokal ishga tushirish

```bash
npm run dev
```

## 🔔 Ogohlantirish tizimi

SafeVision real vaqtda:

* Kaskasiz yoki jiletsiz xodim
* Yong‘in yoki tutun
* Xavfli holatlar

aniqlanganda **Telegram bot** orqali xabar yuboradi.

---

## 📌 Yo‘l xaritasi (Roadmap)

* [ ] Backend API (FastAPI / Flask)
* [ ] YOLO-based model integration
* [ ] Multi-role user system
* [ ] Mobile app (Android / iOS)
* [ ] Cloud deployment

---

## 🤝 Hamkorlik

Loyiha **startup va korxonalar** uchun mo‘ljallangan.
Hamkorlik yoki demo uchun bog‘laning:

📧 Email: **[xakimov2806@gmail.com](mailto:xakimov2806@gmail.com)**
📞 Phone: **+998 93 855 46 40**

