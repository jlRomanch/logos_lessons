// let obj = {}; //літерал об'єкта
// let obj1 = new Object(); //constructor
// console.log(obj1);
// let arr = [];
// let arr1 = new Array();
// console.log(arr);
// let date = new Date();
// console.log(date);
// let str = new String('Hello');
// // console.log('string', str);
// // console.log(str+'');
// let num = new Number(22);
// // console.log(num+1);
// let bol = new Boolean(0);
// console.log(bol);
// let fun = new Function('x', 'y', 'return x+y');
// console.log(fun(10,20));

// function Const(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   let person = new Const('Ivan', 25);
//   console.log(person);

// let Const = function(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   let person = new Const('Ivan', 25);
//   console.log(person);

// let Const = function(name, age) {
//     this.name = name;
//     this.age = age;
//     this.show = function(){
//         return `My name is ${this.name}`
//     }
//   }
//   let person = new Const('Ivan', 25);
//   console.log(person);
//   console.log(person.show());

// let Const = function(name, age) {
//     this.name = name;
//     this.age = age;
//     this.show = show;
//   }
//   function show(){
//     return `My name is ${this.name}`
// }
//   let person = new Const('Ivan', 25);
//   console.log(person);
//   console.log(person.show());
  
/*
   Array
       property: length
       method: 
             concat,sort,reverse
             shift, unshift //add з початку
             pop, push // add з кінця
             slice, splice //копіює, добавляє видаляє
             join // з масиву в стрічку

*/

let arr = [1, 'Ivan' , 3, 4];
console.log(arr);
// arr.forEach(function(element, index, array){
//     console.log(element, index, array)
// })
// for(let element in arr){
//     console.log(element,arr[element], arr);
// }
// for(let element of arr){
//     console.log(element);
// }
// console.log(arr.indexOf('Ivan'));
// console.log(arr.lastIndexOf('Ivan'));
// let arr1 = [17,16,20,22,17,18];
// // let arrFilter = [arr1.filter(age => age>=18)];
// let arrFilter = [arr1.filter(
//     function(age){
//         return age>=18
//     }
// )];

// console.log(arrFilter);

// let arr2 = [1,2,3,4,5];
// let arrMap = arr2.map(num => num+'$');
// console.log(arr2);
// console.log(arrMap);

// let arr3 = [1,2,3,4,5];
// let arrReduce = arr3.reduce((sum,val) => sum + val, 100);
// console.log(arr3);
// console.log(arrReduce);
// arr.filter().map().reduce()
// reduceRight()

// let arr4 = ['user1', 'user2', 'user3', 'admin'];
// let arrSome = arr4.some(element => element === 'admin');
// console.log(arr4);
// console.log(arrSome);

// let arr5 = ['user1', 'user2', 'user3', 'admin'];
// let arrEvery = arr5.every(element => element === 'admin');
// console.log(arr5);
// console.log(arrEvery);

// let arr6 = ['user1', 'user2', 'user3', 'admin'];
// let arrIncludes = arr6.includes('admin');
// console.log(arr6);
// console.log(arrIncludes);

// let newArray = Array.from('hello');
// console.log(newArray);

// let newNumArray = Array.from([3,6,9], num => num*2);
// console.log(newNumArray);

// let fruits = ['orange', 'apple'];
// let veggies = ['potato', 'tomato'];
// let arrSpread = [...fruits, ...veggies];
// console.log(arrSpread);

// let user = {
//     name: 'Ivan',
//     age: '25',
//     birth:{
//         date:'02',
//         month: '02',
//         year: '2010'
//     }
// }
// console.log(user);

// let values = Object.values(user);
// console.log(values);
// let key = Object.keys(user);
// console.log(key);
// let entries = Object.entries(user);
// console.log(entries);
let home = {
    city: 'Lviv', 
    address: 'I.Franka',
    build: 61
}
const user = {
    ...home,
    name: 'Ivan',
    age: '25',
    birth:{
        date:'02',
        month: '02',
        year: '2010'
    }
}
console.log(user);
user.age = 9;
console.log(user);
// Object.freeze(user);
// user.age = 15;
Object.seal(user);
user.age = 15;
console.log(user);
delete user.age;
console.log(user);

















