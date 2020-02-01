<template>
    <div class="user">
        <ul>
            <li><router-link :to="{name: 'add'}">添加事件</router-link></li>
            <li><router-link :to="{name: 'login'}">退出登录</router-link></li>
        </ul>
    </div>
</template>


<script>
export default {
    name: "User",
    methods: {
        
    }
}
</script>


<style lang="scss" scoped>
.user {
    margin: 20px;
}

li {
    font-size: 18px;
    margin: 10px;
}


</style>



