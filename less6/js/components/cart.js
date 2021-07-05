Vue.component('cart', {
    props: ['selectedProducts'],
    data() {
        return {
            products: this.selectedProducts,
            isVisible: false
        }
    },
    template:
        `<div class="cart" id="cart">
            <div class="quantity">
                {{ totalQuantity }}
            </div>

            <button class="btn-cart" @click="isVisible = !isVisible" type="button">
                Корзина
            </button>

            <div class="cart-block" v-if="isVisible">
                <cart-item v-for="product of products" :data="product" @remove="remover($event)"></cart-item>
            </div>
        </div>`,
    methods: {
        remover(id) {
            let targetIndex = 0;
            const target = this.products.find((p, idx) => {
                if (p.id == id) {
                    targetIndex = idx;
                    return p;
                }
            });

            target.quantity === 1 ? this.products.splice(targetIndex, 1) : target.quantity--;
        },
    },
    computed: {
        totalQuantity: function () {
            let totalQuantity = 0;
            this.selectedProducts.forEach(p => {
                totalQuantity += p.quantity;
            });
            return totalQuantity;
        }
    },
    watch: {
        selectedProducts: function (newValue, old) {
            this.products = newValue;
        }
    },
    mounted() {
    }
});