/*
 * @Author: your name
 * @Date: 2022-03-01 10:03:57
 * @LastEditTime: 2022-03-01 15:56:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/composables/useSignup.js
 */

import {ref} from "vue"
import { projectAuth } from "@/firebase/config";
const error = ref(null)
const signup = async (email,password,displayName)=>{
    error.value = null;
    try{
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if(!res){
            throw new Error('Could not complete the signup')
        }
        await res.user.updateProfile({displayName})
        error.value = null
        
        return res

    }catch(err){
        console.log(err.message)
        error.value = err.message

    }
}

const useSignup = ()=>{
    return {error ,signup}
}

export default useSignup