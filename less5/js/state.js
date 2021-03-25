class Cart {
    products = [];
}

class Shop {
    cart = new Cart();
}

class State {
    constructor(shop) {
        this.shop = shop;
    }
}

const state = new State(new shop());