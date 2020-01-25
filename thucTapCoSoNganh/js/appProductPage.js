// search and display data of product by its index
let currentURL = window.location.href;
let index = currentURL.split('#')[1];
let currentProduct = listExtensionsData[index]; // an Object - product obj

// define a weirdly function :)
function doSmt(arr, action) {
    let result = [];
    for (element of arr)
        result.push(action(element));
    // get its new data when necessary
    return result;
}

let dataComponent = document.querySelector('.detail__infor');
let nameNodes = dataComponent.querySelectorAll('.name'),
    idNodes = dataComponent.querySelectorAll('.id'),
    priceNodes = dataComponent.querySelectorAll('.price')

doSmt(nameNodes, e => { e.textContent = currentProduct.get("name") });
doSmt(idNodes, e => { e.textContent = currentProduct.get("id") });
doSmt(priceNodes, e => { e.textContent = currentProduct.get("price") + "K VND" });
