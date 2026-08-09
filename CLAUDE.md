# Cubiq Coffee & Padel — Microsite

Single-page microsite untuk Cubiq Coffee & Padel (Boyolali). Vanilla HTML/CSS/JS, satu file `index.html`, tanpa build step. Font Google (Anton + Inter), tema gelap + aksen hijau brand. Toggle bahasa ID/EN, animasi hero, modal, section event per-bulan.

## Data resmi (jangan diubah tanpa konfirmasi)
- Nama: Cubiq Coffee & Padel
- Lokasi: Jl. Merdeka Barat, Komp. Perkantoran, Kemiri, Kec. Mojosongo, Kab. Boyolali, Jawa Tengah 57482
- Jam: 06.00–00.00 (Google). Catatan: IG menyebut 06.00–02.00 — KONFIRMASI ke owner.
- Booking: AYO → https://link.ayo.co.id/l/YWuzoY9fmk-Cubiq-Padel (venue: https://ayo.co.id/v/cubiq-padel)
- Harga: mulai Rp 125.000/sesi (AYO). Tarif per slot beda per jam/hari — hanya muncul di app AYO.
- Lapangan: 2 — "Cubiq Pink" & "Cubiq Black", super-panoramic, tinggi 12m.
- Bonus tiap booking: 2 botol air mineral 240ml.
- WhatsApp admin: +62 853 8579 6113 → https://wa.me/6285385796113
- Instagram: https://www.instagram.com/cubiqpadel/
- Google Maps: https://maps.app.goo.gl/bvyvxbq3ACqpZ1mb7
- Rating: AYO 4.93 (23) · Google 4.4 (138)
- Warna brand: hijau & cream
- Fasilitas (AYO): Cafe & Resto, Wi-Fi, Hot Shower, Ruang Ganti, Parkir Mobil & Motor, Tribun Penonton, Musholla, Toilet

## Struktur
- index.html — seluruh markup, style (dalam <style>), dan script (dalam <script>)
- assets/hero.jpg — foto hero (dulu base64, sudah diekstrak)

## Konvensi
- i18n: elemen pakai atribut data-i="key"; teksnya di objek `T` (array [ID, EN]). Tambah teks baru: isi T lalu pasang data-i.
- Event: objek `EVENTS` dengan key 'YYYY-M' (bulan 1–12), tiap item {day,title,time,desc}. Kosong = tampil "Belum ada event".
- Modal "menu belum bisa diakses": openModal()/closeModal().

## TODO
1. Galeri: ganti 6 placeholder dengan foto asli (ada 9 foto di halaman AYO).
2. Konfirmasi jam buka (00.00 vs 02.00) ke owner.
3. Kalau owner kasih tarif per slot resmi, ganti kartu harga jadi tier per jam/hari.
4. Section coffee: hubungkan "Lihat menu digital" ke menu digital asli saat siap (sekarang buka modal).
5. Tambah nuansa cream sesuai brand (opsional).
6. Deploy ke Vercel/Netlify (drag & drop folder) → jadikan link pengganti di bio IG.

## Preview lokal
python3 -m http.server 5500   # lalu buka http://localhost:5500
