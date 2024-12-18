function nevar() {
    const copos = document.querySelector('.copos');
    copos.classList.add('copos2');
    setTimeout(eliminarClase,8000,2000);
}

function eliminarClase() {
    let aux = document.querySelector('.copos2');
    aux.classList.remove("aux");
}