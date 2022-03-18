/*
 * @Author: your name
 * @Date: 2022-03-01 14:51:22
 * @LastEditTime: 2022-03-01 15:21:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/composables/useCollection.js
 */
import {ref} from 'vue'
import { projectFirestore } from '@/firebase/config'

const useCollection =(collection)=>{
    const error = ref(null)

    const addDoc = async (doc)=>{
        error.value = null
        try{
            await projectFirestore.collection(collection).add(doc)
        }catch(err){
            console.log(err.message)
            error.value = 'could not send the message'
        }
    }
    return { error, addDoc }
}
export default useCollection