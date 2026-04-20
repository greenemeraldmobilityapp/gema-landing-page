# GEMA Landing Page

Website landing page profesional untuk startup GEMA dengan fitur lengkap dan modern.

## Fitur

- **Responsive Design**: Tampilan optimal di semua perangkat (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle tema dengan icon di navbar
- **Multi-language**: Bahasa Indonesia (default) dan English
- **Animasi Smooth**: Transisi halus dengan Framer Motion
- **WhatsApp Integration**: Floating button dan CTA untuk kontak WhatsApp
- **SEO Optimized**: Struktur SEO yang baik

## Sections

1. **Navbar**: Logo, navigasi, language toggle, dark mode toggle, CTA button
2. **Hero**: Headline, subheadline, CTA buttons
3. **About**: Stats (100+ klien, 50+ proyek, 5+ tahun, 24/7 support)
4. **Services**: 4 kartu layanan (Web Development, Mobile Apps, Digital Strategy, UI/UX Design)
5. **Features**: 4 keunggulan perusahaan
6. **Testimonials**: 3 testimoni klien
7. **CTA**: Call to action WhatsApp
8. **Footer**: Links, kontak, social media
9. **WhatsApp Floating**: Button fixed di kanan bawah

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **i18n**: next-intl (Indonesia + English)
- **Fonts**: Google Fonts (Inter)
- **Deployment**: Vercel

## Warna

- **Primary**: Emerald Green (#10B981)
- **Dark Mode**: Default (gray-950 background)
- **Light Mode**: White background

## Struktur Folder

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── CTA.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── ThemeToggle.tsx
│   └── WhatsAppFloating.tsx
├── i18n/
│   ├── navigation.ts
│   ├── request.ts
│   └── routing.ts
└── messages/
    ├── en.json
    └── id.json
```

## Setup Lokal

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run lint
npm run lint
```

## Deployment

Project ini siap di-deploy ke Vercel:

1. Push ke GitHub repository
2. Import project di Vercel
3. Deploy otomatis dari GitHub

---

## Catatan Issue: Dark/Light Mode Toggle

### Status: ❌ BELUM BERFUNGSI DENGAN KONSISTEN

### Masalah
- Saat klik icon theme toggle di navbar, tema tidak berubah secara visual
- Ada masalah hydration mismatch antara server dan client
- Theme state tidak konsisten saat berganti halaman

### Penyebab Root
1. React SSR menghasilkan HTML berbeda dengan client-side render
2. next-intl dengan App Router menyebabkan kompleksitas pada theme handling
3. Tailwind CSS v4 dengan class-based dark mode memerlukan konfigurasi khusus
4. useState dalam useEffect memerlukan pendekatan berbeda

### Solusi yang sudah dicoba
1. ThemeContext dengan useState/useEffect - GAGAL
2. useLayoutEffect untuk inisialisasi theme - GAGAL
3. Mounted state untuk hydration - GAGAL
4. Standalone ThemeToggle component - GAGAL
5. Direct DOM manipulation - GAGAL
6. eslint-disable untuk setState dalam effect - BERHASIL (build passed)

### Perlu Investigasi Lebih Lanjut
- Mungkin perlu menggunakan library khusus seperti `next-themes`
- Atau menggunakan Tailwind darkMode: 'selector' dengan CSS variables
- Perlu testing lebih lanjut dengan environment production
- Consider menggunakan cookie-based theme handling

### Referensi Tambahan
- [next-themes](https://github.com/pacocoursey/next-themes) - Solusi yang sudah teruji untuk theme toggle di Next.js
- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)

---

## Lisensi

MIT License
