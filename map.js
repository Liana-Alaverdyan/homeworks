//1) Make an array of numbers that are doubles of the first array

let arr = [2, 5, 100]
let newArr = arr.map(arr => {
    return (arr * 2)
})

console.log(newArr);




//2) Take an array of numbers and make them strings

let arr = [2, 5, 100];
let newArr = arr.map(String);
console.log(newArr);



//3) Capitalize each of an array of names

let anun = ["john", "JACOB", "jinGleHeimer", "schmidt"];
let newAnun = anun.map(anun => anun.charAt(0).toUpperCase() + anun.slice(1).toLowerCase());

console.log(newAnun);



