'use strict';

/*
8. С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

/**
 * Рекурсивное возведение в степень
 * @param   {number} val - заданное число
 * @param   {number} pow - степень
 * @returns {number} 
 */
function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}

let arg1 = parseInt(prompt('Введите заданное число: '));
let arg2 = parseInt(prompt('Введите степень: '));

console.log(power(arg1, arg2))
