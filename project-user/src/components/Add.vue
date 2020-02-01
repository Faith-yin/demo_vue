<template>
  <div class="add container">
  <Alert v-if="alert" v-bind:message="alert"></Alert>

    <h1 class="page-header">添加用户</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" v-model="customer.name" placeholder="name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" v-model="customer.phone" placeholder="phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" v-model="customer.email" placeholder="email">
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" v-model="customer.education" placeholder="education">
        </div>
        <div class="form-group">
          <label>毕业院校</label>
          <input type="text" class="form-control" v-model="customer.graduationschool" placeholder="graduationschool">
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" class="form-control" v-model="customer.profession" placeholder="profession">
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea class="form-control" v-model="customer.profile" rows="10"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: "add",
  data () {
    return {
      customer: {}, // 此对象里面盛放的是对象
      alert: ''
    }
  },
  methods: {
    addCustomer(e) {  // 发出 post 请求，添加用户信息
    // console.log(e);
      if(!this.customer.name || !this.customer.phone || !this.customer.email) {
        this.alert = "请添加对应信息！";
      }else {
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          graduationschool: this.customer.graduationschool,
          profession: this.customer.profession,
          profile: this.customer.profile
        }
        this.$http.post("http://localhost:3000/users", newCustomer)
          .then((response) => {
            this.$router.push({path: '/', query: { alert: "用户信息添加成功！" }});
          })
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  components: {
    Alert
  }
}
</script>

<style lang="scss" scoped>

</style>