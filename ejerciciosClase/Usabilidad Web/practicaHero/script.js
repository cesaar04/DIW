
function mostrarTarjeta(num) {
    const tarjetas = document.querySelectorAll('.tarjeta');
    tarjetas.forEach(tarjeta => tarjeta.style.display = 'none');

    const tarjetaSeleccionada = document.getElementById('tarjeta' + num);
    tarjetaSeleccionada.style.display = 'block';
}


mostrarTarjeta(1);