<!--
 * @Author: your name
 * @Date: 2022-02-28 17:05:26
 * @LastEditTime: 2022-03-01 14:21:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/components/LoginForm.vue
-->
<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <input type="email" required placeholder="email" v-model="email">
        <input type="password" required placeholder="password" v-model="password"> 
        <div class="error">{{error}}</div>
        <button>Log in</button>
    </form>
</template>

<script>
import {ref} from 'vue';
import useLogin from '../composables/useLogin'
export default {
    setup(props,context) {
        const email = ref('')
        const password = ref('')

        const {error,login} = useLogin()

        const handleSubmit = async() =>{
            await login(email.value,password.value)
            if(!error.value){
                context.emit('login')
            }
        }
        return {email, password,handleSubmit,error}
    }
}
</script>