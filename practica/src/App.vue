<script setup>
  const name = 'Práctica VUEJS3'
</script>

<template>
  <h1>{{name}}</h1>
  <div class="conta">0</div>
  <div class="container">
    <button>Aumentar</button>
    <button>Disminuir</button>
    <button>Reset</button>
  </div>
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
    height: 100px;
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
