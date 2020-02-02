let groupByName = myCart.groupByName();
let cartBox = document.querySelector('.cart-box');

let updateHeaderCart = () => {
    document.querySelectorAll('.items-quantity').forEach(element => {
        element.textContent = `(${myCart._items.length} items)`
    });
    document.querySelectorAll('.total').forEach(element => {
        element.textContent = myCart.total() + "K VND";
    });
}

let changeQuantityByIndex = (e, index, number) => {
    let button = e.target;
    let currentItem = e.target.parentElement.parentElement;
    let itemQuantity = currentItem.querySelector('input');
    if (button.name == "delete" || itemQuantity.value == 0) {
        for (let i = 0; i < myCart._items.length; i++)
            if (myCart._items[i]._index == index) {
                for (let j = i; j < myCart._items.length; j++)
                    myCart._items[j] = myCart._items[j + 1];
                myCart._items.pop();
                i -= 1;
            }
        currentItem.style.setProperty('display', 'none');
        console.log('gotcha!');
    }
    // descrease
    if (button.name == "descrease" && itemQuantity.value > 1) {
        for (let i = 0; i < myCart._items.length; i++)
            if (myCart._items[i]._index == index) {
                myCart._items.splice(i, number * -1);
                console.log(myCart._items);
                break;
            }
        itemQuantity.value = parseInt(itemQuantity.value) + number;
    }
    // inscrease
    else if (button.name == "inscrease") {
        for (let i = 1; i <= number; i++)
            myCart.add(listExtensionsData[index]);
        console.log(myCart._items);
        itemQuantity.value = parseInt(itemQuantity.value) + number;
    }
    window.localStorage.setItem('cart', JSON.stringify(myCart));
    console.log(myCart.groupByName());
    updateHeaderCart();
}


// display
updateHeaderCart();

for (let element of groupByName)
    cartBox.innerHTML +=
        `<div class="item">
        <div class="linkImage" style="background-image: url('${element._item._linkImage}'); height: 150px; width: 120px; background-position: center; background-size: cover;"></div>
        <section>
            <a href="ProductPage.html#${element._item._index}" class="name">name: ${element._item._name}</a>
            <p class="id">id: ${element._item._id}</p>
            <!--delete this item-->
            <button name="delete" onclick="changeQuantityByIndex(event, ${element._item._index}, ${element._quantity})">xóa</button>
        </section>
        <section>
            <p class="price">price: ${element._item._price}</p>
            <button name="descrease" onclick="changeQuantityByIndex(event, ${element._item._index}, -1)">bớt</button>
            <input type="text" class="quantity" value="${element._quantity}">
            <button name="inscrease" onclick="changeQuantityByIndex(event, ${element._item._index}, 1)">thêm</button>
        </section>
    </div>`
