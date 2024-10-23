// Fungsi untuk menampilkan pengumuman
function showAnnouncement() {
    var announcement = document.getElementById('announcement');
    announcement.classList.add('show');
    announcement.classList.remove('hidden'); // Menghapus kelas hidden saat ditampilkan
}

// Fungsi untuk menutup pengumuman
function closeAnnouncement() {
    var announcement = document.getElementById('announcement');
    announcement.classList.remove('show'); // Hapus kelas show
    announcement.classList.add('hidden'); // Tambahkan kelas hidden
}

// Menentukan waktu untuk menampilkan pengumuman
function displayAnnouncementRandomly() {
    // Menghasilkan waktu acak antara 30 detik dan 60 detik
    var randomDelay = Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000; // Antara 30-60 detik
    setTimeout(showAnnouncement, randomDelay);
}

// Panggil fungsi untuk menampilkan pengumuman secara acak setelah website dimuat
window.onload = displayAnnouncementRandomly;
