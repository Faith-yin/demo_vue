<template>
    <div class="add">
        <form action="">
            <p>标题：</p>
            <!-- v-model 指令用于在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定 -->
            <input type="text" v-model="title">
            <p>内容：</p>
            <textarea rows="15" cols="30" type="text" v-model="content"></textarea><br>
            <button class="btn btn-add active" @click="add()">完成</button>
            <button class="btn btn-cancel" @click="cancelEnevt" >取消</button>
        </form>
    </div>
</template>


<script>
import store from '@/store/store.js'
export default {
    name: "Add",
    store,
    data () {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        add () {
            store.commit('addItem', {
                title: this.title,
                content: this.content,
            }),
            this.title = '',
            this.content = '',
            this.$router.push('/home/list')
        },
        cancelEnevt () {
            this.title = '',
            this.content = '',
            this.$router.push('/home/list')
        }
    }
}
</script>


<style lang="scss" scoped>
.add {
    margin: 20px;
}

p {
    font-size: 18px;
    margin-bottom: 10px;
}

input {
    width: 320px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ECEBEC;
    margin-bottom: 10px;
    font-size: 18px;
}

textarea {
    font-size: 18px;
    font-family: Arial;
    border-radius: 5px;
    border: 1px solid #ECEBEC;
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

.active {
    color: #fff;
    background-color: #42b983;
}

</style>
