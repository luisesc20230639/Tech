const formulario = document.getElementById(`formularioContacto2`);
const enviarBtn = document.getElementById(`enviarBtn`);

formulario.addEventListener(`submit`, function(event){
    event.preventDefault();

    const nombreInput = document.getElementById(`nombre`);
    const nombreValor = nombreInput.value;
    const mensaje = document.getElementById("mensaje");
    const mensajeValor = mensaje.value;
    const correo = document.getElementById("correo");
    const correoValor = correo.value;

    Swal.fire({
        icon: `success`,
        title: `¡Formulario enviado!`,
        text: `Gracias por tu comentario ${nombreValor}, Tu mensaje ha sido enviado correctamente.`,
    });

    formulario.reset();
})