document.addEventListener('DOMContentLoaded', function() {
    // Función para el menú desplegable (hamburguesa)
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('#menu a');

    //abre y cierra el menú al hacer clic en el icono
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    //cierra el menú cuando se hace clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('show');
        });
    });

    //funcionalidad de los colapsibles (Sobre mí, Proyectos, Contacto)
    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach((collapsible) => {
        collapsible.addEventListener('click', function() {
            this.classList.toggle('active');
            
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                //si el contenido está visible, colapsarlo
                content.style.maxHeight = null;
            } else {
                //si el contenido está oculto, expandirlo
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
