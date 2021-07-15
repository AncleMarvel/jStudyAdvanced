Vue.component('cards-container', {
    template:
        `<div class="cards-container">
            <card v-for="card of cardsData" :sourceData="card"></card>
        </div>`,
});