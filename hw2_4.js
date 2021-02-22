'use strict';

/*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.*/

/**
* получение случайного числа в заданном диапазоне
*
* @param {number} min - нижняя граница диапазона
* @param {number} max - верхняя граница диапазона
* @return {number}
*/

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var a = getRandomInt(0, 15)

switch (a) {
    case 0:
        console.log(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 1:
        console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 2:
        console.log(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 3:
        console.log(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 4:
        console.log(4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 5:
        console.log(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 6:
        console.log(6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 7:
        console.log(7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 8:
        console.log(8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 9:
        console.log(9, 10, 11, 12, 13, 14, 15);
        break;
    case 10:
        console.log(10, 11, 12, 13, 14, 15);
        break;
    case 11:
        console.log(11, 12, 13, 14, 15);
        break;
    case 12:
        console.log(12, 13, 14, 15);
        break;
    case 13:
        console.log(13, 14, 15);
        break;
    case 14:
        console.log(14, 15);
        break;
    default:
        console.log(15);
        break;    
}