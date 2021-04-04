const EventsEmitter = require('events');
function Girl() {
    
}
//原型继承 需要通过实例来调用继承的方法
util.inherits(Girl,EventsEmitter);
let girl = new Girl();
girl.on('女生失恋',()=>{console.log('哭');});
girl.on('女生失恋', () => { console.log('吃'); });
setTimeout(() => {
    girl.emit('女生失恋');
}, 1000);
// function create(params) {
    
// }

//继承的方式
// Girl.prototype__proto__ = EventEmitter.prototype;
// Object.setPrototypeOf(Girl.prototype,EventsEmitter.prototype);//es6
// Girl.prototype = Object.create(EventsEmitter.prototype);
//继承实例属性 继承原型属性
//发布订阅模式  redux vue express koa webpack
//订阅一次
//订阅方法
//发布方法
//取消订阅


//promise eventLoop整理出来 必须要会
//node全局属性 模块（commonjs区别）
//commonjs规范的实现 require的实现
//npm和node中的核心模块
//模板的实现原理
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        let node = this.map.get(key)

        if (node !== this.head) {
            if (node === this.last) {
                this.last = node.pre
            }
            let preNode = node.pre
            let nextNode = node.next
            if (preNode)
                preNode.next = nextNode
            if (nextNode)
                nextNode.pre = preNode
            node.pre = null
            node.next = this.head
            this.head.pre = node
            this.head = node
        }
        return node.val
    } return -1
};
