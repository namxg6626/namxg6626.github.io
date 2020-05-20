let groupById = myCart.groupById();

// display
updateHeaderCart();
initCartInterface();

function initCartInterface() {
  let cartBox = document.querySelector(".cart-box");
  if (groupById.length) {
    for (let element of groupById) {
      const {
        item: { linkImage, name, brand, compatibility, id, price },
        quantity,
      } = element;

      cartBox.innerHTML += `<div class="item">
            <div class="linkImage" style="background-image: url('${linkImage}'); height: 150px; width: 120px; background-position: center; background-size: cover;"></div>
            <div class="info">
                <a href="ProductPage.html#${id}" class="name">${name}</a>
                <p class="brand">Hãng sản xuất: ${brand}</p>
                <p class="compatibility">Tương thích với: ${compatibility}</p>
                <p class="id">Mã sản phẩm: ${id}</p>
            </div>
            <div class="quantity-control">
                <button name="decrease" onclick="changeQuantityByIndex(event, ${id})">-</button>
                <input type="text" class="quantity" readonly="true" value="${quantity}">
                <button name="increase" onclick="changeQuantityByIndex(event, ${id})">+</button>
                <button name="delete" onclick="changeQuantityByIndex(event, ${id})">X</button>
            </div>
            <div class="price-info">
                <!--delete this item-->
                <p class="price">${price}K VND</p>
                <p class="total-price">${price * quantity}K VND</p>
            </div>        
          </div>`;
    }
  } else {
    cartBox.innerHTML += `<div class="error"><h1>Chưa có gì trong giỏ hàng...</h1></div>`;
  }
}

function updateHeaderCart() {
  document.querySelectorAll(".items-quantity").forEach((element) => {
    element.textContent = `(${myCart.items.length} items)`;
  });
  document.querySelectorAll(".total").forEach((element) => {
    element.textContent = myCart.total() + "K VND";
  });
}

function changeQuantityByIndex(e, id) {
  let button = e.target;
  let currentItem = e.target.parentElement.parentElement;
  let itemQuantity = currentItem.querySelector("input");
  itemQuantity.value = parseInt(itemQuantity.value);
  console.log(currentItem);
  if (button.name === "decrease") {
    if (itemQuantity.value == 1) itemQuantity.value = 1;
    else {
      itemQuantity.value = itemQuantity.value - 1;
      let wasDeleted = false;
      let newItems = [];
      for (let item of myCart.items) {
        if (item.id === id && !wasDeleted) wasDeleted = true;
        else newItems.push(item);
      }

      myCart.items = newItems;
    }
  }

  if (button.name === "increase") {
    let selectedItem;
    for (let item of myCart.items) if (item.id == id) selectedItem = item;
    myCart.items.push(selectedItem);
    ++itemQuantity.value;
  }

  if (button.name === "delete") {
    myCart.items = myCart.items.filter((item) => item.id !== id);
    currentItem.style.display = "none";
  }

  window.localStorage.setItem("cart", JSON.stringify(myCart));
  updateHeaderCart();
  if (button.name !== "delete") {
    let priceBlock = currentItem.getElementsByClassName("price")[0];
    let totalPriceBlock = currentItem.getElementsByClassName("total-price")[0];
    totalPriceBlock.textContent =
      parseFloat(priceBlock.textContent) * parseFloat(itemQuantity.value) +
      "K VND";
  }
}
