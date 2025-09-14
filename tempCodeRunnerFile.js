// const rs = require("fs");
// function read(err, data){
//     console.log(data);
// }
// rs.readFile("a.txt","utf-8", read);
// rs.readFile("b.txt", "utf-8", read);
// setTimeout(() => {
//     console.log("this is setTimeout function");
// },10);
// console.log("content");

const rs = require("fs");
function read(data){
    console.log(data);
}
function print(resolve){
    rs.readFile("a.txt", "utf-8", (err, data)=>{
        resolve(data);
    });
    console.log("resolve is called");
}
function read1(){
    return new Promise(print);
}
read1().then(read);
function just(){
    console.log("hiiiii")
}