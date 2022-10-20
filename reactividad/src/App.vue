<script setup>
import {ref} from "vue";

const name = 'Vue dinámico';

const counter = ref(0); //variable reactiva

const increment = () => {
  //console.log('aumentar contador');
  counter.value++; //debemos agregarle el .value
  console.log(counter.value);
}

const decrement = () => {
  //console.log('aumentar contador');
  counter.value--; //debemos agregarle el .value
  //console.log(counter.value);
}

const reset = () => {
  //console.log('aumentar contador');
  counter.value = 0; //debemos agregarle el .value
  //console.log(counter.value);
}

</script>

<template>
  <h1>Hola {{name}}</h1>
  <h2 :class="counter > 0 ? 'positive' : 'negative'">{{counter}}</h2>

  <button @click="increment">Aumentar</button>
  <button @click="decrement">Disminuir</button>
  <button @click="reset">Reset</button>

</template>

<style>
  .positive{
    color: greenyellow;
  }

  .negative{
    color: red;
  }
</style>
