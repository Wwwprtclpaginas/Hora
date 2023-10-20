document.getElementById("generarHora").addEventListener("click", function() {
    var horaAleatoria = generarHoraAleatoria();
    document.getElementById("horaGenerada").innerHTML = horaAleatoria;
});

function generarHoraAleatoria() {
    var hora = Math.floor(Math.random() * 10) + 9; // Generar hora entre 9 y 18
    var minutos = Math.floor(Math.random() * 60); // Minutos entre 0 y 59
    var segundos = Math.floor(Math.random() * 60); // Segundos entre 0 y 59
    return hora + ":" + (minutos < 10 ? "0" : "") + minutos + ":" + (segundos < 10 ? "0" : "") + segundos;
}

