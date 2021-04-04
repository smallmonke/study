// node中的模块 es6moudle commonjs规范 两种规范
//用webpack打包后 es6Module -> commonjs模块（tree-shaking） 所以前端代码都用es6去写
//es6 静态模块(tree-shaking)可以在编译的时候进行分析 ;动态模块 在执行的时候引入模块（无法做tree-shaking）

//模块规范
//1.每个文件都是一个模块 （每个模块外面都有一个函数）
//2.文件需要被别人使用 需要导出module.exports = xxx
//3. 如果需要使用别人 那就需要require语法

//模块的分类 1.核心模块、内置模块（node自带的模块 fs http vm....）
//2.第三方模块（使用别人的模块需要安装co）
//3.文件模块 别人引用的时候需要通过需要通过相对路径或者绝对路径来引用

//fs path vm内置模块
//什么时候用同步 什么时候用异步？当代已经在运行状态下了 尽量少使用同步（阻塞）
const fs = require('fs');//require内部就是使用readFile来实现的

//读取文件如果不存在会发生异常
// let r = fs.readFileSync('./第一次作业1.js','uft8');

//字符串如何能变成js执行
//eval会受执行环境影响
//new Function "模板引擎的实现原理 他不会受环境影响 没听清 平级
//node中自己实现了一个模块 vm 不受影响（沙箱环境） 快照（执行时记录信息 执行后还原信息）
//proxy实现

//this!=global
//global var a = 1000 尽量不要使用global
global.a = 100;//这里的a不是全局的 当前函数内的变量
new Function('b','console.log(a,b)')('b');
const vm = require('vm')
vm.runInThisContext();
//总是被创建于全局环境 因此在运行时他们只能访问全局变量和自己的局部变量

//global.xx
//全局一个 1个上下文
    //function (exports,module,require,__dirname){}
    //runInThisContext不会产生函数
//runInThisContext
//runInNewContext

//requie的实现 1.读取文件 2.读取后给文件抱一个函数 3.通过runInThisContext将他变成js语法 4.调用


