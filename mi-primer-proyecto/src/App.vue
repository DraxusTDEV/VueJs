<script setup >
  const name = 'Vue JS3';
  const stylecolor = "color: blue";
  const arrayColores = ['blue', 'red', 'yellow'];
  const activo = 1;
  const arrayFrutas = ['🍎', '🍓', '🍊', '🍌', '🍍']

  const arrayFrutas2 = [
        {
            name: "Manzana",
            price: "$1.00",
            description: "Una manzana",
        },
        {
            name: "Pera",
            price: "$2.00",
            description: "Una pera",
        },
        {
            name: "Naranja",
            price: "$3.00",
            description: "Una naranja",
        },
    ];

    const objetoFruta = {
            name: "Manzana",
            price: "$1.00",
            description: "Una manzana",
        }

        const arrayFrutas3 = [
        {
            name: "Manzana",
            price: "$1.00",
            description: "Una manzana",
            stock: 0,
        },
        {
            name: "Pera",
            price: "$2.00",
            description: "Una pera",
            stock: 10,
        },
        {
            name: "Naranja",
            price: "$3.00",
            description: "Una naranja",
            stock: 20,
        },
    ];
    //metodo - methods
    const handleClick = (msg) => {
      alert(msg);
    }
</script>

<template>
  <h1>Hola {{name.toLocaleUpperCase()}}</h1>
  <h2 :style="stylecolor">Soy azul</h2>
  <h2>{{arrayColores}}</h2>
  <h2 :style="`color:${arrayColores[2]}`">Soy {{arrayColores[2]}}</h2>
  <h2 v-if="activo===true">Estoy activo</h2>
  <h2 v-else-if="activo===false">Estoy inactivo</h2>
  <h2 v-else>Estoy indeciso</h2>
  <hr>
  <h2>{{arrayFrutas}}</h2>
  <ul>
    <li v-for="(fruta, index) in arrayFrutas" :key="index">
    {{index+1}} - {{fruta}}</li><!--El index es opcional-->
  </ul>
  <hr>
  <ul>

  <li v-for="(fruta2, index) in arrayFrutas2" :key="fruta2.name">
  {{index + 1}}-{{fruta2.name}}-{{fruta2.price}}-{{fruta2.description}}</li>

  </ul>
  <hr>

  <ul>
    <li v-for="(value, propiedad, index) in objetoFruta" :key="value">{{index+1}}-{{propiedad}}: {{value}}</li>
  </ul>
  <hr>
  
  <ul>
    <template v-for="item in arrayFrutas3" :key="item.name">
        <li v-if="item.stock > 0">{{item.name}}-{{item.price}}- Stock: {{item.stock}}</li>
    </template>
  </ul>
  <hr>
  <button v-on:click.right.prevent="handleClick('Texto Right')">Activame rigth</button>
  <button @click.left="handleClick('Texto left')">Activame Left</button>
  <button @click.middle="handleClick('Texto Middle')">Activame Middle</button>

</template>




<style>
  h1{
    color: red;
  }
</style>