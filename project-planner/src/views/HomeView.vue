<!--
 * @Author: your name
 * @Date: 2022-02-23 14:45:30
 * @LastEditTime: 2022-02-24 14:38:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /project-planner/src/views/HomeView.vue
-->
<template>
  <div class="home">
  <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
          <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";
export default {
  name: 'Home',
  components: {SingleProject , FilterNav},
  data() {
    return {
      projects: [],
      current: "all"
    }
  },
  mounted(){
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id){
      this.projects = this.projects.filter((project)=>{
        return project.id !==id
      })},
    handleComplete(id){
      let p = this.projects.find(project => {
        return project.id === id
    })
    p.complete = !p.complete
  }},
  computed: {
    filteredProjects(){
      if(this.current === 'completed'){
        return this.projects.filter(project => project.complete)
      }
      if(this.current === 'ongoing'){
        return this.projects.filter(project => !project.complete)
      }
      return this.projects
    }
  }

}
</script>
