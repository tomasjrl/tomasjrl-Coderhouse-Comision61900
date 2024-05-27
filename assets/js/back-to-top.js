document.addEventListener("DOMContentLoaded", function() {
  var btn = document.querySelector('.back-to-top');

  // Smooth scroll to top
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    scrollToTop(1000); // Duración de la animación en milisegundos (por ejemplo, 1000 ms = 1 segundo)
  });

  // Smooth scrolling function
  function scrollToTop(duration) {
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    function scroll() {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((now - startTime) / duration));
      window.scroll(0, Math.ceil((easeInOutQuad(time) * (0 - start)) + start));

      if (window.pageYOffset === 0) return;
      window.requestAnimationFrame(scroll);
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    window.requestAnimationFrame(scroll);
  }
});