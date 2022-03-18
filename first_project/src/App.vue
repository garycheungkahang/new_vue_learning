<template>
  <h1>{{title}}</h1>
  <teleport to=".models" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
    <template v-slot:links>
      <a href="#">sign up now</a>
      <a href="#">more info</a>
    </template>
      <h1>Ninja Giveaway</h1>
      <p>Grab your ninja for half price!</p>
    </Modal>
  </teleport>

    <teleport v-if="showModalTwo">
    <Modal theme="sale" @close="toggleModalTwo">
      <h1>Sign up to the newsletter</h1>
      <p>For updates and promo codes!</p>
    </Modal>
  </teleport>
  <input type="text" ref="name">
  <button @click.alt="toggleModal">open modal (alt)</button>
  <button @click="toggleModalTwo">open modal</button>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {Modal},
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your ninja swag for half price!',
      showModal: false,
      showModalTwo: false,
    }
  },methods:{
    handleClick(){
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal(){
      this.showModal = !this.showModal
      // console.log(this.showModal)
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
      // console.log(this.showModal)
    },
  }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
