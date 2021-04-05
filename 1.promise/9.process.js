/*
 * @Description: 
 * @Version: 1.0
 * @Autor: ziwei
 * @Date: 2021-04-02 16:01:04
 * @LastEditors: ziwei
 * @LastEditTime: 2021-04-02 16:09:10
 */
//promise2 == x的情况
//如果返回的是promise 我应该采用promise的成功或者失败 问promise会成功或者失败么？
//我等待我自己坐在沙发上是不可能的
//const Promise = require('./source/3.promise');

let promise2 = new Promise((resolve,reject)=>{
  resolve(1)
}).then(()=>{
  return promise2
})

promise2.then((data)=>{
  console.log(data);
},err=>{
  console.log(err);
})

//TypeError: Chaining cycle detected for promise #<Promise>]
//死循环了
