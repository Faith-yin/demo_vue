<template>
  <div class="layout-register">
    <div class="register">
      <div class="title-wrapper">
        <h2>注册页面</h2>
      </div>
      <div class="form-wrapper">
        <el-form
          :model="passInfo"
          :rules="rules"
          ref="passInfo"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="name">
            <el-input v-model="passInfo.name" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="passInfo.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password">
            <el-input v-model="passInfo.repassword" show-password placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="authcode">
            <el-input v-model="passInfo.authcode" class="authcode"></el-input>
            <!-- 此处是生成验证码区域 -->
            <el-button type="success" @click="login()" size="mini" plain class="log-btn">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register()" class="reg-btn">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "register",
  data() {
    return {
      passInfo: {
        name: "",
        password: "",
        repassword: "",
        authcode: ""
      },
      rules: {
        name: [
          { message: "请输入账号", trigger: "blur" },
          { min: 2, max: 12, message: "长度在 2 到 12 个字符", trigger: "blur" }
        ],
        password: [
          { message: "请输入密码", trigger: "blur" },
          { min: 2, max: 12, message: "长度在 2 到 12 个字符", trigger: "blur" }
        ],
        authcode: [
          { message: "请输入验证码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    register() { //注册
      console.log(this.passInfo);
    },
    login() { // 登录
      this.$router.push('/');
    }
  }
};
</script>


<style lang="scss" scoped>
.layout-register {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login.jpg') 0 0/100% 100% no-repeat;
}
.register {
  width: 600px;
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
  }
  .el-input {
    width: 440px;
  }
  .authcode {
    display: inline-block;
    width: 200px;
  }
  .reg-btn {
    width: 440px;
  }
  .log-btn {
    margin-left: 180px;
  }
}
</style>