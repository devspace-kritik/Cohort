// function promisifiedSetTimeout(anything){
//     return new Promise(anyth => setTimeout(anything, 3000));
// }
// function printLog(){
//     console.log("Hey this is printLog called after 3 sec");
// }

// console.log(promisifiedSetTimeout(printLog));
function callbackHell(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
// let v = callbackHell(1000).then(()=>{
//     console.log("hi");
//     return callbackHell(3000);
// }).then(()=>{
//     console.log("hi there");
//     return callbackHell(5000);
// }).then(()=>{
//     console.log("hello");
// });
async function result() {
    try {
        await callbackHell(1000);
        console.log("hi");
        await callbackHell(3000);
        console.log("this is the second async call");
        await callbackHell(5000);
        console.log("this is the third async call");
    }
    catch{
        console.log("async call rejected");
    }
}
result();
