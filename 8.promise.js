/*
 * @Description: 
 * @Version: 1.0
 * @Autor: ziwei
 * @Date: 2021-04-02 09:39:04
 * @LastEditors: ziwei
 * @LastEditTime: 2021-04-02 10:28:00
 */
//promise的特点：解决了什么问题：1 链式调用解决嵌套回调的问题 2：同步并发问题
//1.
const fs = require('fs');//上一个人的输出是下一个的输入

function readFile(filePath,encoding='UTF8') {
  return new Promise((resolve,reject)=>{
    fs.readFile(filePath,encoding,function (err,data) {
      if(err){return reject(err)}
      resolve(data);
    })
  })
}

//1.promise的链式调用 当调用then方法后会但会一个新的promise
//情况1:then中方法返回的是一个（普通值 不是promise 包括undefined|没有设置值默认返回undefined）的情况，会作为外层下一次then的成功结果
//情况2：then中方法 执行出错（throw new Error('error')） 会走到外层下一次then的失败结果
//情况2：如果then方法返回的一个promise对象，次是会根据promise的结果来处理走成功还是失败
//无论上一次then走的是成功还是失败，只要返回的是普通值 都会执行下一次then的成功

//总结：如果返回一个普通值（除了promise）就会传递给下一个then的成功，如果返回一个失败的promise或者抛出异常，会走下一个then的失败
readFile('./a.txt','UTF8').then((value)=>{
  return readFile(value);
},(err)=>{
  // 返回的是普通纸
  return new Error();
}).then((data)=>{
  console.log('s',data);
},()=>{
  console.log("fail");
})

// fs.readFile('./a.txt','UTF8',function (err,data) {
//   if(err) return console.log(err);
//   fs.readFile('b.txt','UTF8',function (err,data) {
//     if(err) return console.log(err);
//     console.log(data);
//   })
// })