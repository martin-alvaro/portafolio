$(document).ready(function () {
    $('#miFormulario').submit(function (e) {
        e.preventDefault();

        const nombre = $('#nombre').val();
        const correo = $('#correo').val();
        const mensaje = $('#mensaje').val();

        if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
            alert('Por favor, completa todos los campos del formulario.');
            return; 
        }

        $('#nombre').val('');
        $('#correo').val('');
        $('#mensaje').val('');
    });
});
