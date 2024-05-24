# Notas y comentarios 

- Creado notes.md para comentar cambios y problemas encontrados.


**ACTUALIZACIONES COMENTADAS**

# CARACTERISTICAS SEO ##
- imagenes webp
- imagenes ajustadas en tamaño
- ancho/alto declarados
- metadescription declarado
- title declarado
- lazyload para contenidos secundarios
- preload para contenidos primarios
- aria-label para links

## W3C =  https://validator.w3.org/  ##
- confirmado archivos html sin errores


## GoogleSpeed Insights = https://pagespeed.web.dev  ##
- Aplicadas recomendaciones anunciadas, los resultados obtenidos actualmente son:

**index.html**
*Mobile*
- 74 Rendimiento 
- 100 Accesibilidad  
- 100 Prácticas recomendadas  
- 100 SEO  

*Desktop*
- 97 Rendimiento 
- 100 Accesibilidad  
- 100 Prácticas recomendadas  
- 100 SEO


**piano.html**
*Mobile*
- 74 Rendimiento 
- 100 Accesibilidad  
- 100 Prácticas recomendadas  
- 100 SEO  

*Desktop*
- 85 Rendimiento 
- 100 Accesibilidad  
- 100 Prácticas recomendadas  
- 100 SEO

**canto.html**
*Mobile*
- 78 Rendimiento 
- 100 Accesibilidad  
- 100 Prácticas recomendadas  
- 100 SEO  

*Desktop*
- 98 Rendimiento 
- 100 Accesibilidad  
- 100 Prácticas recomendadas  
- 100 SEO

**violin.html**
*Mobile*
- 81 Rendimiento 
- 100 Accesibilidad  
- 100 Prácticas recomendadas  
- 100 SEO  

*Desktop*
- 88 Rendimiento 
- 100 Accesibilidad  
- 100 Prácticas recomendadas  
- 100 SEO   

**contacto.html**
*Mobile*
- 87 Rendimiento 
- 100 Accesibilidad  
- 100 Prácticas recomendadas  
- 100 SEO  

*Desktop*
- 99 Rendimiento 
- 100 Accesibilidad  
- 100 Prácticas recomendadas  
- 100 SEO   




**CODIGO A REVISAR**

## en sass / global / _animaciones.scss ##

```
@keyframes show {
  from {
    opacity: 0;
    scale: 25%; // deberia ir " transform: scale(0.25);" pero no se aplica en elementos h p img (puede verse este fallo visible en canto/piano/violin.html usando navegador chrome) . Creo que se superpone con otra declaración de animación pero aun no lo encuentro.
  }
  to {
    opacity: 1;
    scale: 100%; // deberia ir " transform: scale(1);" pero no se aplica en elementos h p img (puede verse este fallo visible en canto/piano/violin.html usando navegador chrome) . Creo que se superpone con otra declaración de animación pero aun no lo encuentro.
  }
} 
```




