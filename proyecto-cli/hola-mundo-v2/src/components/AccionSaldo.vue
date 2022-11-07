<template>
    <div>
        <button @click="accion">{{texto}}</button>
    </div>
</template>

<script>
    export default {
        name: 'AccionSaldo',
        props: {
            texto: String
        },
        methods: {
            accion(){
                this.$emit('accion')
            }
        }
    }
</script>

<style>

</style>