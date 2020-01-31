let groupByName = myCart.groupByName();

let cartBox = document.querySelector('.cart-box');
document.querySelectorAll('.items-quantity').forEach(element => {
    element.textContent = `(${myCart._items.length} items)`
});
document.querySelectorAll('.total').forEach(element => {
    element.textContent = myCart.total() + "K VND";
});
