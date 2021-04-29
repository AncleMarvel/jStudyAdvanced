/**
 * Помимо получения данных по апи и отображения их на странице,
 * Реализовать поиск и удаление/добавление товаров в корзину
 */
class Cart {
    products = [];
}

class CartItem {
    constructor(product) {
        this.product = product;
        this.quantity = 1;
    }

    addQuantity() {
        this.quantity++;
    }

    decreaseQuantity() {
        this.quantity--;
    }
}

class Shop {
    cart = new Cart();
}

class State {
    constructor(shop) {
        this.shop = shop;
    }
}

const shop = new Vue({
    el: "#shop",
    data: {
        state: new State(new Shop()),
        api: "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/",
        productsGetJsonMethod: "catalogData.json",
        productImg: "https://via.placeholder.com/200x150",
        productInCartImg: "https://via.placeholder.com/50x100",
        quantityOfProductsInCart: 0,
        visibleCart: false,
        searchText: "",
        sourceData: []
    },

    methods: {
        getJson(method) {
            return fetch(`${this.api}/${method}`)
                .then(response => response.json())
                .catch(error => {
                    console.log(error);
                });
        },

        buy(product) {
            const cartItem = this.state.shop.cart.products.find(p => p.product.id_product == product.id_product);
            !cartItem ? this.state.shop.cart.products.push(new CartItem(product)) : cartItem.addQuantity();
            this.quantityOfProductsInCart++;
        },

        removeOneFromCart(product) {
            console.log(product);
            const cartItem = this.state.shop.cart.products.find(p => p.product.id_product == product.product.id_product);
            const indexOfRemoveProduct = this.state.shop.cart.products.indexOf(product.product);
            !cartItem ? this.state.shop.cart.products.splice(indexOfRemoveProduct, 1) : cartItem.decreaseQuantity();
            this.quantityOfProductsInCart--;
        },

        search() {
            const productNameList = document.querySelectorAll(".product-name");
            document.querySelector("#products").childNodes.forEach(el => {
                if (el.querySelector(".product-name").innerText.toLowerCase().indexOf(this.searchText.toLowerCase()) == -1) {
                    el.style.display = "none";
                } else { 
                    el.style.display = "block";
                }
            });

            if (this.searchText == "") {
                document.querySelector("#products").childNodes.forEach(el => {
                    el.style.display = "block";
                });
            }
        }
    },

    mounted() {
        this.getJson(this.productsGetJsonMethod)
            .then(pData => {
                this.sourceData = pData;
            });
    }
});



