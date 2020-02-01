<template>
  <div>

    <button @click="decrease">减少</button>
    <button @click="add">增加</button>

    <input type="text" v-model="$store.state.count">
  </div>
</template>



<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    add() {
      this.$store.commit('increment')
    },
    decrease() {
      this.$store.commit('subtract', 10)
    }
  }
}
</script>



<style lang="">
  
</style>