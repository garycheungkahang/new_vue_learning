/*
 * @Author: your name
 * @Date: 2022-03-01 12:02:17
 * @LastEditTime: 2022-03-01 13:54:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/composables/getUser.js
 */
import {ref} from 'vue'
import {projectAuth} from '../firebase/config'

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged( _user =>{
    console.log('User state change. Change user is',_user)
    user.value = _user
})

const getUser = ()=>{
    return {user}
}
export default getUser