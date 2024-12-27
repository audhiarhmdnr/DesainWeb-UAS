# Dokumentasi Website Edukasi Lingkungan

## Tujuan Website
Website ini bertujuan untuk meningkatkan kesadaran masyarakat tentang pentingnya menjaga kelestarian lingkungan melalui edukasi dan interaksi yang menarik. Pengguna dapat belajar mengenai isu lingkungan, berpartisipasi dalam kuis edukatif, membaca dokumentasi terkait langkah-langkah pelestarian lingkungan, serta melihat visi dan misi program ini.

## Komponen Bootstrap yang Digunakan
- **Navbar:** Untuk navigasi antar halaman utama seperti halaman kuis, donasi, visi dan misi, serta dokumentasi.
- **Carousel:** Menampilkan gambar dan informasi penting terkait lingkungan secara interaktif di halaman utama.
- **Progress Bar:** Menunjukkan progress pencapaian target kampanye lingkungan.
- **Modal:** Menampilkan pesan konfirmasi atau informasi setelah aksi dilakukan, seperti menyelesaikan kuis atau melakukan donasi.
- **Card:** Menyusun informasi seperti tips menjaga lingkungan dalam format yang terorganisir dan menarik.
- **Button:** Digunakan untuk tombol aksi, seperti submit pada halaman donasi atau kuis.

## Fitur Utama yang Berhasil Diimplementasikan
1. **Fitur Donasi Lingkungan:**
   - Pengguna dapat memberikan donasi untuk mendukung program pelestarian lingkungan.
   - Sistem akan menampilkan progress penggalangan dana menggunakan progress bar.
   - Modal digunakan untuk konfirmasi donasi berhasil.
2. **Halaman Edukasi:**
   - Berisi informasi tentang isu-isu lingkungan, dampak pencemaran, dan langkah-langkah pelestarian.
3. **Kuis Interaktif:**
   - Halaman kuis untuk menguji pemahaman pengguna tentang lingkungan, disertai umpan balik edukatif.
4. **Informasi Visi dan Misi:**
   - Penjelasan tentang tujuan program lingkungan dan langkah konkret yang diambil.
5. **Halaman Dokumentasi:**
   - Menyediakan panduan penggunaan website dan informasi tentang fitur yang tersedia.

---

## Penjelasan Setiap Halaman

### 1. `index.html`
Halaman utama website yang menyambut pengguna. Menggunakan carousel untuk menampilkan informasi utama terkait program lingkungan. Berisi pengantar singkat tentang tujuan website dan link ke halaman lainnya.

### 2. `quiz.html`
Halaman kuis interaktif untuk mengedukasi pengguna tentang isu lingkungan. Menggunakan elemen form Bootstrap untuk input jawaban, dan memberikan umpan balik setelah selesai.

### 3. `donasi.html`
Halaman untuk memberikan donasi bagi program pelestarian lingkungan. Berisi:
- Form input untuk jumlah donasi.
- Progress bar yang menampilkan total donasi yang telah terkumpul.
- Modal Bootstrap untuk notifikasi setelah donasi berhasil dilakukan.

### 4. `visimisi.html`
Halaman yang menjelaskan visi dan misi program lingkungan. Menggunakan grid dan card Bootstrap untuk menyajikan informasi dengan rapi dan mudah dipahami.

### 5. `dokumentasi.html`
Halaman dokumentasi yang memberikan informasi tentang cara kerja website, fitur-fitur yang disediakan, serta tujuan dari setiap komponen.

### 6. `script.js`
Script JavaScript untuk mengatur logika dan interaksi pada website, khususnya pada fitur donasi. 
- **Fungsi Utama:**
  - Memproses input donasi dari pengguna.
  - Memperbarui progress bar berdasarkan total donasi terkumpul.
  - Menampilkan modal konfirmasi setelah donasi berhasil dilakukan.
- **Validasi Input:**
  - Memastikan jumlah donasi yang dimasukkan valid (angka positif).
- **Interaksi dengan Bootstrap:**
  - Mengontrol tampilan modal dan progress bar.

