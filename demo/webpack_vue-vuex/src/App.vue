<template>
  <div>

    <count></count>
    <hr>
    <ammount></ammount>

  </div>
</template>


<script>
import count from './components/Count.vue'
import ammount from './components/Ammount.vue'


export default {
  data() {
    return {

    }
  },
  components: {
    count,
    ammount
  }
}
</script>


<style>
  
</style>