<script setup>
import { computed } from '@vue/reactivity';
import {ref} from 'vue'

  const name = 'Práctica VUEJS3'
  const counter = ref(0);
  const arrayFavoritos = ref([]);

  const aumentar = () => {
    counter.value++;
    //console.log(counter.value);
  }

  const disminuir = () => {
    counter.value--;
    //console.log(counter.value);
  }

  const reset = () => {
    counter.value = 0;
    //console.log(counter.value);
  }

  const add = () => {
    arrayFavoritos.value.push(counter.value);
    //console.log(arrayFavoritos);
  }

  const bloquearBtnAdd = computed(() => {
    const numSearch = arrayFavoritos.value.find(num => num === counter.value)
    console.log(numSearch);
    if(numSearch === 0) return true;
    return numSearch ? true : false;
  })
</script>

<template>
  <h1>{{name}}</h1>
  <div class="conta">{{counter}}</div>
  <div class="container">
    <button @click="aumentar">Aumentar</button>
    <button v-on:click="disminuir">Disminuir</button>
    <button @click="reset">Reset</button>
    <button @click="add" :disabled="bloquearBtnAdd">Add</button>
  </div>
  <hr>
  <br><br>
  <hr>
  <br>
    {{arrayFavoritos}}
  <br><br>
  <ul>
    <li
      v-for="(num, index) in arrayFavoritos"
      :key="index"
    >{{num}}</li>
  </ul>
</template>

<style >
  h1{
    background: black;
    color: white;
    text-align: center;
    border-radius: 10px;
    text-shadow: 3px 3px 4px yellow;
  }

  .container{
    width: 100%;
    height: 300px;
    background: gray;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button{
    display: inline-block;
    height: 50px;
    width: 100px;
    border-radius: 5px;
    border: none;
    margin-right: 10px;
  }

  .conta{
    width: 20%;
    margin: 0 auto;
    height: 40px;
    background: linear-gradient(rgb(218, 165, 32), rgb(44, 218, 32));
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
  }
</style>
