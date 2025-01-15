const secciones = document.querySelectorAll('section');
secciones.forEach(seccion => {
    seccion.addEventListener('click', function () {
        secciones.forEach(seccion2 => seccion2.classList = "section not-expanded");
        this.classList = "section is-expanded";
    });

    const closeButton = seccion.querySelector('.cerrar-seccion');
    closeButton.addEventListener('click', function (event) {
        event.stopPropagation();
        secciones.forEach(section => {
            section.classList = "section";
        });
    });
});