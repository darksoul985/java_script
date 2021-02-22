'use strict';

/*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
 */

/**
 * Калькулятор
 *
 * @param {number} arg1 - первое число
 * @param {number} arg2 - второе число
 * @param {string} operation - операция над числами +, -, *, /
 * @return {number}
 */

function makeCalculation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return arg1 + arg2;
        case '-':
            return arg1 - arg2;
        case '*':
            return arg1 * arg2;
        case '/':
            if (arg2 == 0) {
                return alert('На ноль делить нельзя');
            } else {
                return arg1 / arg2;
            }
    }
}

let a = parseInt(prompt('Введите первое число: '))
let b = parseInt(prompt('Введите второе число: '))
let c = prompt('Введите операцию: ')

console.log(makeCalculation(a, b, c))
