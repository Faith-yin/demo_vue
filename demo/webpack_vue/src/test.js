// 在 ES6中，使用 export default 和 export 向外暴露成员


// 在一个模块中，export default 只允许向外暴露一次
export default {
  name: 'zs',
  age: 20
}


// 注意：使用export向外暴露的成员的时候，
// 只能用 { } 的形式接收，即 按需导出，需要则定义，不需要则不需要在{}中定义；
// 必须严格按照导出时候的命名，来使用 { } 按需接收；
// 如果想换个名称接收，还是用 as 来起别名；
export var title = '小星星'
export var title2 = '小星星2'

