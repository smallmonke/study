
/*
 * @Description: 
 * @Version: 1.0
 * @Autor: ziwei
 * @Date: 2021-04-01 18:00:26
 * @LastEditors: ziwei
 * @LastEditTime: 2021-04-01 18:54:27
 */
let PENDING = "PENDING";
let FULLFILLed = "FULLFIlled";
let REJECTED = "REJECTED";

class Promise{
  constructor(executor){
    this.status = PENDING
    this.value = undefined;
    this.reason = undefined;
    const resolve = (value)=>{
      if(this.status === PENDING){
        this.value = value;
        this.status = FULLFILLed;
      }
    }

    const reject = (reason)=>{
      if(this.status === PENDING){
        this.status = REJECTED;
        this.reason = reason;
      }
    }

    try {
      executor(resolve,reject)
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled,onRejected){
    if(this.status == FULLFILLed){
      onFulfilled(this.value);
    }
    if(this.status == REJECTED){
      onRejected(this.reason);
    }
  }
}

module.exports = Promise