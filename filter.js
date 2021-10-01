//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

let arr = [3, 6, 8, 2]
let newArr = arr.filter((a) => {
    return a >= 5
})
console.log(newArr);


//2) Given an array of numbers, return a new array that only includes the even numbers.
let arr = [3, 6, 8, 2]
let newArr = arr.filter((a) => {
    return a % 2 == 0
})
console.log(newArr);


//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

let arr = ["dog", "wolf", "by", "family", "eaten", "camping"];

let newArr = arr.filter(word => word.length <= 5);

console.log(newArr);



//4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

let array = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
let newArray = array.filter((a) => {
    return a.member == true
})
console.log(newArray);



//5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
let array = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
let newArray = array.filter((a) => {
    return a.age >= 18
})
console.log(newArray);