document.addEventListener('DOMContentLoaded', function() {
    const opciones = document.querySelectorAll('#opciones button');
    const resultados = {};

    opciones.forEach(function(opcion) {
        opcion.addEventListener('click', function() {
            const color = opcion.dataset.color;
            if (!resultados[color]) {
                resultados[color] = 0;
            }
            resultados[color]++;
            console.log(color+': '+resultados[color])
            actualizarResultados();
        });
    });

    function actualizarResultados() {
        for (let color in resultados) {
            const resultadoElemento = document.querySelector('#resultado-' + color + ' span');
            resultadoElemento.textContent = resultados[color];
        }
    }
});