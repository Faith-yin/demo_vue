<template>
  <div id="register">
    <h2>欢迎注册！</h2>

    <form>
      <div>
        <label>用户名</label>
        <input type="text" placeholder="请输入用户名" v-model="name" />
      </div>

      <div>
        <label>密码</label>
        <input type="password" placeholder="请输入密码" v-model="password" />
      </div>

      <div>
        <label>重复密码</label>
        <input type="password" placeholder="请再次输入密码" v-model="repassword" />
      </div>

      <button @click.prevent="register" type="button" class="mui-btn mui-btn-primary mui-btn-block">注&nbsp;&nbsp;&nbsp;册</button>

      <div>
        <span>已有账号？去</span>
        <transition mode="out-in">
          <router-link to="/">登录！</router-link>
        </transition>
      </div>

    </form>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';

export default {
  name: "Register",
  data() {
    return {
      name: '',
      password: '',
      repassword: '',
      passcard: []
    }
  },
  methods: {
    register() {  // 注册
      if(this.name == '' || this.password == '' || this.repassword == '') {
        // alert('用户名或密码不能为空，请重新输入！');
        MessageBox('提示', '用户名或密码不能为空，请重新输入！');
        }else {

          if(this.password != this.repassword) {
            // alert('两次密码输入不一致，请重新输入！');
            MessageBox('提示', '两次密码输入不一致，请重新输入！');
          }else {

            let newPasscard = {
              name: this.name,
              password: this.password
            }
            this.$http.put("http://localhost:3000/passcard/1", newPasscard)
              .then((response) => {
                // console.log(response);
                // alert('注册成功，点击跳转至登录页面！');
                MessageBox.alert('注册成功，点击跳转至登录页面！').then(action => {
                  this.$router.push('/');
                })
              })
          }
      }
    },
    fetchPasscard() {  // 加载本地已注册的账号密码
      this.$http.get("http://localhost:3000/passcard")
        .then((response) => {
          this.passcard = response.data;
          // console.log(this.passcard);
        })
    }
  },
  created () {
    this.fetchPasscard();
  }
};
</script>

<style lang="scss" scoped>

.v-enter {
  // opacity: 0;
  transform: translateX(100%);
  position: absolute;
}
.v-leave-to {
  // opacity: 0;
  transform: translateX(100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}


</style>