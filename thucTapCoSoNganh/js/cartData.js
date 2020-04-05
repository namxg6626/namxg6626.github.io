let myCart = new Cart();
let cartData = JSON.parse(window.localStorage.getItem("cart"));
let itemQuantity = document.getElementById("items-quantity");
let total = document.getElementById("total");

try {
  itemQuantity.textContent = `(${cartData.items.length} items)`;
  myCart.items = cartData.items;
  console.log(cartData);
  total.textContent = myCart.total() + "K VND";
} catch (error) {
  console.error(error);
}

function addToCart(e) {
  myCart.add(currentProduct);
  itemQuantity.textContent = `(${myCart.items.length} items)`;
  total.textContent = myCart.total() + "K VND";
  console.log(myCart.items);
  window.localStorage.setItem("cart", JSON.stringify(myCart));
}
