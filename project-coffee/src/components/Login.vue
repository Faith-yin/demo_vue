<template>
  <div id="login">
    <h2>欢迎来到 Coffee App！</h2>

    <form>
      <div>
        <label>用户名</label>
        <input type="text" placeholder="请输入用户名" v-model="name" />
      </div>

      <div>
        <label>密码</label>
        <input type="password" placeholder="请输入密码" v-model="password" @keyup.enter="login()" />
      </div>

      <button
        @click.prevent="login"
        type="button"
        class="mui-btn mui-btn-primary mui-btn-block"
      >登&nbsp;&nbsp;&nbsp;录</button>

      <div>
        <span>没有账号？去</span>
        <transition mode="out-in">
          <router-link to="/Register">注册！</router-link>
        </transition>
      </div>
    </form>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { MessageBox } from 'mint-ui'

export default {
  name: "Login",
  data() {
    return {
      name: '',
      password: '',
      passcard: []
    }
  },
  methods: {
    login() {  // 登录
        if(this.name === this.passcard[0].name && 
          this.password === this.passcard[0].password) {
            Toast({
              message: '登录成功！',
              position: 'bottom',
              duration: 2000
            });
            this.$router.push('/Home');
        }else {
          // alert('用户名或密码不正确，请重新输入！');
          MessageBox('提示', '用户名或密码不正确，请重新输入！');
        }
    },
    fetchPasscard() {  // 加载本地已注册的账号密码
      this.$http.get("http://localhost:3000/passcard")
        .then((response) => {
          console.log(response);
          this.passcard = response.data;
          // console.log(this.passcard);
        })
        .catch((err) => {
          console.log(err);
        })
    },
  },
  created() {
    this.fetchPasscard();
  }
};
</script>

<style lang="scss" scoped>
.v-enter {
  // opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-leave-to {
  // opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>