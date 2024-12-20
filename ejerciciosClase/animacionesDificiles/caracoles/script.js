var bola = document.querySelectorAll('.bola');
var btn =  document.querySelector('.btn');
var mov1 = 0;
var mov2 = 0;
var mov3 = 0;
console.log(bola[0]);
console.log(bola[1]);
console.log(bola[2]);


function moverCaracol() {
    var bola1 = Math.floor(Math.random() * 10);
    var bola2 = Math.floor(Math.random() * 10);
    var bola3 = Math.floor(Math.random() * 10);

    mov1 += bola1;
    mov2 += bola2;
    mov3 += bola3;

    bola[0].style.left = `${mov1}vw`;
    bola[1].style.left = `${mov2}vw`;
    bola[2].style.left = `${mov3}vw`;

    if (mov1 >= 80) {
        bola[0].previousElementSibling.style.opacity = 1;
        btn.disabled = true;
    }
    if (mov2 >= 80) {
        bola[1].previousElementSibling.style.opacity = 1;
        btn.disabled = true;
    }

    if (mov3 >= 80) {
        bola[2].previousElementSibling.style.opacity = 1;
        btn.disabled = true;
    }


}