let productDetailArray = document.querySelectorAll(".content__product__table__list__element");

for (let i = 0; i < productDetailArray.length; i++) {
    productDetailArray[i].querySelector('.image-product > div').style.backgroundImage = "url(" + listExtensionsData[i].get("linkImage") + ")";
    let tmp = productDetailArray[i].querySelectorAll('p');
    tmp[0].textContent = listExtensionsData[i].get("name");
    tmp[1].textContent = listExtensionsData[i].get("price") + "K VNĐ";
}