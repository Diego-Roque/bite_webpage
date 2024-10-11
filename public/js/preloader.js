window.onload = function() {
    const preloader = document.getElementById('preloader');
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');

    // Revisa si es la primera vez que el usuario visita la página
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
        // Si es la primera vez, muestra el preloader y configura el localStorage
        localStorage.setItem('hasVisited', 'true');

        video1.onended = function() {
            video1.classList.add('hidden');
            video2.classList.remove('hidden');

            video2.oncanplaythrough = function() {
                video2.play();
            };

            video2.onended = function() {
                preloader.classList.add('hidden');
            };
        };

        setTimeout(() => {
            video1.classList.add('hidden');
            video2.classList.remove('hidden');

            video2.oncanplaythrough = function() {
                video2.play();
            };

            video2.onended = function() {
                preloader.classList.add('hidden');
                video2.classList.add('hidden');
            };
        }, 3000);
    } else {
        // Si el usuario ya ha visitado la página antes, oculta el preloader inmediatamente
        preloader.classList.add('hidden');
    }
};
