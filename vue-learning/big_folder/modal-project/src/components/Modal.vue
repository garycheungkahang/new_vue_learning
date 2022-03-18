<!--
 * @Author: your name
 * @Date: 2022-02-21 14:50:48
 * @LastEditTime: 2022-02-21 16:25:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /modal-project/src/components/Modal.vue
-->
<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:['theme'],
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style>
 .modal {
     width: 400px;
     padding: 20px;
     margin: 100px auto;
     background: white;
     border-radius: 10px;
 }
 .backdrop{
     top:0;
     position: fixed;
     background: rgba(0,0,0,0.5);
     width:100%;
     height:100%;
 }
 h1{
     color:#03cfb4;
     border:none;
     padding:0;
 }
 .modal h1{
     color: #03cfb4;
     border: none;
     padding:0;
 }
 .modal p{
     font-style:normal;
 }
 .modal .actions{
     text-align:center;
     margin: 30px 0 10px 0;
     color: #333;
 }
  .modal .actions a{
     color: #333;
     padding: 8px;
     border: 1px solid #eee;
     border-radius: 4px;
     text-decoration: none;
     margin: 10px;
 }
 .modal.sale{
     background: white;
     color: black;
 }
 .modal.sale h1{
     color: black;
 }
</style>