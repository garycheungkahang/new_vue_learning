/*
 * @Author: your name
 * @Date: 2022-02-28 16:09:49
 * @LastEditTime: 2022-03-02 11:21:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import {projectAuth} from '../firebase/config'
const requireAuth = (to,from,next)=>{
  let user = projectAuth.currentUser
  console.log('current user in auth guard:',user )
  if(!user){
    next({name:"welcome"})
  }else{
    next()
  }
}

const requireNoAuth = (to,from,next)=>{
  let user = projectAuth.currentUser
  console.log('current user in auth guard: ',user)
  if(user){
    next({name: 'Chatroom'})
  }else{
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },{
    path: "/chatroom",
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
