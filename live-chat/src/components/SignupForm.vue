<!--
 * @Author: your name
 * @Date: 2022-02-28 16:50:33
 * @LastEditTime: 2022-03-01 11:24:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/components/SignupForm.vue
-->
<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" required placeholder="display name" v-model="displayName">
        <input type="email" required placeholder="email" v-model="email">
        <input type="password" required placeholder="password" v-model= "password">
        <div class="error">{{error}}</div>
        <button>Sign up</button>
    </form>
</template>

<script>
import {ref} from 'vue'
import useSignup from '../composables/useSignup'
export default {
    setup(props,context) {
        const  {error ,signup} = useSignup()
        // refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async() =>{
            await signup(email.value,password.value,displayName.value)
            if(!error.value){
                context.emit('signup')
            }
        }


        return {displayName,email,password,handleSubmit}
    }
}
</script>