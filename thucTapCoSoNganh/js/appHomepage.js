let productDetailArray = document.querySelectorAll(
  ".content__product__table__list__element"
);

let dataJson = [];
initPage();

async function initPage() {
  const response = await fetch("http://localhost:4000/shopnguyenxa/");
  dataJson = await response.json();

  displayPage(1);
  initPageSelection();
}

// create page selection
function initPageSelection() {
  let selectPageRow = document.querySelectorAll(
    ".content__product__table__list .container"
  )[3];
  selectPageRow.style.justifyContent = "start";
  let numberOfPage = Math.ceil(dataJson.length / 12);
  for (let i = 1; i <= numberOfPage; i++) {
    selectPageRow.innerHTML += `<div class="select-page" onclick="switchTab(event)">${i}<div>`;
  }
  selectPageRow.querySelector(".select-page").classList.add("selected");
}
// end

function displayPage(pageNumber) {
  for (let i = 0; i < productDetailArray.length; i++) {
    productDetailArray[i].querySelector(
      ".image-product > div"
    ).style.backgroundImage =
      "url(" + dataJson[(pageNumber - 1) * 12 + i].linkImage + ")";

    let tmp = productDetailArray[i].querySelectorAll("p");
    let link = tmp[0].querySelector("a");
    link.textContent = dataJson[(pageNumber - 1) * 12 + i].name;
    link.setAttribute(
      "href",
      "ProductPage.html#" + ((pageNumber - 1) * 12 + i + 1)
    );
    tmp[1].textContent = dataJson[(pageNumber - 1) * 12 + i].price + "K VNĐ";
    tmp[2].textContent = dataJson[(pageNumber - 1) * 12 + i].id;
  }
}

function switchTab(evt) {
  const prevSelection = document.querySelector(".select-page.selected");
  prevSelection.classList.remove("selected");
  const { target } = evt;
  target.classList.add("selected");
  displayPage(parseInt(target.textContent));
}
