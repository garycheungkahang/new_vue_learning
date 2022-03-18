<!--
 * @Author: your name
 * @Date: 2022-03-01 11:31:20
 * @LastEditTime: 2022-03-01 14:08:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/components/Navbar.vue
-->
<template>
    <nav v-if="user">
        <div>
            <p>Hey there is {{user.displayName}}</p>
            <p class="email">Currently logged in as {{user.email}}</p>
        </div>
        <button @click="handleClick">Logout</button>
    </nav>
</template>
<script>
import useLogout from "../composables/useLogout";
import getUser from '../composables/getUser';

export default {
    setup(){
        const {logout,error} = useLogout()
        const { user } = getUser()

        const handleClick = async ()=>{
            await logout()
            if(!error.value){
                console.log('user logged out')
            }
        }
        return {handleClick,user}
    }
}
</script>
