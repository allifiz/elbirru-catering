# Elbirru Catering — Design Preview
Konsep redesign oleh SangkaraKarya. Bukan website resmi. Harga, foto stok, komposisi paket dan estimasi adalah ilustrasi untuk presentasi; konfirmasi dengan Elbirru sebelum publikasi produksi. Logo adalah konsep sementara, bukan logo resmi.
## Development
```sh
npm install
node scripts/assets.mjs
npm run dev
npm run build
```
Next.js App Router, React, TypeScript, Tailwind CSS, CSS design system, Framer Motion, Lucide. Data terpisah di data/catalog.ts; dapat diganti dengan Laravel API. Tidak ada database, pengiriman pesanan otomatis, atau pembayaran. Planner hanya membuat simulasi dan menyediakan salin pesan. Tautan WhatsApp membuka draft secara manual.
## Assets
Foto ilustrasi dari Unsplash (ID dan URL tercantum pada data/catalog.ts dan scripts/assets.mjs). Script build menyimpan foto ke public/images; jika tidak tersedia, browser mencoba URL stok, kemudian gambar fallback lokal. Logo konsep dan pola SVG lokal dibuat khusus. Tidak ada foto stok yang diklaim sebagai dokumentasi Elbirru. Sebelum produksi, ganti dengan foto yang disetujui klien dan periksa lisensi. 
Preview memakai noindex/nofollow.
