<!--
 * @Author: your name
 * @Date: 2022-02-24 11:02:38
 * @LastEditTime: 2022-02-24 12:19:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /project-planner/src/views/EditProject.vue
-->
<template>
    <form @submit.prevent="handleSubmit">
        <label>Title:</label>
        <input type="text" v-model="title" required>
        <label>Details:</label>
        <textarea v-model="details" required></textarea>
        <button>Update Project</button>
    </form>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            title:"",
            details:"",
            uri: "http://localhost:3000/projects/" +this.id
        }
    },
    mounted() {
        fetch(this.uri)
          .then(res => res.json())
          .then(data => {
              this.title = data.title
              this.details = data.details
          })
    },
    methods: {
        handleSubmit() {
            fetch(this.uri,{
                method: 'PATCH',
                headers: {'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: this.title,
                    details: this.details
                })
            }).then(()=>{
                this.$router.push('/')
            }).catch(err =>console.log(err))
        }
    }
}
</script>

<style>
</style>