/*
 * @Description:
 * @Version: 1.0
 * @Autor: ziwei
 * @Date: 2021-04-02 16:18:59
 * @LastEditors: ziwei
 * @LastEditTime: 2021-04-02 16:27:32
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

new Promise((resolve)=>{
  resolve(200)
}).then().then().then().then((data)=>{
  console.log(data,'s');
},err=>{
  console.log(err,'e');
})
