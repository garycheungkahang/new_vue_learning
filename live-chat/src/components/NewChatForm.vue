<!--
 * @Author: your name
 * @Date: 2022-03-01 14:33:52
 * @LastEditTime: 2022-03-01 15:39:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/components/NewChatForm.vue
-->
<template>
    <form>
    <textarea
     placeholder="Type a message and hit enter to send..."
     v-model="message"
     @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{error}}</div>
    </form>
</template>

<script>
import {ref} from 'vue'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import {timestamp} from '../firebase/config'
export default {
    setup(){
        const {user} = getUser()
        const {addDoc, error} = useCollection('messages')

        const message = ref('')

        const handleSubmit = async ()=>{
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timestamp()
            }
        console.log(chat)
        await addDoc(chat)
        if(!error.value){
            message.value = ""
        }
        }
        return {message,handleSubmit,error}
    }
}
</script>

<style>
    form {
        margin: 10px;
    }
    textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }

</style>