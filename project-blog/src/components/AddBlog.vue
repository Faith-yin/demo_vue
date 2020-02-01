<template>
  <div id="add">
    <h2>添加博客</h2>

    <form v-if="!summited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" />

      <label>博客内容</label>
      <textarea type="text" v-model="blog.content" />

      <label>博客分类</label>
      <div class="checkbox">
        <input type="checkbox" value="Vue.js" v-model="blog.tagbox" />
        <label>Vue.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.tagbox" />
        <label>Node.js</label>
        <input type="checkbox" value="React.js" v-model="blog.tagbox" />
        <label>React.js</label>
        <input type="checkbox" value="Angular4" v-model="blog.tagbox" />
        <label>Angular4</label>
      </div>

      <label>作者</label>
      <select v-model="blog.author">
        <option v-for="(author, index) in authorbox" :key="index">{{author}}</option>
      </select>

      <button @click.prevent="add">添加博客</button>
    </form>

    <div v-if="summited" class="succeed">
      <h3>您的博客已添加成功！</h3>
      <router-link to="/ShowBlog">返回我的博客</router-link>
    </div>

    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：{{blog.content}}</p>
      <p>博客分类：</p>
      <p v-for="(tag, index) in blog.tagbox" :key="index" class="tag">&nbsp;&nbsp;{{tag}}</p>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        tagbox: [],
        author: ""
      },
      authorbox: ["Tom", "Jerry", "Marry", "Daniel"],
      summited: false
    };
  },
  methods: {
    add() {
      console.log(this.blog);
      // https://jsonplaceholder.typicode.com/posts
      // this.$http
      axios
        .post("/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        })
        .then((data) => {
          // console.log(data.body);
          this.summited = true;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#add {
  width: 800px;
  margin: 0 auto;

  form {
    input[type="text"] {
      width: 100%;
      margin: 10px 0 15px;
      font-size: 15px;
      padding: 5px;
    }

    textarea {
      width: 100%;
      height: 200px;
      margin: 10px 0 15px;
      font-family: Arial;
      font-size: 15px;
      padding: 5px;
    }

    label {
      display: block;
    }

    .checkbox {
      margin: 10px 0 15px;

      label,
      input {
        display: inline-block;
      }

      label {
        margin: 0 20px 0 0;
      }
    }

    select {
      display: block;
      width: 100%;
      margin: 10px 0 15px;
      font-size: 15px;
      padding: 5px;
    }

    button {
      padding: 10px 15px;
      margin: 10px 0 15px;
      background-color: dodgerblue;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      color: #fff;
      font-size: 16px;
    }
  }

  .succeed {
    a {
      text-decoration: none;
      color: dodgerblue;
      cursor: pointer;
    }
  }

  #preview {
    margin: 30px 0 0;
    padding: 10px;
    border: 1px dashed rgb(207, 204, 204);

    .tag {
      display: inline;
    }
  }
}
</style>