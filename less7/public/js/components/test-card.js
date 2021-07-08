Vue.component('test-card', {
    props: ['svgLink'],
    data() {
        return {

        }
    },
    template: 
        `<div class="test-card">
            <img :src="svgLink" alt="test-card">
        </div>`
});