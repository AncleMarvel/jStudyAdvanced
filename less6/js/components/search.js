Vue.component('search', {
    props: ['filteredLength'],
    data() {
        return {
            searchText: '',
        }
    },
    template:
        `<form action="#" class="search-form" id="search">
            <input type="text" class="search-field" v-model.lazy="searchText">
            <button @click.prevent="search()" class="btn-search" type="submit">
                <i class="fas fa-search"></i>
            </button>
            <error :message="error"></error>
        </form>`,
    computed: {
        error: function() {
            if (this.filteredLength <= 0) {
                return 'not found';
            } else {
                return '';
            }
        }
    },
    methods: {
        search() {
            this.$emit('search', this.searchText);
        }
    }
});