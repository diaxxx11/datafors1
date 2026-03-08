
# Survey Insight Dashboard

Bu proje, ham CSV formatındaki anket verilerini analiz ederek anlamlı içgörüler (insights) sunan bir Next.js + TypeScript dashboard uygulamasıdır.
Uygulama CSV verisini parse eder, metrikleri hesaplar ve sonuçları filtrelenebilir bir arayüz üzerinden kullanıcıya gösterir.

## Özellikler

📂 CSV Veri İşleme

CSV dosyasındaki anket verilerini otomatik olarak okur

Veriyi normalize eder ve analiz için hazır hale getirir

🔎 Survey Filtreleme

survey_id üzerinden filtreleme yapılabilir

Seçilen ankete göre dashboard dinamik olarak güncellenir

📊 Insight Kartları

Her insight için ayrı kart gösterimi

Sentiment bilgisi

Skor ve özet metin gösterimi

⚡ Performans

React useMemo ile optimize edilmiş veri filtreleme

Büyük veri setlerinde bile hızlı render

🧱 Temiz Mimari

Bileşen bazlı yapı

TypeScript ile tip güvenliği

UI ve veri işleme mantığının ayrılması


## Kullanılan Teknolojiler

**React framework:** Next.js

**Kod:** TypeScript

**State yönetimi:** React Hooks

**UI:** TailwindCSS

**CSV parsing:** PapaParse


## Kurulum

Projeyi klonlayın:

git clone https://github.com/diaxxx11/datafors1.git
cd datafors1

Bağımlılıkları yükleyin:

npm install

Geliştirme sunucusunu başlatın:

npm run dev

Tarayıcıda açın:

http://localhost:3000

