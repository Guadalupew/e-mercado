document.addEventListener("DOMContentLoaded" , function () {
    getJSONData(PRODUCTS_URL).then(resultObj => {
        if (resultObj.status == "ok") {
            currentProductsArray = resultObj.data
            showProductsList()


        }
    })
    
})

let currentProductsArray = []

function showProductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.products.length; i++){
        let product = currentProductsArray.products[i];

        

            htmlContentToAppend += `
            <div onclick="setCatID(${product.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${product.name}</h4>
                            <small class="text-muted">${product.soldCount} artículos</small>
                            <p>${product.currency} ${product.cost}
                        </div>
                        <p class="mb-1">${product.description}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("products").innerHTML = htmlContentToAppend;
    }
