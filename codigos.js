function validariniciosesion() {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    if (usuario === "" || contraseña === "") {
        alert("Por favor, llene todos los campos del formulario.");
        return false;
    } else {
        if (usuario === "carlos") {
            if (contraseña === "123456") {
                window.location.href = "Pag2.html";
                return true;
            } else {
                alert("Contraseña incorrecta");
                return false;
            }
        } else {
            alert("Usuario no registrado");
            return false;
        }
    }
}   

function FondoColor(color) {
    if (color === 'white') {
        document.body.style.backgroundImage = 'none'; // Elimina cualquier imagen de fondo
        document.body.style.backgroundColor = 'white'; // Establece el color de fondo a blanco
    } else if (color === 'oscuro') {
        document.body.style.backgroundImage = 'none'; 
        document.body.style.backgroundColor = '#2A0B1A'; 
    }
}

// Función para cambiar el fondo del body a una imagen
function FondoImagen() {
    document.body.style.backgroundImage = "url('Imagenes/fondo1.jpg')";
    document.body.style.backgroundSize = "cover";
}

document.getElementById('copiartexto').addEventListener('click', function(event) {
   var TextoEs = this.getAttribute('data-text')
   navigator.clipboard.writeText(TextoEs);
});

document.getElementById('copiartexto2').addEventListener('click', function(event) {
    var TextoEs = this.getAttribute('data-text')
    navigator.clipboard.writeText(TextoEs);
 });