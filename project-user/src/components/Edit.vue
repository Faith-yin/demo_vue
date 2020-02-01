<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>

    <h1 class="page-header">
      编辑用户
      <span class="pull-right">
        <button @click="cancel" class="btn btn-primary">取消</button>
        <button @click="updateCustomer" class="btn btn-primary">确认</button>
      </span>
    </h1>
    
    <form>
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" v-model="customer.name" placeholder="name" />
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" v-model="customer.phone" placeholder="phone" />
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" v-model="customer.email" placeholder="email" />
        </div>
        <div class="form-group">
          <label>学历</label>
          <input
            type="text"
            class="form-control"
            v-model="customer.education"
            placeholder="education"
          />
        </div>
        <div class="form-group">
          <label>毕业院校</label>
          <input
            type="text"
            class="form-control"
            v-model="customer.graduationschool"
            placeholder="graduationschool"
          />
        </div>
        <div class="form-group">
          <label>职业</label>
          <input
            type="text"
            class="form-control"
            v-model="customer.profession"
            placeholder="profession"
          />
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea class="form-control" v-model="customer.profile" rows="10"></textarea>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  name: "edit",
  data() {
    return {
      customer: {}, // 此对象里面盛放的是对象
      alert: "",
    };
  },
  methods: {
    fetchCustomer(id) {  // 发出 get 请求，获取用户信息
      this.$http.get("http://localhost:3000/users/" + id)
        .then((response) => {
          // console.log(response);
          this.customer = response.data;
        });
    },
    updateCustomer(e) {  // 发出 put 请求，修改信息操作
  		if (!this.customer.name || !this.customer.phone || !this.customer.email) {
  			this.alert = "请添加对应的信息!";
  		}else {
  			let updateCustomer = {
  				name: this.customer.name,
  				phone: this.customer.phone,
  				email: this.customer.email,
  				education: this.customer.education,
  				graduationschool: this.customer.graduationschool,
  				profession: this.customer.profession,
  				profile: this.customer.profile
  			}
  			this.$http.put("http://localhost:3000/users/"+this.$route.params.id, updateCustomer)
  				.then((response) => {
  					// console.log(response);
  					this.$router.push({ path:"/", query:{ alert:"用户信息更新成功！" } });
  				})
  			e.preventDefault();
  		}
  		e.preventDefault();
    },
    cancel() {  // 取消删除的操作
      this.$router.push({ path: '/CustomerDetails/' + this.$route.params.id });
    }
  },
  created() {  // 每次加载页面时执行的方法
    this.fetchCustomer(this.$route.params.id);
  },
  components: {
    Alert
  }
};
</script>

<style lang="scss" scoped>
</style>