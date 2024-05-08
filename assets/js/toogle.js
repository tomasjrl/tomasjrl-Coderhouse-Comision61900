document.addEventListener('DOMContentLoaded', function() {
  const toggleMode = document.getElementById('toggleMode');

  // Cambiar el modo y almacenar en sessionStorage
  toggleMode.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark-mode');
      sessionStorage.setItem('mode', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      sessionStorage.setItem('mode', 'light');
    }
  });

  // Recuperar el estado del modo almacenado en sessionStorage
  const mode = sessionStorage.getItem('mode');
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
    toggleMode.checked = true;
  }
});