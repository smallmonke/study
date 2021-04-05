/*
 * @Description:
 * @Version: 1.0
 * @Autor: ziwei
 * @Date: 2021-04-02 16:18:59
 * @LastEditors: ziwei
 * @LastEditTime: 2021-04-02 17:45:02
 */
const Promise = require('./source/3.promise');
// let promise2 = new Promise((resolve) => {
//   resolve(1);
// }).then(
//   (data) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(
//           new Promise((resolve, reject) => {
//             setTimeout(() => {
//               resolve('200');
//             }, 1000);
//           })
//         );
//       }, 1000);
//     });
//   },
//   (err) => {
//     return 111;
//   }
// );
// promise2.then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log('error', err);
//   }
// );

//值得穿透
//err 会找最近的处理 一旦处理了就不会再往下传了
//throw err 可以直接在最后一个then处理错误
new Promise((resolve, reject) => {
        reject(200);
    })
    .then(null, (err)=>{
        console.log(err);
    })
    .then(
        (data) => {
            console.log(data, 's');
        },
        (err) => {
            console.log(err, 'e');
        }
    );