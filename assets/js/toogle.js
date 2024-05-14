document.addEventListener('DOMContentLoaded', function() {
  const toggleMode = document.getElementById('toggleMode');

  // Cambiar el modo y almacenar en localStorage
  toggleMode.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('mode', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('mode', 'light');
    }
  });

  // Recuperar el estado del modo almacenado en localStorage
  const mode = localStorage.getItem('mode');
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
    toggleMode.checked = true;
  }
});