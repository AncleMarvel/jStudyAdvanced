Vue.component('product', {
    props: ['sourceData'],
    data() {
        return {
            id: this.sourceData.id_product,
            img: this.sourceData.img,
            title: this.sourceData.product_name,
            price: this.sourceData.price,
            quantity: 0
        }
    },
    template:
        `<div>
            <div style="width: 200px; height: 150px; overflow: hidden">
                <img :src="img" alt="img" style="width: 100%">
            </div>
            <h3 class="product-name">{{ title }}</h3>
            <p>{{ price }}</p>
            <button class="buy-btn" @click="buy()">Купить</button>
        </div>`,
    methods: {
        buy() {
            this.$emit('buy', { id: this.id, img: this.img, title: this.title, price: this.price, quantity: this.quantity });
        }
    }
});