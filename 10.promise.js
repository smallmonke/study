/*
 * @Description:
 * @Version: 1.0
 * @Autor: ziwei
 * @Date: 2021-04-02 16:18:59
 * @LastEditors: ziwei
 * @LastEditTime: 2021-04-02 17:45:02
 */
//const Promise = require('./source/3.promise');
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
new Promise((resolve, reject) => {
  reject(200);
})
  .then((data) => {
    return data;
  })
  .then((data) => {
    return data;
  })
  .then((data) => {
    //return data;
  })
  .then(
    (data) => {
      console.log(data, 's');
    },
    (err) => {
      console.log(err, 'e');
    }
  );
