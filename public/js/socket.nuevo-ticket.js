// Comando para establecer la conexión
let socket = io();

let label = $('#lblNuevoTicket');

//Función que realiza la conexión permanente Cliente/Servidor
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

socket.on('estadoActual', function (resp) {
    label.text(resp.actual);
});


$('button').on('click', function () {
    // on = Escuchar información
    // emit = Enviar información
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});