
//解耦合
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
events.on((data)=>{
  arr.push(data);
})

events.on((data)=>{
  if(arr.length==2){//最终结果还是计数器
    console.log("读取完毕",arr);
  }
})

let arr = [];
fs.readFile('./a.txt','UTF8',function (err,data) {
  events.emit(data);
})

fs.readFile('./b.txt','UTF8',function (err,data) {
  events.emit(data);
})

//观察者模式 vue2 基于发布订阅的（发布订阅之间是没有依赖关系的）
//对于我们的观察者模式：观察者 被观察者 vue3有发布订阅 没有观察者模式 没有使用class(不用继承)
