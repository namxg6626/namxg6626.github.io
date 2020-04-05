// get data of product by its index
const currentURL = window.location.href;
const productIndex = currentURL.split("#")[1]; // force parsing to int
let currentProduct;
fetch(`http://localhost:4000/shopnguyenxa/?id=${productIndex}`)
  .then((result) => result.json())
  .then((json) => {
    [currentProduct] = json;
    console.log(currentProduct);
    document.querySelector(
      ".detail__image"
    ).style.backgroundImage = `url("${currentProduct.linkImage}")`;

    // show specification of product
    for (let prop in currentProduct) {
      let element = [...document.getElementsByClassName(prop)];
      element.forEach((e) => (e.textContent = currentProduct[prop]));
    }
  });
// set product image
