var rotacionAcumulada = 0;

const ruleta = document.querySelector('.ruleta img');

function girar() {
    
    const vueltas = Math.floor(Math.random() * 5) + 1;
    console.log(vueltas);

    const grados = Math.floor(Math.random() * 360) + 360 * vueltas;
    console.log(grados);

    rotacionAcumulada += grados;

    document.documentElement.style.setProperty('--rotacion', `${rotacionAcumulada}deg`);
}