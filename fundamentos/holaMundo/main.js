const app = Vue.createApp({
    data() {
        return{
            titulo: 'Mi Banco con VueJS',
            cantidad: 500,
            enlace: 'https://youtube.com',
            estado: true,
            servicios: ['Transferencias', 'Pagos', 'Giros', 'Cheques'],
            desactivar: false,
        }
    },

    methods: {
        agregarSaldo(valor) {
            this.cantidad = this.cantidad + valor
        },

        disminuirSaldo(valor) {
            if(this.cantidad <= 0){
                this.desactivar = true
                alert('Saldo en cero')
                return
            }
            this.cantidad = this.cantidad - valor
        }
    },

    computed: {
        colorCantidad() {
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },

        mayusculasTexto() {
            return this.titulo.toUpperCase()
        }
    }

})