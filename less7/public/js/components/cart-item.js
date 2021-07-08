Vue.component('cart-item', {
    props: ['data'],
    data() {
        return {
            img: "https://via.placeholder.com/50x100",
        }
    },
    template:
        `<div v-if="data.quantity != 0">
            <div class="product-bio">
                <img :src="img" alt="productImg">
                <div class="product-desc">
                    <p class="product-title">
                        {{ data.title }} id: {{ data.id }}
                    </p>
                    <p class="product-quantity">
                        Quantity: {{ data.quantity }} 
                    </p>
                    <p class="product-single-price">
                        {{ data.price }} each
                    </p>
                </div>
            </div>
        
            <div class="right-block">
                <p class="product-price">
                    {{ data.quantity * data.price }}
                </p>
                <button class="del-btn" @click="remove()">&times;</button> 
            </div>
        </div>`,
    methods: {
        remove() {
            this.$emit('remove', this.data.id)
        }
    }
});