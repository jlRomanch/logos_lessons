// lexical enviroment

// function sayHello(name) {
//     let say = `Hello ${name}`
//     return say;
//   }
// console.log(sayHello('Ivan'));

// closure

// function outer(){  //зовнішня ф-ція
//     let n;
//     inner(){  //вкладена ф-ція
//         //  дії зі змінною n
//     }
//   return inner;
// }
// outer();

// function outer() { 
//     let x = 5;
//     function inner(){
//         x++
//         console.log(x);
//     }
//     return inner;
//  }
//  let fn = outer();
//  fn();
//  fn();
//  fn();

// IIFE

// ;(function(){
//     var private = {};
//     function privateFunc(){

//     }
//     return{

//     }
// }());

// let module = (function(){
//     let _count = 0;
//     return{
//         increment:function(){
//             return ++_count;
//         },
//         decrement:function(){
//             return --_count;
//         },
//         reset:function(){
//             return _count = 0;
//         }
//     }
// }())
// console.log('increment', module.increment());
// console.log('increment', module.increment());
// console.log('increment', module.decrement());
// console.log('increment', module.decrement());
// console.log('increment', module.decrement());
// console.log('increment', module.reset());

// let person = (function(){
//     let _age = 25;
//     let _name = 'Ivan';
//     return{
//         setName: function(name){
//             return _name = name;
//         },
//         getName: function(){
//             return console.log(_name);
//         },
//         getAge: function(){
//             return console.log(_age);
//         }
//     }
// }())
// person.getName();
// person.getAge();
// person.setName('Petro');
// person.getName();

// (function () {
//     let beerCount = 200;
//     let beerPrice = 30.5;
//     let bank = 1000;
//         function buy(count){
//             beerCount -= count;
//             bank += count*beerPrice;
//         }
//         function getBeer(){
//             return beerCount
//         }
//         function getBank(){buy
//             return bank
//         }
//     document.getElementById('buy').addEventListener('click',() =>{
//         let count = +prompt('write count beer');
//         if (count>=beerCount){
//             console.log(`Sorry, no beer`)
//         }
//         else{
//             buy(count)
//         }
//         buy(count)
//     })
//     document.getElementById('getBeerCount').addEventListener('click',() =>{
//         console.log( 'beer count =',getBeer());
//     })
//     document.getElementById('getBank').addEventListener('click',() =>{
//         console.log( 'my bank =',getBank());
//     })

// } ())



let shop123 = (function () {
    let beerCount = 200;
    let beerPrice = 30.5;
    let bank = 1000;
    return {
        buy: function (count) {
            beerCount -= count;
            bank += count * beerPrice;
        },
        getBeer: function () {
            return beerCount
        },
        getBank: function () {
            buy
            return bank
        }
    }

}());

(function (shop) {
    document.getElementById('buy').addEventListener('click', () => {
        let count = +prompt('write count beer');
        if (count >= shop.getBeer) {
            console.log(`Sorry, no beer`)
        }
        else {
            shop.buy(count)
        }
    })
    document.getElementById('getBeerCount').addEventListener('click', () => {
        console.log('beer count =', shop.getBeer());
    })
    document.getElementById('getBank').addEventListener('click', () => {
        console.log('my bank =', shop.getBank());
    })
    }(shop123))
