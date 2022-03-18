<!--
 * @Author: your name
 * @Date: 2022-02-24 10:31:29
 * @LastEditTime: 2022-02-24 14:08:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /project-planner/src/components/Navbar.vue
-->
<template>
    <nav class="main-nav">
        <router-link :to="{ name: 'Home' }">Projects</router-link>
        <router-link :to="{ name: 'AddProject' }">Add A New Project</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
 .main-nav {
     text-align: center;
     margin: 40px auto;
 }
 .main-nav a{
     display: inline-block;
     text-decoration: none;
     margin: 0 10px;
     color: #999;
     font-size: 18px;
 }
 a.router-link-active{
     border-bottom: 2px solid #00ce89;
     padding-bottom: 4px;
 }
</style>