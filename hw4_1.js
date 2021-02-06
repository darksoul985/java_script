'use strict';

/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, 
необходимо выдать соответствующее сообщение с помощью console.log 
и вернуть пустой объект.
*/

function getNumberToObject(num) {
    if (!Number.isInteger(num) || num > 999 || num < 0) {
        console.log('Введенное не число или число меньше 0 или больше 999');
        return {};
    } else {

        let units = num % 10;
        let dozens = parseInt(num / 10) % 10;
        let hundreds = parseInt(num / 100);

        return {
            'единицы': units,
            'десятки': dozens,
            'сотни': hundreds
        }
    }
}

getNumberToObject(-1)
getNumberToObject('-1')
getNumberToObject(1000)
getNumberToObject(345)
