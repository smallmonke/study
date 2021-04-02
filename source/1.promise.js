
/*
 * @Description: 
 * @Version: 1.0
 * @Autor: ziwei
 * @Date: 2021-04-01 18:00:26
 * @LastEditors: ziwei
 * @LastEditTime: 2021-04-02 10:49:00
 */
let PENDING = "PENDING";
let FULLFILLed = "FULLFIlled";
let REJECTED = "REJECTED";

class Promise{
  constructor(executor){
    this.status = PENDING;//promise默认的状态
    this.value = undefined;//成功的原因
    this.reason = undefined;//失败的原因
    const resolve = (value)=>{//成功的resolve函数
      if(this.status === PENDING){
        this.value = value;
        this.status = FULLFILLed;
      }
    }

    const reject = (reason)=>{//失败的函数
      if(this.status === PENDING){
        this.status = REJECTED;//修改状态
        this.reason = reason;
      }
    }

    try {
      executor(resolve,reject)
    } catch (e) {
      //一旦抛出异常也执行失败
      reject(e);
    }
  }
  then(onFulfilled,onRejected){//onFulfilled onRejected promiseA+规定的2个函数
    if(this.status == FULLFILLed){
      onFulfilled(this.value);
    }
    if(this.status == REJECTED){
      onRejected(this.reason);
    }
  }
}

module.exports = Promise