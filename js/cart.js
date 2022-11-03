var currency = null;
var subtotal = 0;
var costoEnvio = 0;

//Evento que se corre cuando se carga la página
document.addEventListener("DOMContentLoaded", function () {
    getJSONData(CART_INFO_URL + "25801.json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            userCart = resultObj.data;
            listarArticulos(userCart.articles)
            
        }
    })

});

//Función que muestra la información del producto.
function listarArticulos(articulos) {
    let articlesHTML = ""
    for (let articulo of articulos) {
        currency = articulo.currency
        subtotal = articulo.unitCost * articulo.count
        articlesHTML += `
        <tr>
            <td style="border:solid; max-width:25px; max-height:25px;"><img src="${articulo.image}" class="img-thumbnail"></td>
            <td style="border:solid;">${articulo.name}</td>
            <td style="border:solid;">${articulo.currency} ${articulo.unitCost}</td>
            <td style="border:solid;">  <input min="1" type="number" onchange="calcularSubtotal(event,${articulo.unitCost})" value="${articulo.count}"></td>
            <td style="border:solid;" id="subtotal">${articulo.currency} ${subtotal}</td>
          </tr>

        `;
    }
    document.getElementById("articulos").innerHTML += articlesHTML;
    actualizarCostos();
}

function calcularSubtotal(event, unitCost) {
    subtotal = event.target.value * unitCost;
    let nuevoSubtotal = `
    <td style="border:solid;" id="subtotal">${currency} ${subtotal}</td>
    `
    document.getElementById("subtotal").innerHTML = nuevoSubtotal
    actualizarCostos();
}

function actualizarCostos() {
    let porcentajesEnvio = document.getElementsByName("radio");
    for (seleccionado of porcentajesEnvio) {
        if (seleccionado.checked) {
            costoEnvio = parseFloat(seleccionado.value)
        }
    }
    let envío = costoEnvio * subtotal / 100;
    let total = subtotal + costoEnvio * subtotal / 100;
    document.getElementById("suma-subtotales").innerHTML = currency + " " + subtotal;
    document.getElementById("costo-envío").innerHTML = currency + " " + envío;
    document.getElementById("total").innerHTML = currency + " " + total;
}

(function () {
    'use strict'
  var nTarjeta = document.getElementById('tarjetaDeCredito');
  var nCuenta = document.getElementById('transfBancaria');


    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            alert ("Datos incompletos")
          }
  
          form.classList.add('was-validated')
          if (form.checkValidity() && (nTarjeta.checked == true  || nCuenta.checked == true)) {
            alert ("Completado con éxito")
          }
  }, false)
      })
  })()


