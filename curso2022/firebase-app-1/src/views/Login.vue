<template>
    <div>
        <h1>Login</h1>
        <p>{{mayuscula}}</p>
        <p>{{userStore.minuscula}}</p>
    </div>
</template>

<script setup>
    import {computed} from 'vue'
    import {useUserStore} from '../stores/user.js'

    const userStore = useUserStore()

    const mayuscula = computed(() => userStore.userData.toUpperCase())


</script>

