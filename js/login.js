let nombre = document.getElementById('usuario');
let contrasenia = document.getElementById('contrasenia');
let error = document.getElementById('error');
error.style.color = 'red';

function ingresar(){
    
    if (usuario.value === '' || contrasenia.value === '') {
      error.innerHTML = 'Ingresa tu usuario y contraseña.';
    } else {
    window.location.href = "login.html" 
    }
   
}

