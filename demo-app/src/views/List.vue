<template>
    <div class="list">
        <ul>
            <li v-for="(item,index) in pageLists"
                :key="index">
                <div class="list-item">
                    <div class="item-title">
                        {{item.title}}
                    </div>
                    <div class="line">———————————————————</div>
                    <div class="item-content">
                        {{item.content}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
import store from '@/store/store.js'
export default {
    name: "List",
    store,
    // 动态监听lists的变化
    computed: {
        pageLists () {
            return store.state.lists
        }
    }
}
</script>


<style lang="scss" scoped>
.list {
    margin: 20px;
}

.list-item {
    width: 340px;
    height: 105px;
    border-radius: 5px;
    border: 1px solid #ECEBEC;
    box-sizing: border-box;
    padding: 0 5px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 5px rgb(190, 189, 187);
}

.item-title {
    width: 330px;
    height: 20px;
    margin-top: 5px;
    line-height: 20px;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.item-content {
    width: 330px;
    height: 60px;
    margin-top: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.line {
    height: 1px;
    text-align: center;
    color: #ECEBEC;
}

</style>
