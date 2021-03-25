/*  
    ТЗ:
    1. Получить JSON данных по продуктам используя API
    2. Основываясь на этих данных сделать карточки товаров
    3. Отобразить карточки товаров на странице
    4. Создать корзину
    5. По кнопке "купить" добавить товар в корзину
    5.1 Отобразить показатель кол-ва товаров над корзиной
    6. В корзине по кнопке "удалить": если кол-во товаров больше 1, то отнять 1; 
        если равно 1, то убрать разметку из корзины
    6.1 Если кол-во товаров в корзине > 1, отминусовать от показателя;
        иначе - скрыть показатель кол-ва товаров в корзине

    7. В поле поиска пользователь вводит строку, ПО КЛИКУ поиска сопостовлять  
        значение строки с именами продуктов, скрывать все карточки товаров на странице
        для которых значение поиска не совпадает.
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
        state: new State (new Shop()),
        api: "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/",
        productsGetJsonMethod: "catalogData.json",
        productImg: "https://placehold.it/200x150",
        productInCartImg: "https://placehold.it/50x100",
        productsData: [],
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
        }
    },

    mounted() {
        this.getJson(this.productsGetJsonMethod)
            .then(pData => {
                this.productsData = pData;
                console.dir(this.productsData);
            });

        // const state = new State(new Shop());
    }
});



