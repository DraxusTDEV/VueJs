import {defineStore} from 'pinia'

export const useUserStore = defineStore('userStore',{
    state: () => {
        return {
            userData: 'juan@test.com'
        }
    },
    getters: {
        minuscula(state) {
            return state.userData.toLowerCase()
        },
    },
    actions: {
        registerUser(name){
            this.userData = name;
        }
    }
})