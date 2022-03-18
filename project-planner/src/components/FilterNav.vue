<!--
 * @Author: your name
 * @Date: 2022-02-24 13:13:34
 * @LastEditTime: 2022-02-24 14:27:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /project-planner/src/components/FilterNav.vue
-->
<template>
    <nav class="filter-nav">
        <button 
        @click="updateFilter('all')"
        :class ="{active: current === 'all'}"
        >View All</button>
        <button 
        @click="updateFilter('completed')"
        :class ="{active: current === 'completed'}"
        >Completed</button>
        <button 
        @click="updateFilter('ongoing')"
        :class ="{active: current === 'ongoing'}"
        >Ongoing</button>
    </nav>
</template>

<script>
export default {
    props: ['current'],
    methods: {
        updateFilter(by){
            this.$emit('filterChange', by)
            console.log('filter' , by)
        }
    }
}
</script>
<style>
  .filter-nav button {
      background: none;
      border: none;
      color: #bbb;
      outline: none;
      font-size: 12px;
      text-transform: uppercase;
      margin-right: 10px;
      letter-spacing: 1px;
      font-weight: bold;
      cursor: pointer;
  }
  .filter-nav button.active {
      color : #555;
  }
</style>