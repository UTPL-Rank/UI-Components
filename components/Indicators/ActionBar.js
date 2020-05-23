function cargar() {
    var barra = document.getElementById('default')
    barra.value += 1
}
function cargarPrim() {
    var barra = document.getElementById('primary')
    barra.value += 1
}
function cargarSecondary() {
    var barra = document.getElementById('secondary')
    barra.value += 1
}



function loadProgressBar(id) {
    var barra = document.getElementById(id)
    barra.value = 0;
    var incremento = setInterval(function () {
        barra.value += 1
    }, 25);

    setTimeout(function () {
        clearInterval(incremento)
    }, 5000)
}