var currency = null;

//Evento que se corre cuando se carga la página
document.addEventListener("DOMContentLoaded", function () {
    getJSONData(CART_INFO_URL  + "25801.json").then(function (resultObj) {
        if (resultObj.status === "ok") {
             userCart = resultObj.data;
           listarArticulos(userCart.articles)
        }
    })

});

function listarArticulos(articulos) {
    let articlesHTML = ""
    for (let articulo of articulos) {
        currency = articulo.currency
        let subtotal = articulo.unitCost * articulo.count
        articlesHTML += `
        <tr>
            <td style="border:solid; max-width:25px; max-height:25px;"><img src="${articulo.image}" class="img-thumbnail"></td>
            <td style="border:solid;">${articulo.name}</td>
            <td style="border:solid;">${articulo.currency} ${articulo.unitCost}</td>
            <td style="border:solid;">  <input type="number" onchange="calcularSubtotal(event,${articulo.unitCost})" value="${articulo.count}"></td>
            <td style="border:solid;" id="subtotal">${articulo.currency} ${subtotal}</td>
          </tr>

        `;
    }
    document.getElementById("articulos").innerHTML += articlesHTML;
}

function calcularSubtotal(event,unitCost){
    let subtotal = event.target.value * unitCost;
    let nuevoSubtotal = `
    <td style="border:solid;" id="subtotal">${currency} ${subtotal}</td>
    `
    document.getElementById("subtotal").innerHTML = nuevoSubtotal
}
