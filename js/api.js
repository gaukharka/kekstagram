// const getData = (onSuccess) => {
//   fetch('https://22.javascript.pages.academy/kekstagram/data')
//     .then((response) => response.json())
//     .then((data) => {
//       onSuccess(data);
//     });
// };

// const sendData = (onSuccess, onFail, body) => {
//   fetch(
//     'https://22.javascript.pages.academy/kekstagram',
//     {
//       method: 'POST',
//       body,
//     },
//   )
//     .then((response) => {
//       if(response.ok) {
//         onSuccess();
//       } else {
//         onFail();
//       }
//     })
//     .catch(() => {
//       onFail();
//     })
// };

// export {getData, sendData};