let nombre = document.getElementById('usuario');
let contrasenia = document.getElementById('contrasenia');
let error = document.getElementById('error');
error.style.color = 'red';

function ingresar(){
    
    if (usuario.value === '' || contrasenia.value === '') {
      error.innerHTML = 'Ingresa tu usuario y contraseña.';
    } else {
      localStorage.setItem("Usuario", nombre.value)
      
// obtengo la info del usuario del local storage
      let infoUsuario = localStorage.getItem("InfoUsuario")
      // si el objeto no existe lo creo y si existe solo sobreescribo el valor del email.
      if (infoUsuario == null) {
        infoUsuario = {email:nombre.value, nombre:"", segundoNombre:"", apellido:"", segundoApellido:"", telefono:null}
      } else {
       infoUsuario = JSON.parse(infoUsuario)
        infoUsuario.email = nombre.value
      }
      //Lo guardo en el local storage.
      localStorage.setItem("InfoUsuario", JSON.stringify(infoUsuario))
    window.location.href = "login.html" 
    }
   
}

function cerrarSesion(){
  localStorage.setItem("Usuario", null)
    window.location.href = "index.html" 
}





