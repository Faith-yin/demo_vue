<template>
  <div class="customer-details container">
    
    <h1 class="page-header">
      {{ customer.name }}
      <span class="pull-right">
        <router-link to="/" class="btn btn-default ">返回</router-link>
        <router-link class="btn btn-info" :to="'/Edit/' + customer.id">编辑</router-link>
        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
      </span>
    </h1>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone">{{ customer.phone }}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-list-alt">{{customer.email}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-info-sign">{{ customer.education }}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus">{{customer.graduationschool}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-file">{{ customer.profession }}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-pencil">{{customer.profile}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "customer-details",
  data() {
    return {
      customer: '', // 此对象里面盛放的是字符串
    };
  },
  methods: {
    fetchCustomers(id) {  // 发出 get 请求，获取用户信息
      this.$http.get("http://localhost:3000/users/" + id)
        .then((response) => {
          // console.log(response);
          this.customer = response.data;
        });
    },
    deleteCustomer(id) {  // 发出 delete 请求，根据id进行删除操作
      var or = window.confirm("是否确认删除？");

      if(or == true) {
        // console.log(id);
        this.$http.delete("http://localhost:3000/users/"+id)
          .then((response) => {
            this.$router.push({ path: '/', query: { alert: "用户信息删除成功！" } })
          })
      }else {
        return;
      }  
    }
  },
  created () {  // 每次加载页面时执行的方法
    this.fetchCustomers(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
</style>