<template>
    <div class="about">
        <h1>This is an about page</h1>
        <p>{{msg}}</p>
    </div>
</template>

<script>
import store from '@/store/store.js'
export default {
    name: 'About',
    store,
    data () {
        return {
            msg: store.state.count
        }
    }
}

</script>

<style scoped>

</style>
