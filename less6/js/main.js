
const shop = new Vue({
    el: "#shop",
    data: {
        api: "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/",
        productsGetJsonMethod: "catalogData.json",
        productImg: "https://via.placeholder.com/200x150",
        sourceData: [],
        productsInCart: [],
        filteredProducts: [],
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
        },

        buyier(product) {
            let targetProduct = this.productsInCart.find(p => p.id === product.id);
            if (!targetProduct) {
                this.productsInCart.push(product);
                targetProduct = this.productsInCart.find(p => p.id === product.id);
                targetProduct.quantity++;
            } else {
                targetProduct.quantity++;
            }
            // console.log(this.productsInCart);
            this.productsInCart = [...this.productsInCart];
        },

        searcher(text) {
            text = text.toLowerCase();
            if (text == '') {
                this.filteredProducts = this.sourceData;
                return true;
            } else {
                this.filteredProducts = this.sourceData.filter(p => {
                    let pName = p.product_name.toLowerCase();
                    let result = pName.indexOf(text, 0) > -1; 
                    return result;
                });
            }
        }
    },
    mounted() {
        this.getJson(this.productsGetJsonMethod)
            .then(pData => {
                this.sourceData = pData;
                this.filteredProducts = pData;
                this.sourceData.forEach(el => {
                    el.quantity = 0;
                });
            });
    }
});



