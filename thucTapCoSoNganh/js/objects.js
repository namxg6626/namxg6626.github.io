class Product {
  constructor(id, name, price, index = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.index = index;
  }
}

class SmartphoneStuff extends Product {
  constructor(
    id,
    name,
    brand,
    material,
    price,
    mfgDate,
    warranty,
    linkImage = null,
    index
  ) {
    super(id, name, price, index);
    this.material = material;
    this.brand = brand;
    this.mfgDate = mfgDate;
    this.warranty = warranty;
    this.linkImage = linkImage;
  }
  checkWarranty() {
    if (
      this.mfgDate == null ||
      this.warranty == null ||
      this.mfgDate == "null" ||
      this.warranty == "null"
    ) {
      return false;
    }

    let date = new Date();
    let dateArray = date
      .toISOString()
      .slice(0, 10)
      .split("-")
      .map((element) => parseInt(element));
    let currentD = dateArray[2],
      currentM = dateArray[1],
      currentY = dateArray[0];
    let mfgDateArray = this.mfgDate
      .split("-")
      .map((element) => parseInt(element));
    let mfgD = mfgDateArray[0],
      mfgM = mfgDateArray[1],
      mfgY = mfgDateArray[2];

    let expM = (this.warranty % 12) + mfgM;
    let expY = Math.floor(this.warranty / 12) + mfgY;
    if (expM > 12) {
      expM = expM - 12;
      expY += 1;
    }
    if (expY > currentY) return true;
    if (expY == currentY && expM > currentM) return true;
    if (expY == currentY && expM == currentM && mfgD >= currentD) return true;

    return false;
  }
}

class Extension extends SmartphoneStuff {
  constructor(
    id,
    name,
    brand,
    material,
    price,
    compatibility,
    mfgDate = null,
    warranty = null,
    linkImage = null,
    index
  ) {
    super(
      id,
      name,
      brand,
      material,
      price,
      mfgDate,
      warranty,
      linkImage,
      index
    );
    this.compatibility = compatibility;
  }
}

//=================================================================
class Cart {
  constructor() {
    this.items = [];
  }
  add(item) {
    this.items.push(item);
  }
  total() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++)
      total += parseFloat(this.items[i].price);
    return total;
  }
  groupById() {
    let idsList = [];
    let result = [];
    let quantity = 0;
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (!idsList.includes(item.id)) {
        idsList.push(item.id);
        quantity = 0;

        for (let j = i; j < this.items.length; j++)
          if (item.id == this.items[j].id) quantity++;

        result.push({ quantity, item });
      }
    }
    return result;
  }
}
