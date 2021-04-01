//事件中心
const fs = require('fs');//发布订阅模式 核心就是把多个方法暂存起来，最后一次执行
let events = {
  _events:[],
  on(){
    this._events.push(fn)
  },
  emit(data){
    this._events.forEach(fn=>fn(data))
  }
}

//订阅有顺序 可以采用数组来控制
events.on(()=>{
  console.log("每读取一次 就触发一次");
});

let arr = [];
fs.readFile('./a.txt','UTF8',function (err,data) {
  out(data,0);
})

fs.readFile('./b.txt','UTF8',function (err,data) {
  out(data,1);
})
