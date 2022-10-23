<script setup>
  import { ref } from 'vue'

  const header = ref('Shopping List App')

  const items = ref([
    {id: 1, label: '10 Party hats'},
    {id: 2, label: '2 board Games'},
    {id: 3, label: '20cups'}
  ])

  const newItem = ref('')

  const newItemPriority = ref('low')

  const newItemPriority2 = ref('low')

  const newItemPriority3 = ref(false)

  const iceCreamFlavors = ref([])

</script>

<template>
    <h1>{{header}}</h1>
    <ul>
      <input v-model="newItem" type="text" placeholder="Agrega un item">
      <!--El v-model puede tener modificadores, para ello le agregamos un punto
      y el nombre del modificador así: v-model.lazy, v-model.number, v-model.trim-->
      Priority:
      <label>
        <input type="radio" v-model="newItemPriority" value="low">
        Low
      </label>
      <label>
        <input type="radio" v-model="newItemPriority" value="high">
        High
      </label><br>
      {{newItemPriority}}
      <li v-for="({id, label}, index) in items">{{index}} - {{label}}</li><hr> <!--aquí se muestra también el index-->
    </ul><br><hr><br>

    <ul>
      <input v-model="newItem" type="text" placeholder="Agrega un item">
      <!--El v-model puede tener modificadores, para ello le agregamos un punto
      y el nombre del modificador así: v-model.lazy, v-model.number, v-model.trim-->
      <label>
        Priority:
        <select v-model="newItemPriority2">
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      </label>
      <br>
      {{newItemPriority2}}
      
    </ul><br><hr><br>

    <ul>
      <input v-model="newItem" type="text" placeholder="Agrega un item">
      <!--El v-model puede tener modificadores, para ello le agregamos un punto
      y el nombre del modificador así: v-model.lazy, v-model.number, v-model.trim-->
      <label>
        <input type="checkbox" v-model="newItemPriority3">
        High Priority
      </label>
      <br>
      {{newItemPriority3}}
      <br>
    </ul><br><hr><br>

    <ul>
      <input v-model="newItem" type="text" placeholder="Agrega un item">
      <!--El v-model puede tener modificadores, para ello le agregamos un punto
      y el nombre del modificador así: v-model.lazy, v-model.number, v-model.trim-->
      <label>
        <input type="checkbox" value="Vainilla" v-model="iceCreamFlavors">
        Vainilla
      </label>
      <label>
        <input type="checkbox" value="Chocolate" v-model="iceCreamFlavors">
        Chocolate
      </label>
      <label>
        <input type="checkbox" value="Limón" v-model="iceCreamFlavors">
        Limón
      </label>
      <br>
      {{iceCreamFlavors}}
      <br>
    </ul><br><hr><br>
</template>

<style>
  body {
  background: #177bc7;
  height: 100vh;
  width: 100vw;
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.counter {
  font-size: 0.8rem;
  padding-left: 10px;
  padding-right: 10px;
}

#app {
  background: #fff;
  padding: 2rem;
  margin: 1rem;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  width: 95%;
  max-width: 900px;
}

h1 {
  color: #3d4852;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  color: #6cb2eb;
  font-size: 1.25rem;
  transition: all 0.1s ease-in;
  margin-top: 0.5rem;
  display: block;
}

a:hover {
  color: #3490dc;
}

li,
p {
  display: flex;
  align-items: center;
  line-height: 1.75;
  letter-spacing: 0.5px;
  color: #3d4852;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.1s ease-in;
}

li:hover {
  color: #22292f;
}

li input {
  margin: 0 0.5rem 0;
}

#shopping-list > input,
#shopping-list > select {
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f8;
  color: #606f7b;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin: 0.5rem 0;
}

.add-item-form,
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-item-form input {
  width: 70%;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f8;
  color: #606f7b;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin: 0.5rem 0;
}

.btn {
  border: none;
  border-radius: 3px;
  margin: auto 0;
  padding: 0.5rem 0.75rem;
  flex-shrink: 0;
  cursor: pointer;
  font-size: 0.9re <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

<div class="wrapper">
  <HelloWorld msg="You did it!" />
</div>
</header>

<main>
<TheWelcome />
</main>m;
  letter-spacing: 0.5px;
  transition: all 0.1s ease-in;
}

.btn[disabled] {
  background: #8795a1;
}

.btn[disabled]:hover {
  background: #606f7b;
}

.btn-primary {
  background: #6cb2eb;
  color: #fff;
}

.btn-primary:hover {
  background: #3490dc;
}

.btn-cancel {
  background: #ef5753;
  color: #fff;
}

.btn-cancel:hover {
  background: #e3342f;
  color: #fff;
}

.strikeout {
  text-decoration: line-through;
  color: #b8c2cc;
}

.strikeout:hover {
  color: #8795a1;
}

.priority {
  color: #de751f;
}
input[type="checkbox"]{
  display: inline !important;
  box-shadow: none;
  width: auto;
}
</style>