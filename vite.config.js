import { defineConfig } from 'vite';

export default defineConfig({
  // Foto/video ada di public/ supaya disalin apa adanya, tanpa hashing.
  // Lightbox memasangkan <a href> dengan <img src>, dan Vite cuma menulis
  // ulang yang src — kalau di-hash, href-nya jadi menunjuk file yang tak ada.
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Bundle keluar ke /bundle, bukan /assets, biar tidak campur sama foto.
    assetsDir: 'bundle',
  },
});
