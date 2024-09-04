document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('#menu a');

    // Abre y cierra el menú al hacer clic en el icono
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    // Cierra el menú cuando se hace clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('show');
        });
    });
});
