import {createRouter, createWebHistory} from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'


//Creamos rutas:
const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register}
]

//inicializo create router
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;