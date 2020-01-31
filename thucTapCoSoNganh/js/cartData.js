let myCart = new Cart();
let cartData = JSON.parse(window.localStorage.getItem('cart'));
let itemQuantity = document.getElementById('items-quantity');
let total = document.getElementById('total');

try {
    itemQuantity.textContent = `(${cartData._items.length} items)`;
    myCart.set('items', cartData._items);
    total.textContent = myCart.total() + "K VND";
} catch (error) {
    console.error('Nothing in cart');
}

function showCart(e) {
    // document.documentElement.style.setProperty("--toggle-cart", `""`);
}

function addToCart(e) {
    myCart.add(currentProduct);
    itemQuantity.textContent = `(${myCart.get('items').length} items)`;
    total.textContent = myCart.total() + "K VND";
    console.clear();
    console.log(myCart.get("items"));
    window.localStorage.setItem('cart', JSON.stringify(myCart));
}
