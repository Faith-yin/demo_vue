<template>
  <div id="home">

    <h1>Pizza点餐系统</h1>

    <router-link to="/Home" class="link homeLink">主页</router-link>
    <router-link to="/Menu" class="link menuLink">菜单</router-link>
    <router-link to="/Admin" class="link adminLink">管理</router-link>
    <router-link to="/About" class="link aboutLink">关于我们</router-link>

    <br>

    <button @click="goToMenu" class="btn">去点餐...</button>

  </div>
</template>


<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    data () {
      return {
        
      }
    },
    goToMenu() {
      // 跳转到上一次浏览的页面
      // this.$router.go(-1)

      // 指定的跳转地址
      // this.$router.replace('/Menu')

      // 指定跳转路由的名字下
      // this.$router.replace({ name: 'menu' })

      // 通过push进行跳转
      // this.$router.push('/Menu')
      this.$router.push({name: 'menu'})
    }
  }
}
</script>


<style lang="scss" scoped>
#home {
  text-align: center;

  .link {
    color: #000;
    border: none;
    margin: 10px;
    padding: 10px 20px;
    background-color: skyblue;
    text-decoration: none;
  }

  .link:hover {
    background-color: dodgerblue;
  }

  .btn {
    font-size: 30px;
    font-weight: 600;
    background-color: yellowgreen;
    padding: 50px 100px;
    border: none;
    margin: 100px;
    border-radius: 10px;
  }

  .btn:hover {
    background-color: green; 
  }
}
</style>