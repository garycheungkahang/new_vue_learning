<!--
 * @Author: your name
 * @Date: 2022-02-23 14:45:30
 * @LastEditTime: 2022-02-24 11:01:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /project-planner/src/App.vue
-->
<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar }
}
</script>

<style>
body {
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>
