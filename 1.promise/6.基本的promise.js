
//1.promise是一个类，无需考虑兼容性
//2.当使用promie的时候 会传入一个执行器 此执行器是立即执行
//3.当前excutor 给了两个函数来描述当前promise的状态。promise有3个状态 等待态：pending,失败态：成功态：fullfilled,一旦状态改变后不可再修改
//默认为等待态 如果调用resolve会走成功状态，如果调用reject或者发生异常 会走失败态
// 4.每个promise实例都有一个then方法

let Promise = require('./source/1.promise')
let promise = new Promise((resolve,reject)=>{
  resolve("成功");
  reject("失败");
  //throw new Error("失败了");
})

promise.then((value)=>{//then是异步的
  console.log("success",value);
},(reason)=>{
  console.log("error",reason);
})
