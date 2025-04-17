let carrusel = document.getElementById('carrusel');
    let indice = 0;
    const totalBloques = 2; // Solo hay 2 bloques

    function moverCarrusel(direccion) {
      const bloques = document.querySelectorAll('.carrusel-bloque');
      
      // Eliminar la clase 'active' de todos los bloques
      bloques.forEach(bloque => {
        bloque.classList.remove('active');
      });

      // Cambiar el índice según la dirección
      indice += direccion;

      // Corregir el índice
      if (indice < 0) {
        indice = 0; // No deja ir al bloque anterior del 1
      }
      if (indice >= totalBloques) {
        indice = totalBloques - 1; // No deja pasar al bloque 3
      }

      // Añadir la clase 'active' al bloque correspondiente
      bloques[indice].classList.add('active');
    }