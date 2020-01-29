// Cart
class Cart {
    constructor() {
        this._items = [];
    }
    get(property) {
        property = '_' + property;
        return this[property];
    }
    set(property, value) {
        property = '_' + property;
        this[property] = value;
    }
    add(item) {
        this._items.push(item);
    }
    total() {
        let total = 0;
        for (let i = 0; i < this._items.length; i++) {
            total += parseFloat(this._items[i].get('price'));
        }
        return total;
    }
    listNames() {
        let listNames = [];
        for (let element of this._items) {
            if (!listNames.includes(element.get('name')))
                listNames.push(element.get('name'));
        }
        return listNames;
    }
}


let myCart = new Cart();
let cartData = JSON.parse(window.localStorage.getItem('cart'));
let itemQuantity = document.getElementById('item-quantity');

try {
    itemQuantity.textContent = `(${cartData._items.length} items)`;
    myCart.set('items', cartData._items);
} catch (error) {
    console.error('cart data not exist');
}

function showCart(e) {
    document.documentElement.style.setProperty("--toggle-cart", `""`);
}

function addToCart(e) {
    myCart.add(currentProduct);
    itemQuantity.textContent = `(${myCart.get('items').length} items)`;
    console.clear();
    console.log(myCart.get("items"));
    window.localStorage.setItem('cart', JSON.stringify(myCart));
}
