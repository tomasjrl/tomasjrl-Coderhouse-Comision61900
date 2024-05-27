document.getElementById('toggleMode').addEventListener('change', function() {
  document.body.classList.toggle('light-mode', this.checked);
});


document.addEventListener('DOMContentLoaded', function() {
  const toggleMode = document.getElementById('toggleMode');
  
  // Cargar el estado del checkbox desde localStorage
  const isChecked = localStorage.getItem('toggleModeState') === 'true';
  toggleMode.checked = isChecked;

  // Aplicar el modo correspondiente en base al estado del checkbox
  document.body.classList.toggle('light-mode', isChecked);

  // Añadir un event listener para guardar el estado y cambiar el modo cuando cambie el checkbox
  toggleMode.addEventListener('change', function() {
      const isChecked = this.checked;
      localStorage.setItem('toggleModeState', isChecked);
      document.body.classList.toggle('light-mode', isChecked);
  });
});