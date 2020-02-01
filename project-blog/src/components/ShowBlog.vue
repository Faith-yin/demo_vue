<template>
  <div id="show">
    <h2>我的博客</h2>
    <input type="text" v-model="keywords" placeholder="请输入要搜索的关键字">
    <div v-for="(blog, index) in search(keywords)" :key="index" class="single-blog">
      <router-link :to="'/SingleBlog/' + blog.id" >
        <h2 v-rainbow="'true'" class="blog-title">{{ blog.title | myFormat }}</h2>
      </router-link>
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      blogbox: [],
      keywords: ''
    }
  },
  methods: {
    search(keywords) {
      return this.blogbox.filter(blog => {
        if (blog.title.includes(keywords)) {
          return blog;
        }
      })
    }
  },
  created() {
    // https://jsonplaceholder.typicode.com/posts
    // this.$http.get("https://jsonplaceholder.typicode.com/posts")
    axios.get("/posts")
      .then((data) => {
        // this.blogbox = data.body.slice(0, 10);
        this.blogbox = data.data.slice(0, 10);
      })
  },
  directives: {
    'rainbow': {
      bind: function(el, binding) {
        if (binding.value == 'true') {
          el.style.color = '#' + Math.random().toString(16).slice(2, 8);
        }
      }
    }
  },
  filters: {
    myFormat: function(value) {
      return value.toUpperCase().slice(0, 30);
    }
  },
}
</script>

<style lang="scss" scoped>
#show {
  input {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 3px 5px;
    color: dodgerblue;
    font-size: 15px;
  }

  .single-blog {
    margin: 15px 0;
    padding: 10px;
    border-radius: 4px;
    background-color: #eee;

    a {
      text-decoration: none;
    }

    .blog-title:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>