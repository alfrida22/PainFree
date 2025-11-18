PainFree adalah aplikasi berbasis web yang membantu mendeteksi tingkat nyeri pada anak melalui analisis ekspresi wajah. Sistem ini dikembangkan menggunakan React.js, face-api.js, Express.js, dan MySQL, serta dilengkapi fitur intervensi non-farmakologi berupa distraksi dan relaksasi untuk membantu anak mengelola nyeri dengan cara yang menyenangkan.

Fitur Utama
1. Deteksi Ekspresi Wajah
Menggunakan face-api.js untuk membaca ekspresi wajah anak
Sistem mengklasifikasikan tingkat nyeri berdasarkan ekspresi
Hasil deteksi otomatis diarahkan ke halaman intervensi sesuai tingkat nyeri

2. Intervensi Distraksi & Relaksasi
Nyeri ringan–sedang → animasi video relaksasi, game puzzle
Nyeri berat → animasi video relaksasi, game puzzle, dan saran untuk penanganan lebih lanjut
File intervensi berupa: game puzzle dan video animasi relaksasi

3. Penyimpanan Hasil Deteksi
Backend (Express.js) menyimpan hasil deteksi ke database MySQL

4. Sistem Lock Level untuk Game
Tersedia game puzzle sebagai distraksi
Level awal terbuka otomatis
Level berikutnya akan unlock setelah pengguna menyelesaikan level sebelumnya

5. Autentikasi & Session Login
Login menggunakan Express-session
Role sederhana (user/admin)
Akses fitur tertentu dilindungi
