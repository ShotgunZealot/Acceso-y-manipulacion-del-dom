document.addEventListener('DOMContentLoaded', function () {
    const fechas = document.querySelectorAll('.fecha');
    const horasDisponibles = document.getElementById('horas');
    const listaReservas = document.getElementById('lista-reservas');
    const reservas = [];

    fechas.forEach(function (fecha) {
        fecha.addEventListener('click', function () {

            fechas.forEach(function (fecha) {
                fecha.classList.remove('seleccionada');
            });
            fecha.classList.add('seleccionada');


            cargarHorasDisponibles(fecha.dataset.fecha);
        });
    });

    function cargarHorasDisponibles(fecha) {

        const horasDisponiblesParaFecha = [
            '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
        ];


        horasDisponibles.innerHTML = '';


        horasDisponiblesParaFecha.forEach(function (hora) {
            if (!reservaExistente(fecha, hora)) {
                const botonHora = document.createElement('button');
                botonHora.classList.add('hora');
                botonHora.textContent = hora;
                botonHora.addEventListener('click', function () {
                    reservar(fecha, hora);
                });
                horasDisponibles.appendChild(botonHora);
            }
        });
    }
    function reservaExistente(fecha, hora) {
        return reservas[fecha] && reservas[fecha].includes(hora);
    }
    function reservar(fecha, hora) {
        if (!reservaExistente(fecha, hora)) {
            const reserva = document.createElement('li');
            reserva.classList.add('reserva');
            reserva.textContent = fecha + ' a las ' + hora;

            listaReservas.appendChild(reserva);
            if (!reservas[fecha]) {
                reservas[fecha] = [];
            }
            reservas[fecha].push(hora);
        } else {
            alert('La hora seleccionada ya está reservada.');
        }
    }
});
