Vue.component('search', {
    template: 
    `<form action="#" class="search-form" id="search">
        <input type="text" class="search-field" v-model.lazy="searchText">
        <button @click.prevent="search()" class="btn-search" type="submit">
            <i class="fas fa-search"></i>
        </button>
    </form>`
});