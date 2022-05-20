(function(){
    var formulario = document.getElementsByName('formulario')[0],
        boton = document.getElementById('btn');

    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completa el campo nombre");
            e.preventDefault();
        }
    };

    var validarMail = function(e){
        if (formulario.mail.value == 0){
            alert('Completa el campo Email.');
            e.preventDefault();
        }
    };

    var validarMensaje = function(e){
        if (formulario.mensaje.value == 0) {
            alert('Complete el campo de texto.');
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarMail(e);
        validarMensaje(e);
    };
    formulario.addEventListener("submit", validar);
}())

