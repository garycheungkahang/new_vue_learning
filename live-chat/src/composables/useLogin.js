/*
 * @Author: your name
 * @Date: 2022-03-01 10:50:32
 * @LastEditTime: 2022-03-01 14:17:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/composables/useLogin.js
 */
import {ref} from 'vue'
import { projectAuth } from '@/firebase/config'

const error = ref(null)

const login = async (email, password)=>{
    error.value = null
    try{
    const res = await projectAuth.signInWithEmailAndPassword(email,password)
    error.value = null
    
    return res
    }catch(err){
        console.log(err.value)
        error.value = 'Incorrect login credentials'
    }
}

const useLogin =()=>{
    return {error,login}    
}

export default useLogin