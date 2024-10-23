document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.getElementById("splash-screen");

    // Ambil timestamp dari localStorage
    const lastVisit = localStorage.getItem('lastVisit');

    // Cek jika tidak ada lastVisit atau jika sudah lebih dari 24 jam (86400000 ms)
    if (!lastVisit || (Date.now() - lastVisit) > 86400000) {
        splashScreen.classList.remove('hide'); // Tampilkan splash screen
        setTimeout(() => {
            splashScreen.classList.add('hide'); // Sembunyikan setelah beberapa detik
            setTimeout(() => {
                splashScreen.style.display = "none"; // Sembunyikan sepenuhnya setelah transisi
                localStorage.setItem('lastVisit', Date.now()); // Simpan timestamp kunjungan
            }, 500); // Durasi transisi
        }, 5000); // Tampilkan selama 2 detik
    } else {
        splashScreen.style.display = "none"; // Langsung sembunyikan jika sudah pernah
    }
});