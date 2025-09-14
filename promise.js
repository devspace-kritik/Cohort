function promisifiedSetTimeout(anything){
    return new Promise(anyth => setTimeout(anything, 3000));
}
function printLog(){
    console.log("Hey this is printLog called after 3 sec");
}

console.log(promisifiedSetTimeout(printLog));