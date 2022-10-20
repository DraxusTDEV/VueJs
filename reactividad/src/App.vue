<script setup>
import {ref} from "vue";

const name = 'Vue dinámico';

const counter = ref(0); //variable reactiva

const increment = () => {
  //console.log('aumentar contador');
  counter.value++; //debemos agregarle el .value
  console.log(counter.value);
}

</script>

<template>
  <h1>Hola {{name}}</h1>
  <h2>{{counter}}</h2>

  <button @click="increment">Aumentar</button>

</template>

<style>

</style>
