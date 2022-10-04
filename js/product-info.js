//Función para poder mostrar la información de los productos

function mostrarInfoProducto(producto) {
    let htmlContentToAppend = "";

    htmlContentToAppend += `
    <h3 class="text-center mt-4 mb-5">${producto.name}</h3>
    <div class="row">
            <hr>
            <h4>Descripción</h4>
            <p class="mb-1">${producto.description}</p>
            
            <h4>Costo</h4>
            <p> ${producto.currency} ${producto.cost}</p>
            
            <h4>Vendidos</h4>
            <p>${producto.soldCount}</p>

            <h4>Imagenes</h4>
          
            </hr>
        </div>`
    for (let imagen of producto.images) {
        htmlContentToAppend += `
                <div>
                    <img src="${imagen}" class="img-thumbnail">
                </div>
                `
    }

    document.getElementById("producto").innerHTML = htmlContentToAppend;

}

//Trae la información del producto seleccionado y lo muestra.
document.addEventListener("DOMContentLoaded", function () {
    var id = localStorage.productID;
    

    //Obtener el producto y agregarlo al HTML
    getJSONData(PRODUCT_INFO_URL + id + ".json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            producto = resultObj.data;
            mostrarInfoProducto(producto);

            for (let productoRelacionado of producto.relatedProducts){
                mostrarInfoProductoRelacionado(productoRelacionado)
            }

        }
    })

    //Obtener lista de comentarios y agregarla al HTML
    getJSONData(PRODUCT_INFO_COMMENTS_URL + id + ".json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            comentarios = resultObj.data;
            agregarComentarios(comentarios);
        }
    })
});


//Agregar los comentarios
function agregarComentarios(comentarios) {
    let commentsHTML = ""
    for (let comentario of comentarios) {
        let scoreHTML = mostrarPuntuacion(comentario.score);
        commentsHTML += `
        <li id="idComment_1" class="row comment-content">
        <div>
        <h5>`+ comentario.user + ` - ` + comentario.dateTime + `</h5>
        </div>
        <div id="score">${scoreHTML}</div>
        <p>`+ comentario.description + `</p>
        </li>`;
    }
    document.getElementById("comentarios").innerHTML = commentsHTML;
}


//Mostrar puntuación
function mostrarPuntuacion(puntuacion) {
    let estrella = 1
    let scoreHTML = "";
    while (estrella <= 5) {
        puntuacion <= estrella ? scoreHTML += `<span class="fa fa-star"></span>` : scoreHTML += `<span class="fa fa-star checked"></span>`;
        estrella++;
    }

    return scoreHTML;
}


function mostrarInfoProductoRelacionado(producto) {
    let htmlContentToAppend = "";

    htmlContentToAppend += `
    <h3 class="text-center mt-4 mb-5">Productos Relacionados</h3>
    <h3 class="text-center mt-4 mb-5">${producto.name}</h3>
    <div onclick="setCatID(${producto.id})">
                    <img src="${producto.image}" class="img-thumbnail">
                </div>
    `


    document.getElementById("productos-relacionados").innerHTML = htmlContentToAppend;

}