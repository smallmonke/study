//Promise resolve 这个方法 会创造一个成功的promise
//通过类调用的叫静态方法
//let Promise = require('./source/3.promise');
// Promise.resolve(new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(200)
//     }, 1000);
// })).then(data=>{
//     console.log(data);
// }).catch(err=>{//catch方法就是没有成功的失败 原型上的方法
//     console.log(err,'err');
// })

//重写Promise.all
//关键在于 什么时候resolve返回整个数组 单独用一个计数器去统计
Promise.all = (promises) => {
    let result = [];
    let times = 0;
    return new Promise((resolve, reject) => {
        const resolveData = (data, index) => {
            result[index] = data;
            if (++times == promises.length) {
                resolve(result)
            }
        }
        promises.forEach((v, index) => {//并发 多个请求一起执行的
            if (v && typeof v.then == 'function') {
                v.then((data) => { resolveData(data, index); }, reject)//如果其中某一个promise失败了 直接执行失败即可
            } else {
                resolveData(v,index);
            }
        })
    })
}

//多个promise全部完成后获取结果，但是其中的某个如果失败了 那么这个promise就失败了
//同步（同一时刻拿到 多个异步请求的结果）
Promise.all([1, 2, 3, new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功');
    }, 1000);
}), new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('失败');
    }, 1000);
})]).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//finally 如何实现一个Promise.finally