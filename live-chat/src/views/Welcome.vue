<!--
 * @Author: your name
 * @Date: 2022-02-28 16:11:27
 * @LastEditTime: 2022-03-01 14:22:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/views/Welcome.vue
-->
<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
        <LoginForm @login="enterChat"/>
        <p>No account yet?<span @click="showLogin = false">Signup</span>instead</p>
    </div>
    <div v-else>
        <SignupForm @signup="enterChat"/>
        <p>Already registered<span @click="showLogin = true">Login</span>instead</p>

    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue'
import {ref} from 'vue'
import {useRouter} from 'vue-router'
export default {
    components:{SignupForm , LoginForm},
    setup(){
        const showLogin = ref(true)
        const router = useRouter()
        const enterChat = ()=>{
            router.push({name:'Chatroom'})
        }

        return {showLogin,enterChat}
    }
}
</script>

<style>
  .welcome {
      text-align: center;
      padding: 20px 0;
  }
  .welcome form {
      width: 300px;
      margin: 20px auto;
  }
  .welcome label{ 
      display: block;
      margin: 20px 0 10px;
  }
  .welcome span{
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
  }
  .welcome input{
      width: 100%;
      padding: 10px;
      border-radius: 20px;
      border: 1px solid #eee;
      outline: none;
      color:#999;
      margin: 10px auto;
      text-align: left;
  }
</style>