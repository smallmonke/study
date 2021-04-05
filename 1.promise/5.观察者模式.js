/*
 * @Description: 
 * @Version: 1.0
 * @Autor: ziwei
 * @Date: 2021-04-01 17:32:21
 * @LastEditors: ziwei
 * @LastEditTime: 2021-04-01 17:48:38
 */
//观察者模式基于类
//观察者模式 vue2 基于发布订阅的（发布订阅之间是没有依赖关系的）
class Subject{//被观察者的类 被观察者需要将观察者手机起来
  constructor(name){
    this.name = name;
    this.state = "非常开心";
    this.Observes = [];
  }
  attach(o){
    this.Observes.push(o);
  }
  setState(newStatus){
    this.state = newStatus;
    this.Observes.forEach((o)=>{
      o.update(this.name,newStatus);//emit
    })
  }
}

class Observer{//观察者
  constructor(name){
    this.name = name;
  }
  update(s,state){
    console.log(this.name+":"+s+"当前"+state);
  }
}
//vue数据变了（状态）视图就要更新（通知依赖的人）
let s = new Subject("小宝宝");
let o1 = new Observer("爸爸");
let o2 = new Observer("妈妈");
s.attach(o1);
s.attach(o2);

s.setState("不开心");
