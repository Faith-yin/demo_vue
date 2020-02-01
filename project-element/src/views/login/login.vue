<template>
  <div class="layout-login">
    <div class="login">
      <div class="title-wrapper">
        <h2>后台系统</h2>
        <el-tooltip placement="bottom" content="切换语言" effect="light">
          <img src="../../assets/img/britain.png" />
        </el-tooltip>
      </div>
      <div class="form-wrapper">
        <el-form
          :model="passInfo"
          :rules="rules"
          ref="passInfo"
          label-width="100px"
          class="demo-passInfo"
        >
          <el-form-item label="账号" prop="name">
            <el-input v-model="passInfo.name" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="passInfo.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="register()" size="mini" plain class="reg-btn">注册</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login()" class="log-btn">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      passInfo: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { message: "请输入账号", trigger: "blur" },
          { min: 2, max: 12, message: "长度在 2 到 12 个字符", trigger: "blur" }
        ],
        password: [
          { message: "请输入密码", trigger: "blur" },
          { min: 2, max: 12, message: "长度在 2 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //登录
    login() {
      console.log(this.passInfo);
      this.$router.push("/atlas");
    },
    //注册
    register() {
      this.$router.push("/register");
    }
  }
};
</script>


<style lang="scss" scoped>
.layout-login {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login.jpg") no-repeat 0 0/100% 100%;
}

.login {
  width: 600px;
  position: relative;
  background-color: #fff;
  margin: 100px auto;
  padding: 20px 0;

  .title-wrapper {
    margin-bottom: 30px;
    text-align: center;
    position: relative;
    h2 {
      display: inline-block;
    }
    img {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 70px;
      top: 25px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .el-input {
    width: 440px;
    &:focus {
      background-color: rgb(220, 223, 63);
    }
  }
  .log-btn {
    width: 430px;
  }
  .reg-btn {
    margin-left: 380px;
  }
}
</style>