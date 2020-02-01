<template>
  <div id="contact">
    <div class="title-bar">
      <router-link to="/Home">
        <img src="../../assets/images/return.png" />
      </router-link>

      <span class="title">联系我们</span>
    </div>
    <form>
      <label>姓名</label>
      <br />
      <input type="text" v-model="advice.name" />
      <br />

      <label>建议/吐槽/评价</label>
      <br />
      <textarea cols="30" rows="10" v-model="advice.content"></textarea>
      <br />

      <label>QQ/邮箱/手机</label>
      <br />
      <input type="text" v-model="advice.phone" />
      <br />

      <button @click.prevent="submit">提交</button>
    </form>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { MessageBox } from "mint-ui";

export default {
  name: "Contact",
  data() {
    return {
      advice: {}
    };
  },
  methods: {
    submit() {
      // 提交建议
      if (!this.advice.name || !this.advice.content || !this.advice.phone) {
        // alert('请填写相应内容！');
        MessageBox("提示", "请填写相应内容！");
      } else {
        let newAdvice = {
          name: this.advice.name,
          content: this.advice.content,
          phone: this.advice.phone
        };
        this.$http
          .post("http://localhost:3000/advice", newAdvice)
          .then(response => {
            // console.log(response);
            // console.log('提交成功，谢谢您的填写！');
            (this.advice.name = ""),
              (this.advice.content = ""),
              (this.advice.phone = ""),
              Toast({
                message: "提交成功，感谢您的填写！",
                position: "bottom",
                duration: 2000
              });
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#contact {
  .title-bar {
    padding: 15px 0;

    .title {
      margin-left: 100px;
    }
  }
}
</style>