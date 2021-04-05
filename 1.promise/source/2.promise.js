
/*
 * @Description:promise有异步处理then的时候订阅 resolve的时候发布
 * @Version: 1.0
 * @Autor: ziwei
 * @Date: 2021-04-02 10:54:58
 * @LastEditors: ziwei
 * @LastEditTime: 2021-04-02 11:26:50
 */
let PENDING = "PENDING";
let FULLFILLed = "FULLFIlled";
let REJECTED = "REJECTED";

class Promise {
  constructor(executor) {
    this.status = PENDING;//promise默认的状态
    this.value = undefined;//成功的原因
    this.reason = undefined;//失败的原因
    this.onResolvedCallbacks = [];
    this.onRejectedCallback = [];
    const resolve = (value) => {//成功的resolve函数
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULLFILLed;
        //发布
        this.onResolvedCallbacks.forEach((v) => {
          v();
        })
      }
    }

    const reject = (reason) => {//失败的函数
      if (this.status === PENDING) {
        this.status = REJECTED;//修改状态
        this.reason = reason;
        this.onRejectedCallback.forEach((v) => {
          v();
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      //一旦抛出异常也执行失败
      reject(e);
    }
  }
  then(onFullfilled, onRejected) {//onFulfilled onRejected promise+规定的2个函数
    //订阅模式
    if (this.status == PENDING) {//代码是异步调用resolve或者reject
      this.onResolvedCallbacks.push(() => {//切片编程AOP
        //todo
        onFullfilled(this.value)
      });
      this.onRejectedCallback.push(() => {
        //todo
        onRejected(this.reason)
      });
    }
    if (this.status == FULLFILLed) {//成功调用成功的方法
      onFullfilled(this.value);
    }
    if (this.status == REJECTED) {//失败调用失败的方法
      onRejected(this.reason);
    }
  }
}

module.exports = Promise