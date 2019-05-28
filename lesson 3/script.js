// let someVariable = /RegExp/flags;

// let reg1 = /our/;
// let check = reg1.test('pouring');
// console.log(check);

// let reg2 = /Petro/;
// let myName = prompt('write ur name');
// let check2 = reg2.test(myName);
// console.log(check2);

// let reg3 = /Petro/i;
// let myName = prompt('write ur name');
// let check3 = reg3.test(myName);
// if(check3){
//     console.log('yes it`s my name');
// }
// else{
//     console.log('that is not my name');
    
// }

/*
    i - не враховує верхній регістр
    g - змушує проводити глобальну перевірку співпадінь
    m - змушує проводити перевірку в багатострічковому режимі
*/ 
/*
        Основні оператори:
    \ - перетворює спеціальний символ в звичайний і навпаки
    . - будь який символ крім переводу стрічки
    * - повтор попереднього символу 0 чи більше разів
    + - повтор попереднього символу 1 чи більше разів
    ? - повтор попереднього символу 0 чи 1 раз
    \d - люба цифра
    \D - не цифра
    \s - пробіл
    \S - не пробіл
    \w - любий символ (букви, цифри і _)
    \W - не любий символ (букви, цифри і _)
    [LGS] - любий символ з вказаних
    [LGS]+ - 1 або більше символів з вказаних
    [a-z] - букви від a до z в нижньому регістрі
    [A-Z] - букви від a до z в верхньому регістрі
    [a-zA-Z] - букви від a до z
    [0-9] - люба цифра
    ^ - початок стрічки(каретка)
    $ - кінець стрічки
    [^a-z] - не з букви від a до z в нижньому регістрі
    () - запам'ятовуючі дужки
    | - оператор або
    {2} - повтор попереднього символу рівно 2 рази
    {2,} - повтор попереднього символу 2 або більше разів
    {2,4} - повтор попереднього символу від 2 до 4 разів
*/

// 10/11/2019
// let reg4 = /\d{2}\/\d{2}\/\d{4}/
// let check4 = reg4.test('10/11/2019');
// console.log(check4);

// let reg5 = /T[LQS]R/;
// let check5 = reg5.test('TSR');
// console.log(check5);

// let reg6 = /T.R/;
// let check6 = reg6.test('TSR'); true
// let check6 = reg6.test('TsR'); true
// let check6 = reg6.test('T2R'); true
// console.log(check6);

// let reg7 = /T[LQS]*R/;
// let check7 = reg7.test('TSSSR'); //true
// console.log(check7);

// let reg8 = /T[LQS]+R/;
// let check8 = reg8.test('TSR'); //true
// let check8 = reg8.test('TR'); //false
// console.log(check8);

// let reg9 = /(Arsenal|Liverpool)/i;
// let check9 = reg9.test('arsenal'); //true
// let check9 = reg9.test('ArsenalLiverpool'); //true
// console.log(check9);

// let reg10 = /^(Arsenal|Liverpool)$/i;
// let check10 = reg10.test('arsenal'); //true
// let check10 = reg10.test('ArsenalLiverpool'); //false
// console.log(check10);

// let reg11 = /^([a-z]{3}\.)?T$/
// let check11 = reg11.test('T');//true
// let check11 = reg11.test('aaa.T'); //true
// let check11 = reg11.test('aa.T'); //true
// console.log(check11);

// replace()
// let someVariable = stringName.replace(regexp, newStr)

// let str1 = 'I love Chelsea and Chelsea is the best club';
// let reg12 = /chelsea/i;
// let newString = str1.replace(reg12,'Arsenal');
// console.log(newString);

//wirh flag 'g'

// let str1 = 'I love Chelsea and Chelsea is the best club';
// let reg12 = /chelsea/ig;
// let newString = str1.replace(reg12,'Arsenal');
// console.log(newString);

let rgb = 'rgba(0,0,0)';
let reg13 = /^rgb\([0-255]{1},[0-255]{1},[0-255]{1}\)$/;
// let check13 = reg13.test('rgb(0,0,0)');
let check13 = reg13.test('rgb(0,0,0)');
console.log(check13);
