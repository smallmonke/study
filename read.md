## 关于函数
什么是高阶函数： 把函数作为参数或者返回值的一类函数。

#### before函数
```javascript
Function.prototype.before = function(beforeFn){
    return ()=>{
        beforeFn();
        this();
    }
}
function fn(){
    console.log('source')
}
const newFn = fn.before(say=>{
    console.log('say');
});
newFn();
```
AOP(面向切面编程)的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，其实就是给原函数增加一层，不用管原函数内部实现
```javascript

 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * 
 ```
#### 类型检测
```javascript
function checkType(content,Type){
    return Object.prototype.toString.call(content) === `[object ${Type}]`
}
const flag = checkType('hello','String');

// -----------------------------------
function checkType(Type){
    return function(content){
        return Object.prototype.toString.call(content) === `[object ${Type}]`
    }
}
const flag = checkType('hello','String');
const util = {};
const types = ['String','Number','Boolean'];
types.forEach(type=>{
    util['is'+type] = checkType(type);
});
```
函数分步传递参数，将函数拆分成功能更具体化的函数

#### 柯里化函数
```javascript
//笔记里的写法
const currying = (fn,args = []) => {
    let len = fn.length;
    return (..._)=>{
        let arg = args.concat(_);
        if(arg.length < len){
            return currying(fn,arg);
        }
        return fn(...arg);
    }
};
//另外一个写法
// function currying(fn) {
//   //存储每次调用的时候传入的变量
//   const inner = (args = []) => {
//     //存储每次调用传入的参数
//     return args.length >= fn.length? fn(...args): (...userArgs) => inner([...args, ...userArgs]);
//     //递归返回函数
//   };
//   return inner();
// }
const add = (a, b, c, d, e) => {
  return a + b + c + d + e;
};
let r = currying(add)(1)(2,3)(4,5);
console.log(r);
```
柯里化类型函数
```javascript
const types = ['String','Number','Boolean'];
let utils = {}
types.forEach(type=>{
    utils[`is${type}`] = currying(isType)(type);
})
```
#### after函数的应用
```javascript
const after = (times, callback) => () => {
  if (--times === 0) {
    callback();
  }
};
const newFn = after(3, () => {
  console.log("ok");
});
```
#### 发布订阅模式 、 观察者模式
一种一对多的关系，发布者和订阅者是否有关联，观察者模式基于发布订阅模式
