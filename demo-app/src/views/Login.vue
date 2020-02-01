<template>
  <div class="login">
    <!-- 登录表单 -->
    <form v-if="!isReg">
      <span>欢迎登录</span>
      <table>
        <tr>
          <td>
            <label>用户名：</label>
          </td>
          <td>
            <input type="text" v-model="name" />
          </td>
        </tr>
        <tr>
          <td>
            <label>&nbsp;&nbsp;&nbsp;密码：</label>
          </td>
          <td>
            <input type="password" v-model="password" />
          </td>
        </tr>
      </table>
      <div>
        <button class="btn btn-login active" @click="login()">登录</button>
        <button class="btn btn-reg" @click="reg()">注册</button>
      </div>
    </form>

    <!-- 注册表单 -->
    <form v-if="isReg">
      <span>请输入以下信息</span>
      <table>
        <tr>
          <td>
            <label>&nbsp;&nbsp;&nbsp;&nbsp;用户名：</label>
          </td>
          <td>
            <input type="text" v-model="name" />
          </td>
        </tr>
        <tr>
          <td>
            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码：</label>
          </td>
          <td>
            <input type="password" v-model="password" />
          </td>
        </tr>
        <tr>
          <td>
            <label>再次密码：</label>
          </td>
          <td>
            <input type="password" v-model="repeat" />
          </td>
        </tr>
      </table>
      <div>
        <button class="btn btn-confirm active" @click="addUser()">确定</button>
        <button class="btn btn-cancel" @click="cancel()">取消</button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      isReg: false,
      name: "",
      password: "",
      repeat: ""
    };
  },
  methods: {
    login() {
      if (
        localStorage.getItem("name") === this.name &&
        localStorage.getItem("password") === this.password
      ) {
        this.$router.push("/home/list");
      } else {
        alert("用户名或密码不正确！");
        (this.name = ""), (this.password = "");
      }
    },
    reg() {
      (this.name = ""), (this.password = ""), (this.isReg = true);
    },
    addUser() {
      if (this.password === this.repeat) {
        localStorage.setItem("name", this.name),
          localStorage.setItem("password", this.password);
        (this.name = ""),
          (this.password = ""),
          (this.repeat = ""),
          (this.isReg = false);
      } else {
        alert("两次密码输入不正确！");
      }
    },
    cancel() {
      (this.name = ""), (this.password = ""), (this.repeat = "");
      this.isReg = false;
    }
  }
};
</script>


<style lang="scss" scoped>
.login {
  margin: 20px;
}

table {
  border-spacing: 0 10px;
}

span {
  font-size: 22px;
  font-weight: 600;
  display: block;
  margin-bottom: 30px;
}

.btn {
  width: 160px;
  height: 40px;
  margin-top: 20px;
  color: #42b983;
  background-color: #fff;
  border: 1px solid #42b983;
  border-radius: 5px;
}

input {
  width: 240px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ecebec;
  font-size: 18px;
}

.active {
  color: #fff;
  background-color: #42b983;
}
</style>
