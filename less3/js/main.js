const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

class Products {
    constructor(container = '.products', goods) {
        this.container = container;
        this.goods = [];
        this._getGoods()
            .then(data => {
                this.goods = [...data];
                this.renderAllProducts()
            });
    }

    _getGoods() {
        return fetch(`${API}/catalogData.json`)
            .then(Response => Response.json())
            .catch(error => {
                console.log(error);
            })
    }

    renderAllProducts() {
        const containerProducts = document.querySelector(this.container);
        let productItem;
        for (let goodsOne of this.goods) {
            productItem = new ProductItem(goodsOne);
            containerProducts.insertAdjacentHTML('beforeend', productItem.render());
        }
    }

    priceOfAllItems() {
        let result = 0;
        this.goods.forEach(function (item) {
            result += item.price;
        });
        return result;
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.id = product.id_product;
        this.productName = product.product_name;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.productName}</h3>
                <p>${this.price}</p>
                <button class="buy-btn" data-id="${this.id}">Купить</button>
            </div>`
    }
}

let products = new Products();

class Cart {
    constructor(goods) {
        this.goods = goods;

        this.cartBtn = document.querySelector(".btn-cart");
        this.cartBlock = document.querySelector(".cart-block");
        this.visibility = "invisible";

        this.productIds = [];
        this._init();
    }

    _show() {
        this.cartBlock.classList.toggle(this.visibility);
    }

    _getItems() {

    }

    // addItem() {
    // document.querySelectorAll(".buy-btn").forEach(btn => {
    //     btn.addEventListener.
    // });
    // }

    deleteItem() { }

    _initBtnCart() {
        this.cartBtn.addEventListener("click", () => {
            this._show();
        });
    }

    _initBtnBuy() {
        // document.querySelectorAll(".buy-btn").forEach((btn) => {
        //     btn.addEventListener("click", (event) => {
        //         console.log(event.target);
        //     });
        // });
        console.log(document.querySelectorAll(".buy-btn"));
    }

    _init() {
        this._initBtnCart();
        this._initBtnBuy();
    }
}


// while (true) {
//     if (products.goods.length != 0) {
//         let cart = new Cart(products.goods);
//         console.log(cart.goods);
//         break;
//     }
// }

class CartItem {
    constructor() {

    }
    render() { }
}