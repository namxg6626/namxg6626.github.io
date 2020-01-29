// get data of product by its index
let currentURL = window.location.href;
let ProductIndex = currentURL.split('#')[1];
let currentProduct = listExtensionsData[ProductIndex]; // an Object

// set product image
document.querySelector('.detail__image').style.backgroundImage = `url("${currentProduct.get("linkImage")}")`;

// define a weirdly function :)
function doSmt(arr, action) {
    let result = [];
    for (let element of arr)
        result.push(action(element));
    // get its new data when necessary
    return result;
}

// show specification of product
for (let prop in currentProduct) {
    prop = prop.slice(1, prop.length);
    doSmt(document.getElementsByClassName(prop), e => { e.textContent += currentProduct.get(prop) });
}
