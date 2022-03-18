/*
 * @Author: your name
 * @Date: 2022-03-01 11:42:40
 * @LastEditTime: 2022-03-01 13:45:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/composables/useLogout.js
 */
import {ref} from "vue"
import { projectAuth } from "@/firebase/config"

const error = ref(null)

const logout = async () =>{
    error.value = null
    try{
        const res = await projectAuth.signOut()
        return res
    }catch(err){
        console.log(err.value)
        error.value = "Incorrect login credentails"
    }
}

const useLogout = ()=>{
    return{error,logout}
}

export default useLogout