<template>
  <h2>Tipo de cuenta: {{cuenta}}</h2>  
  <h2>Saldo: {{saldo}} </h2>
  <h2>Cuenta: {{estado ? 'Activa' : 'Inactiva'}}</h2>
  <h3  v-for="(servicio, index) in servicios" :key="index">
    {{ index + 1 }} - {{ servicio }}
  </h3>

  <AccionSaldo @accion="aumentar" texto='Aumentar Saldo'/>
  <AccionSaldo @accion="disminuir" texto='Disminuir saldo'/>

</template>


<script>
import AccionSaldo from './AccionSaldo'

export default {
    components: {
      AccionSaldo,
    },

    data() {
        return {
            saldo: 1000,
            cuenta: 'Visa',
            estado: false,
            servicios: [
                'Giros',
                'Abonos',
                'Transferencias'
            ]
        }
    },

    methods: {
      aumentar() {
        this.saldo = this.saldo + 100
      },
      disminuir() {
        if(this.saldo === 0){
          alert('sin saldo')
          return
        }
        this.saldo = this.saldo - 100
      }
    },

}
</script>

<style>

</style>