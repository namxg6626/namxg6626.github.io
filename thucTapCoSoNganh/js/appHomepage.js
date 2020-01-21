let productDetailArray = document.querySelectorAll(".content__product__table__list__element");

// create page selection
let selectPageRow = document.querySelectorAll('.content__product__table__list .container')[3];
selectPageRow.style.justifyContent = "start";
let numberOfPage = Math.ceil(listExtensionsData.length / 12);
for (let i = 1; i <= numberOfPage; i++) {
    selectPageRow.innerHTML += "<div class=\"select-page\" onclick=\"switchTab(event)\">" + i + "<div>"
}
selectPageRow.querySelector('.select-page').classList.add('selected');
// end


function displayPage(pageNumber) {
    for (let i = 0; i < productDetailArray.length; i++) {
        productDetailArray[i].querySelector('.image-product > div').style.backgroundImage = "url(" + listExtensionsData[(pageNumber - 1) * 12 + i].get("linkImage") + ")";
        let tmp = productDetailArray[i].querySelectorAll('p');
        tmp[0].querySelector('a').textContent = listExtensionsData[(pageNumber - 1) * 12 + i].get("name");
        tmp[1].textContent = listExtensionsData[(pageNumber - 1) * 12 + i].get("price") + "K VNĐ";
        tmp[2].textContent = listExtensionsData[(pageNumber - 1) * 12 + i].get("id");
    }
}
displayPage(1);


let selectNumberArray = selectPageRow.querySelectorAll('.select-page');
function switchTab(evt) {
    for (let element of selectNumberArray)
        element.classList.remove('selected');
    evt.currentTarget.classList.add('selected');
    displayPage(parseInt(evt.currentTarget.textContent));
}
