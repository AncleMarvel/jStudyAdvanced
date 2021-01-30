const api = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/";

class Service {
    constructor (baseUrl) {
        this.baseUrl = baseUrl;
    }

    _getResponse (method) {
        return fetch(`${this.baseUrl}/${method}`)
        .then(response => response.json())
        .catch(error => {
            console.log(error);
        });
    }
}

class Product {
    constructor(template, img = 'https://placehold.it/200x150') {
        this.id = template.id_product;
        this.name = template.product_name;
        this.price = template.price;
        this.img = img;
    }
}

class Cart {

}

class Shop {
    constructor (service, cart) {
        this.service = service;
        this.cart = cart;
        this.productList = [];

        this.service._getResponse("catalogData.json").then(products => {
            this.productList = products.map(product => new Product(product));
        });
    }
}

const shop = new Shop(new Service(api), new Cart());

