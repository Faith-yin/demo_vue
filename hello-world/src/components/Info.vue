<template>
    <div>
        <h1>Hello info component!</h1>
        <button @click="add()">点击计数</button>
    </div>
</template>

<script>
import store from '@/store/store.js'
export default {
    name: 'Info',
    store,
    methods: {
        add () {
            console.log('add Event from info!')
            store.commit('increase')
        }
    }
}
</script>

<style scoped>

</style>


