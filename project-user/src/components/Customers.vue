<template>
  <div class="customers container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h2>用户管理系统</h2>

    <input type="text" class="form-control" v-model="keywords" placeholder="请输入要搜索的关键词" />
    <br />

    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in search(keywords)" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.email }}</td>
          <td>
            <router-link class="btn btn-default" :to="'/CustomerDetails/' + customer.id">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  name: "customers",
  data() {
    return {
      customers: [], // 此对象里面盛放的是数组
      alert: "",
      keywords: ""
    };
  },
  methods: {
    fetchCustomers() {
      // 发出 get 请求，获取用户信息
      this.$http
        .get("http://localhost:3000/users")
        .then(response => {
          // console.log(response);
          this.customers = response.data;
        })
        .catch(err => {
          alert("本地数据链接失败！");
        });
    },
    search(keywords) {
      // 根据关键词进行搜索
      return this.customers.filter(item => {
        if (item.name.includes(keywords)) {
          return item;
        }
      });
    }
  },
  created() {
    // 每次加载页面时执行的方法
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchCustomers();
  },
  updated() {
    // 更新页面时执行的方法
    this.fetchCustomers();
  },
  components: {
    Alert
  }
};
</script>

<style lang="scss" scoped>
</style>