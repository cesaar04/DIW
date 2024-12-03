var auxCarta = null;
var aciertos = 0;
var fallos = 0;
var intentos = 0;
function girarCarta(cartaGirada){
    // if (!cartaGirada.classList.contains('girada')){
        cartaGirada.classList.toggle('girada');
        setTimeout(comparar,2000,cartaGirada);
    // } 
}

function comparar(carta2) {

    if (auxCarta == null) {
        auxCarta = carta2;
    } else {
        if (auxCarta.id == carta2.id) {
            aciertos++;
            intentos++;
        } else {
            auxCarta.classList.remove("girada");
            carta2.classList.remove("girada");
            fallos++;
            intentos++;
        }
        auxCarta = null;
    }

    if (aciertos == 3) {
    console.log(`Aciertos: ${aciertos}`);
    console.log(`Fallos: ${fallos}`);
    console.log(`Intentos: ${intentos}`);
    }
}

