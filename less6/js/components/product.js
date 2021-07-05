Vue.component('product', {
    props: ['sourceData'],
    data() {
        return {
            id: this.sourceData.id_product,
            img: "https://via.placeholder.com/200x150",
            title: this.sourceData.product_name,
            price: this.sourceData.price,
            quantity: 0
        }
    },
    template:
        `<div>
            <img :src="img" alt="img">
            <h3 class="product-name">{{ title }}</h3>
            <p>{{ price }}</p>
            <button class="buy-btn" @click="buy()">Купить</button>
        </div>`,
    methods: {
        buy() {
            this.$emit('buy', {id: this.id, img: this.img, title: this.title, price: this.price, quantity: this.quantity});
        }
    }
});