# Cubiq Padel Microsite

Buka `index.html` langsung di browser, atau jalankan `python3 -m http.server 5500`.
Deploy: drag folder ini ke Netlify Drop (app.netlify.com/drop) atau `vercel` di folder ini.

## Hero — footage yang dibutuhkan

Hero pakai 3 klip ambient yang crossfade otomatis (5.5s dwell, 700ms fade). File belum ada — taruh di `assets/` dengan nama persis:

- `hero-01-rally.mp4` + poster `assets/hero.jpg` (sudah ada) — aksi rally di lapangan
- `hero-02-court.mp4` — interior / kaca panoramic (poster fallback: `assets/galeri.jpg`)
- `hero-03-coffee.mp4` — suasana coffee shop (poster fallback: `assets/kopi.jpg`)

**Aturan framing wajib:** sisi kiri frame (±46% lebar, di layar besar object-position digeser ke `78% 32%` supaya subjek condong kanan) harus kosong / low-detail di ketiga klip — di situ headline dan CTA duduk. Jangan taruh wajah, teks, atau elemen ramai di kiri frame. Encode ≤2MB per klip, muted, tanpa audio penting (video di-mute otomatis).

Selama file mp4 belum ada, hero otomatis fallback ke foto still (`hero.jpg` / `galeri.jpg` / `kopi.jpg`) — situs tetap berfungsi penuh.
