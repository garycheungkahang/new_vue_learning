<!--
 * @Author: your name
 * @Date: 2022-03-01 11:05:40
 * @LastEditTime: 2022-03-02 14:08:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/views/Chatroom.vue
-->
<template>
    <div class="container">
        <Navbar />
        <ChatWindow />
        <NewChatForm />
    </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import {watch} from 'vue'
import {useRouter} from 'vue-router'

export default {
    components: {Navbar,NewChatForm,ChatWindow},
    setup() {
        const {user} = getUser()
        const router = useRouter()
        watch(user,()=>{
            if(!user.value){
                router.push({name:"Welcome"})
            }
        })
    }
}
</script>

<style>
    nav{
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    nav p.email{
        font-size: 14px;
        color: #999;
    }
</style>