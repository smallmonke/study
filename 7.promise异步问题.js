let Promise = require('./source/2.promise')
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("成功");
    }, 1000);
})

//当用户调用then方法的时候 此时promise可能为等待态 先暂存起来 因为后续可能会调用resolve和reject，
//等会再出发对应的onFulfilled或者onRejected
promise.then((value) => {//then是异步的
    console.log("success", value);
}, (reason) => {
    console.log("error", reason);
});

promise.then((value) => {//then是异步的
    console.log("success", value);
}, (reason) => {
    console.log("error", reason);
});
