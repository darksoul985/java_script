'use strict';

//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
/**
 * генератор массива
 * @param   {number} a - начало массива
 * @param   {number} b - окончание массива
 * @returns {Array}    массив
 */
function generateArr (a, b) {
    if (a > b) return [];
    let r = [];
    for (let i = a; i <= b; i++) r.push(i);
    return r;
}

let arrNumber = generateArr(0, 100);
//console.log(arrSimpleNumber)
arrNumber[1] = 0;
let simpleNumber = [];

let i = 0;
while (i <= arrNumber.length) {
    if (arrNumber[i] != 0) {
        simpleNumber.push(arrNumber[i]);
        
        let j = i + i;
        while (j < arrNumber.length) {
            arrNumber[j] = 0;
            j = j + arrNumber[i];
        }
    }
    i++
}

console.log(simpleNumber)