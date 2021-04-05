//Promise.all 所有都成功才成功 有一个失败就失败了
//Promise.race 有一个成功或失败就采用他的结果 超时处理

let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('成功');
    }, 1000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('失败');
    }, 2000);
})

//promise race的实现
Promise.race = (promises)=>{
    return new Promise((resolve,reject)=>{
        for (let i = 0; i < promises.length;i++){
            let p = promises[i];
            if(p&&typeof p ==='function'){
                p.then(resolve,reject)
            }else{
                resolve(p);
            }
        }
    })
}

//赛跑 采用最快的那一个 race方法如果其中一个完成了 其它的还是执行的 并没有采用他的结果
Promise.race([p1,p2]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})