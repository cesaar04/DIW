var bola = document.querySelectorAll('.bola');

function orange() {
    bola.forEach(element => {
        element.style.backgroundColor = "orange";
        element.style.boxShadow = "0px 0px 40px orange";
    });
}
function red() {
    bola.forEach(element => {
        element.style.backgroundColor = "red";
        element.style.boxShadow = "0px 0px 40px red";
    });
}
function white() {
    bola.forEach(element => {
        element.style.backgroundColor = "white";
        element.style.boxShadow = "0px 0px 40px white";
    });
}