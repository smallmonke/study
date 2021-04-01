const fs = require(fs);

//高阶函数实现
let out = function after(times,callback) {
  let arr = [];
  return (data,index)=>{
    arr[index] = data;
    if(--times === 0){//多个请求并发 需要靠计数器来实现
      callback(arr);
    }
  }
}

let out = after(2,(arr)=>{
  console.log(arr);
});

fs.readFile('./a.txt','UTF8',function (err,data) {
  out(data,0);
})

fs.readFile('./b.txt','UTF8',function (err,data) {
  out(data,1);
})

//发布订阅模式 订阅->再发布
