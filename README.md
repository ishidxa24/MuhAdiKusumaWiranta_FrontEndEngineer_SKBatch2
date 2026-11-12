# Role Explorer – Sekolah Karir Batch 2

Mini assignment Front-End Engineer: komponen untuk memfilter role berdasarkan department.

- **Demo:** [link Vercel]
- **Desain (Figma):** [https://www.figma.com/design/eYRj9VLZ6IkxGfcAAhUDRd/Test_Sekolah_Karir?node-id=0-1&t=QJMdnOhLmZ6Xz6pp-1]

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Fitur
- User bisa memfilter role berdasarkan department
- Setiap tombol filter menampilkan jumlah role di department tersebut
- User bisa membuka dan menutup deskripsi role lewat tombol “Lihat detail”
- Tombol “Reset filter” muncul saat filter aktif, untuk kembali ke semua role
- Tiga tampilan: semua role (default), hasil filter, dan empty state saat department belum punya role

## Struktur

```
src/
├── components/
│   ├── FilterChips.jsx   # tombol filter department
│   ├── RoleCard.jsx      # kartu satu role
│   └── EmptyState.jsx    # tampilan saat hasil kosong
├── data/
│   └── roles.js          # data mock (DEPARTMENTS + ROLES)
├── App.jsx               # state filter dan logika penyaringan
├── App.css               # style komponen
└── index.css             # warna (CSS variables), font, reset
```

## Keputusan
- Kode dipisah menjadi beberapa komponen (FilterChips, RoleCard, EmptyState). App.jsx menjadi pusat yang menyimpan pilihan filter, sedangkan komponen lain hanya menampilkan data dan melaporkan klik ke App.
- Data role disimpan terpisah di roles.js dan dipakai oleh App. Kalau nanti data diambil dari API, cukup file ini yang diganti tanpa mengubah komponen.

## Aksesibilitas
- Lihat detail” diberi aria-label berisi nama role sebagai penanda, supaya pengguna screen reader tahu tombol itu milik role yang mana.
- Tombol filter diberi aria-pressed sebagai penanda, supaya pengguna screen reader tahu filter mana yang sedang aktif.
- Memakai elemen HTML yang sesuai fungsinya, seperti '<main>' untuk isi utama halaman, '<header>' untuk judul dan subjudul, dan '<article>' untuk setiap kartu, supaya screen reader memahami struktur halaman.

## Asumsi dan batasan
- Wireframe tidak terlampir di brief, jadi saya membuat wireframe dan desain sendiri di Figma
- Semua posisi dan datanya hanya contoh (mock), bukan lowongan asli, sesuai aturan di brief.
- Tidak ada tombol lamar, karena tidak diminta di brief dan tugas ini tidak memakai backend.
- Lihat detail” hanya menampilkan penjelasan singkat posisi di dalam kartu, tanpa halaman detail terpisah.

## Pemakaian AI
Saya masih belajar React, jadi proyek ini saya kerjakan sambil belajar dengan bantuan AI.

- **Claude (Anthropic):**
  - Menyusun wireframe dan desain hi-fi di Figma berdasarkan arahan saya (saya yang memilih font dan menyetujui arah desainnya).
  - Menjelaskan konsep React langkah demi langkah (komponen, props, state, `.map`, `.filter`), lalu saya menulis kodenya sendiri mengikuti penjelasan tersebut.
  - Mengecek kode saya dan menunjukkan kesalahan.
  - Beberapa bagian saya salin langsung karena belum sepenuhnya paham: data mock di `roles.js`, sebagian besar CSS, dan versi lengkap beberapa file saat memperbaiki error. Bagian-bagian ini kemudian saya pelajari lagi supaya bisa saya jelaskan.