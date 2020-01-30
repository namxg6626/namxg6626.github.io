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
        for (let i = 0; i < this._items.length; i++)
            total += parseFloat(this._items[i]._price);
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
