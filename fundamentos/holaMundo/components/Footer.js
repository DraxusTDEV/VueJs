app.component('footer-banco', {
    props: ['valor', 'date'],
    template: /*html*/
        `<div class="bg-dark py-3 mt-2 text-white">
            <h3>{{texto}} - {{valor}}</h3>
            <p>{{date}}</p>
         </div>`,

    data() {
        return {
            texto: 'Footer dinámico de mi sitio Web',
        }
    }
})