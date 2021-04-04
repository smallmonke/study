
let a = require('./a')
console.log(a);
//1.直接在vs code中调试
//2.可以在chrome
// let a = (function(exports,module,require,__dirname,__firname) {
    
// })('...5个参数')

//1.require方法 ->Module.prototype.require
//2.Module.load加载模块
//3.Moudle._resolveFilename 方法把路径变成了绝对路径 添加后缀