class Product {
    constructor(id, name, price) {
        this._id = id;
        this._name = name;
        this._price = price;
    }
    get(property) {
        property = '_' + property;
        return this[property];
    }
    set(property, value) {
        property = '_' + property;
        this[property] = value;
    }
}

class SmartphoneStuff extends Product {
    constructor(id, name, brand, material, price, mfgDate, warranty, linkImage = null) {
        super(id, name, price);
        this._material = material;
        this._brand = brand;
        this._mfgDate = mfgDate;
        this._warranty = warranty;
        this._linkImage = linkImage;
    }
    checkWarranty() {
        if (this._mfgDate == null || this._warranty == null || this._mfgDate == "null" || this._warranty == "null") {
            return false;
        }

        let date = new Date();
        let dateArray = date.toISOString().slice(0, 10).split('-').map(element => parseInt(element));
        let currentD = dateArray[2],
            currentM = dateArray[1],   
            currentY = dateArray[0];
        let mfgDateArray = this._mfgDate.split('-').map(element => parseInt(element));
        let mfgD = mfgDateArray[0],
            mfgM = mfgDateArray[1],
            mfgY = mfgDateArray[2];

        let expM = (this._warranty % 12) + mfgM;
        let expY = Math.floor(this._warranty / 12) + mfgY;
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
    constructor(id, name, brand, material, price, compatibility, mfgDate = null, warranty = null, linkImage = null) {
        super(id, name, brand, material, price, mfgDate, warranty, linkImage);
        this._compatibility = compatibility;
    }
}
