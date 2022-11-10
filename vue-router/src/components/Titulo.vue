<template>
    <h1>{{texto}}</h1>
</template>

<script>
    export default {
        props: {
            texto: String
        }
    }
</script>

<style>
    h1 {
        color: white;
        background-color: black;
        border-radius: 10px;
        box-shadow: 5px 5px 5px yellow;
    }
</style>