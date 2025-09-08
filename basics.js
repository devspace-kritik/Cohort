let arr = [
    {
        age: 29,
        name: "raj",
        gender: "male"
    },
    {
        age: 8,
        name: "kritik",
        gender: "male"
    },
    {
        age: 47,
        name: "kritik",
        gender: "male"
    },
    {
        age: 4,
        name: "kritik",
        gender: "male"
    },
    {
        age: 26,
        name: "kritik",
        gender: "male"
    }

];

function ageCalc(arr) {
   let arr2 = arr.filter(value =>
     value.age>18 && value.gender == "male"
   )
    return arr2;
}

// console.log(ageCalc(arr));
let add = parseInt("24") + parseInt(10); //typecasted to string- result is string
console.log(add);

function sum(n){
    let sum = 0;
    for(let i=1;i<n;i++){
        sum += i;
    }
    console.log(sum);
}

sum(100);