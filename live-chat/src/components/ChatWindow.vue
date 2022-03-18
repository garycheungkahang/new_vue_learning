<!--
 * @Author: your name
 * @Date: 2022-03-01 16:15:39
 * @LastEditTime: 2022-03-02 10:25:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/components/ChatWindow.vue
-->
<template>
    <div class="chat-window">
        <div v-if="error">
        {{error}}
        </div>
        <div v-if="documents" class="messages" ref="messages">
            <div v-for="doc in documents" :key="doc.id" class="single">
            <span class="created-at">{{doc.createdAt}}</span>
            <span class="name">{{doc.name}}</span>
            <span class="message">{{doc.message}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import {formatDistanceToNow} from "date-fns"
import {computed,ref,onUpdated} from 'vue';
export default {
    setup(){
        const {error, documents} = getCollection('messages')
        const formattedDocuments = computed(()=>{
            if(document.value){
                return documents.value.map(doc =>{
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return {...doc,createdAt: time}
                })
            }
        })
        const messages = ref(null)
        onUpdated(()=>{
            messages.value.scrollTop = messages.value.scrollHeight
            console.log(messages.value.scrollHeight)
            console.log(messages.value.scrollTop)

        })

        return {error,documents,formattedDocuments,messages}
    }
}
</script>

<style>
    .chat-window {
        background: #fafafa;
        padding: 30px 20px;
    }
    .single {
        margin: 18px 0;
    }
    .created-at{
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
    }
    .name {
        font-weight: bold;
        margin-right: 6px;
    }
    .messages {
        max-height: 400px;
        overflow: auto;
    }
</style>