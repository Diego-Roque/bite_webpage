document.addEventListener('DOMContentLoaded', function() {
    // Crear el contenedor de la hamburguesa
    const hamburgerContainer = document.createElement('div');
    hamburgerContainer.className = 'container-burguer';

    // Crear las barras de la hamburguesa
    const bar1 = document.createElement('div');
    const bar2 = document.createElement('div');
    const bar3 = document.createElement('div');
    bar1.className = 'bar1';
    bar2.className = 'bar2';
    bar3.className = 'bar3';

    // Añadir las barras al contenedor de la hamburguesa
    hamburgerContainer.appendChild(bar1);
    hamburgerContainer.appendChild(bar2);
    hamburgerContainer.appendChild(bar3);

    // Insertar el contenedor de la hamburguesa en el navbar-container
    document.querySelector('.navbar-container').appendChild(hamburgerContainer);

    // Función para alternar el menú y la transformación de la hamburguesa
    hamburgerContainer.addEventListener('click', function() {
        hamburgerContainer.classList.toggle('change');
        document.querySelector('.navbar').classList.toggle('show');
    });
});
