// 定义：多个参数的传入 把他转成n个函数 可以暂存变量
//一般柯里化参数要求 都是一个一个的传 => 偏函数（参数不定数）

//判断一个变量的类型(代码的实现 类型是基本条件)
//typeof of null = object 一般用于判断基础类型
//instanceof XXX是谁的实例 判断原型：while找链上有没有这个属性
//Object.prototype.toString.call 判断具体类型 返回一个字符串
//coustrutor 深拷贝

//我们的柯里化登场；让函数变得更具体，反柯里化 让函数范围变得更大一些
// function isType(val,typing) {
//   return Object.prototype.toString.call(val) == `[object ${typing}]`;
// }
// console.log(isType('string','String'));

// let myIsString = isString('String');
// console.log(myIsString);
// myIsString(123);
// myIsString('abc');

function isType(typing,val) {
    return Object.prototype.toString.call(val) == `[object ${typing}]`;
}
//实现通用的柯里化函数：高阶函数
function curring(fn) {
  //存储每次调用的时候传入的变量
  const inner = (args = []) => {
    //存储每次调用传入的参数
    return args.length >= fn.length? fn(...args): (...userArgs) => inner([...args, ...userArgs]);
    //递归返回函数
  };
  return inner();
}
let util = {};
['String','Number','Boolean','Number','Undefined'].forEach(type => {
  util["is"+type] = curring(isType)(type)
});

console.log(util.isString('12121'));
// function sum(a, b, c, d) {
//   //我要记录每次调用时传入的参数 并且和函数的参数个数进行比较 如果不满足总个数 就返回新函数，如果传入的个数和参数一致 执行原来的函数
//   return a + b + c + d;
// }
       
// let sum1 = curring(sum);
// let sum2 = sum(1);
// let sum3 = sum2(2,3)
// let result = sum3(4)

// function fn(a) {
//   return function a(b) {
//     return function a(c) {

//  f
//   }
// }

// fn(a,b,c);
// let fn1 = fn(a);
// let fn2 = fn1(b);
// let xxx = fn2(c);
