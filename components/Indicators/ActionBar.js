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
    setInterval(function () {
        barra.value += 1
    }, 25);
}