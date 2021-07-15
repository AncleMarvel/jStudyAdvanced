Vue.component('test-card', {
    props: ['sourceData'],
    data() {
        return {

        }
    },
    template: 
        `<div class="test-card">
            <img :src="svgLink" alt="test-card">
        </div>`
});