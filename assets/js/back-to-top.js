document.addEventListener("DOMContentLoaded", function() {
  var btn = document.querySelector('.back-to-top');

  // Smooth scroll to top
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    scrollToTop(1000); // Duración de la animación en milisegundos (por ejemplo, 1000 ms = 1 segundo)
  });

  // Smooth scrolling function
  function scrollToTop(duration) {
    const scrollHeight = window.scrollY,
          scrollStep = Math.PI / (duration / 15),
          cosParameter = scrollHeight / 2;
    var scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval(function() {
          if (window.scrollY !== 0) {
            scrollCount = scrollCount + 1;
            scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
            window.scrollTo(0, (scrollHeight - scrollMargin));
          } else clearInterval(scrollInterval);
        }, 15);
  }
});