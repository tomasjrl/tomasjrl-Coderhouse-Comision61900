document.addEventListener('DOMContentLoaded', function () {
  const lazyLoadElements = document.querySelectorAll('.fade-in, .lazy-load-map');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              if (entry.target.classList.contains('lazy-load-map')) {
                  entry.target.src = entry.target.dataset.src;
              } else {
                  entry.target.classList.add('active');
              }
              observer.unobserve(entry.target);
          }
      });
  });

  lazyLoadElements.forEach(element => {
      observer.observe(element);
  });
});
