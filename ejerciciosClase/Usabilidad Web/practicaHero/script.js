function mostrarTarjeta(num) {
    const tarjetas = document.querySelectorAll('.tarjeta');
    const botones = document.querySelectorAll('.botones button');
    const contenedor = document.querySelector('.contenedor');
    const texto = document.querySelectorAll('.texto h1, .texto h6, .texto p');

    // Colores para los textos de cada tarjeta
    const coloresTexto = {
        1: 'white', // Exploradores
        2: 'white', // Pioneros
        3: 'white'  // Rutas
    };

    // Ocultar todas las tarjetas
    tarjetas.forEach(tarjeta => {
        tarjeta.style.display = 'none';
        tarjeta.classList.remove('activa'); // Remueve la clase activa de todas las tarjetas
    });

    // Mostrar la tarjeta seleccionada
    const tarjetaSeleccionada = document.getElementById('tarjeta' + num);
    tarjetaSeleccionada.style.display = 'block';
    tarjetaSeleccionada.classList.add('activa'); // Agrega la clase activa a la tarjeta seleccionada

    // Remover la clase 'activo' de todos los botones
    botones.forEach(boton => boton.classList.remove('activo'));

    // Agregar la clase 'activo' al botón presionado
    botones[num - 1].classList.add('activo');

    // Remover clases de color anteriores
    contenedor.classList.remove('exploradores', 'pioneros', 'rutas');

    // Agregar la clase correspondiente a la tarjeta seleccionada
    if (num === 1) {
        contenedor.classList.add('exploradores');
    } else if (num === 2) {
        contenedor.classList.add('pioneros');
    } else if (num === 3) {
        contenedor.classList.add('rutas');
    }

    // Cambiar el color de los títulos y párrafos
    texto.forEach(elemento => {
        elemento.style.color = coloresTexto[num];
    });
}

// Asegurar que la primera tarjeta esté visible y su botón activo al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarTarjeta(1);
});
