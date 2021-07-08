Vue.component('error', {
    props: ['message'],
    template:
        `<div class="error" v-if="isActive">
            {{ message }}
        </div>`,
    computed: {
        isActive: function () {
            if (this.message != '') {
                return true;
            } else {
                return false;
            }
        }
    }
});