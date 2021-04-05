//Promise.all 所有都成功才成功 有一个失败就失败了
//Promise.race 有一个成功或失败就采用他的结果 超时处理

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('成功');
//     }, 1000);
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('失败');
//     }, 2000);
// })

// //promise race的实现
// Promise.race = (promises)=>{
//     return new Promise((resolve,reject)=>{
//         for (let i = 0; i < promises.length;i++){
//             let p = promises[i];
//             if(p&&typeof p ==='function'){
//                 p.then(resolve,reject)
//             }else{
//                 resolve(p);
//             }
//         }
//     })
// }

// //赛跑 采用最快的那一个 race方法如果其中一个完成了 其它的还是执行的 并没有采用他的结果
// Promise.race([p1,p2]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

//图片加载 请求的加载 造成超时（不采用成功的结果了）
var abort;
let p1 = new Promise((resolve,reject)=>{
    //abort = reject
    setTimeout(() => {
        resolve('成功');
    }, 3000);
});
//p1.abort = abort;
//race的特点是 其中一个失败了就失败了，构造一个自己的promise和p1放在一起

function wrap(p1) {//图片加载失败问题，脚本加载超时问题
    let abort;
    let p = new Promise((resolve,reject)=>{
        abort = reject;
    })
    let p2 = Promise.race([p,p1]);
    p2.abort = abort;
    return p2;
}

let p2 = wrap(p1);
p2.then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err);
})
setTimeout(() => {
    p2.abort("超过1S了")
}, 1000);