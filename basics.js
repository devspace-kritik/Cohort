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

console.log(ageCalc(arr))