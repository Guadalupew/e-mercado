document.addEventListener("DOMContentLoaded", function () {
    completarPerfil()
});
/*Cuando se cargar la página, se obtienen del local storage el objeto de la info del 
usuario y se completan los input a partir de ellos*/

function completarPerfil() {
    let infoUsuario = JSON.parse(localStorage.getItem("InfoUsuario"))
    document.getElementById("mail").value = infoUsuario.email;
    document.getElementById("nombre").value = infoUsuario.nombre;
    document.getElementById("nombre2").value = infoUsuario.segundoNombre;
    document.getElementById("apellido").value = infoUsuario.apellido;
    document.getElementById("apellido2").value = infoUsuario.segundoApellido;
    document.getElementById("telefono").value = infoUsuario.telefono;
    

    
}
/* obtengo todos los valores de los input, si los campos obligatorios no estan completos, 
arroja alerta de error. Si los campos estan completos actualiza la info del usuario en local storage*/

function guardarPerfil() {
   let mail = document.getElementById("mail").value 
    let nombre = document.getElementById("nombre").value 
   let nombre2 = document.getElementById("nombre2").value 
    let apellido = document.getElementById("apellido").value
    let apellido2 = document.getElementById("apellido2").value
   let telefono = document.getElementById("telefono").value 
    if (mail == "" || nombre == "" || apellido == "" ) {
        alert ("Datos incompletos")
        
    } else {
        let infoUsuario = JSON.parse(localStorage.getItem("InfoUsuario"))
        infoUsuario.mail = mail
        infoUsuario.nombre = nombre
        infoUsuario.segundoNombre = nombre2
        infoUsuario.apellido = apellido
        infoUsuario.segundoApellido = apellido2
        infoUsuario.telefono = telefono
        localStorage.setItem ("InfoUsuario",JSON.stringify(infoUsuario)) 
        alert ("Guardado con éxito")


    }
}

