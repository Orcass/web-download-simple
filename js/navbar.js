let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah
    navbar.style.top = '-80px'; // Sesuaikan nilai dengan tinggi navbar
  } else {
    // Scroll ke atas
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop;
});
