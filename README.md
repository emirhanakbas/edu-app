# edu-app

## Programlama Dili Seçimi (Programming Language Selection)

### Seçilen Teknolojiler (Selected Technologies)

Bu eğitim uygulaması için aşağıdaki teknoloji yığını seçilmiştir:

**Frontend:**
- **React** - Modern, bileşen tabanlı UI kütüphanesi
- **TypeScript** - Tip güvenli JavaScript, büyük projelerde hata oranını azaltır
- **CSS Modules/Styled Components** - Modüler stil yönetimi

**Backend:**
- **Node.js** - JavaScript runtime ortamı
- **Express.js** - Hızlı ve minimalist web framework
- **TypeScript** - Backend'de de tip güvenliği

**Veritabanı:**
- **PostgreSQL** - İlişkisel veritabanı (production)
- **SQLite** - Geliştirme ortamı için hafif alternatif

**Geliştirme Araçları:**
- **Vite** - Hızlı build tool ve dev server
- **ESLint** - Kod kalitesi ve stil kontrolü
- **Prettier** - Kod formatlama
- **Jest** - Unit testler için

### Seçim Gerekçeleri (Selection Rationale)

1. **Eğitim Değeri**: JavaScript/TypeScript ekosistemi öğrencilerin modern web geliştirme becerilerini öğrenmesine yardımcı olur

2. **Tek Dil Avantajı**: Frontend ve backend'de aynı dil kullanılması, geliştirme sürecini basitleştirir

3. **Topluluk Desteği**: React ve Node.js'in güçlü topluluk desteği ve dokümantasyonu vardır

4. **Performans**: Modern JavaScript toolchain'i ile yüksek performanslı uygulamalar geliştirilebilir

5. **Öğrenme Eğrisi**: Öğrenciler için erişilebilir, aynı zamanda endüstri standardı teknolojiler

6. **Etkileşimli UI**: React, eğitim uygulamaları için gerekli olan etkileşimli kullanıcı arayüzleri oluşturmaya uygundur

### Proje Yapısı (Project Structure)

```
edu-app/
├── frontend/          # React TypeScript uygulaması
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Node.js Express API
│   ├── src/
│   ├── tests/
│   └── package.json
├── shared/            # Ortak tipler ve yardımcılar
└── docs/              # Dokümantasyon
```

### Kurulum (Setup)

```bash
# Gereksinimler
node --version  # v18+ önerilir
npm --version   # v8+ önerilir

# Proje bağımlılıklarını yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

### Katkıda Bulunma (Contributing)

Bu proje eğitim amaçlıdır. Katkıda bulunmak için:

1. Repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/new-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add new feature'`)
4. Branch'inizi push edin (`git push origin feature/new-feature`)
5. Pull Request oluşturun