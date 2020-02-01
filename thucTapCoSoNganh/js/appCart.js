let groupByName = myCart.groupByName();
let cartBox = document.querySelector('.cart-box');

document.querySelectorAll('.items-quantity').forEach(element => {
    element.textContent = `(${myCart._items.length} items)`
});
document.querySelectorAll('.total').forEach(element => {
    element.textContent = myCart.total() + "K VND";
});

for (let element of groupByName)
    cartBox.innerHTML += 
    `<div class="item">
        <div class="linkImage" style="background-image: url('${element._item._linkImage}'); height: 150px; width: 120px; background-position: center; background-size: cover;"></div>
        <section>
            <a href="ProductPage.html#${element._item._index}" class="name">name: ${element._item._name}</a>
            <p class="id">id: ${element._item._id}</p>
            <button onclick="deleteByIndex()">xóa</button>
        </section>
        <section>
            <p class="price">price: ${element._item._price}</p>
            <button>bớt</button>
            <input type="text" class="quantity" value="${element._quantity}">
            <button>thêm</button>
        </section>
    </div>`
