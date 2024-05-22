function configurarCookies() {
    // Obtiene el dominio actual
    const domain = window.location.hostname;
    
    // Imprime el dominio en la consola para verificar
    console.log("Dominio actual:", domain);

    // Configura la cookie para tu dominio actual con atributos apropiados
    document.cookie = `example_cookie=value; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/; domain=${domain}; secure; samesite=Lax`;
}

// Llama a la función para configurar las cookies cuando se cargue la página
configurarCookies();
