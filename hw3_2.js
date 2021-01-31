'use strict';

/*2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

/**
 * Подсчет стоимости товаров в корзине
 * @param   {Array} busket список и количество товаров в корзине
 * @param   {Array} price  список и цены товаров в магазине
 * @returns {number} Сумма товаров в корзине
 */
function countBasketPrice (busket, price) {
    let summGoods = 0;
    for (let i in busket) {
        summGoods += busket[i] * price[i];
    }
    return summGoods
}

//прайс магазина
const assortmentOfGoods = {
    product_1: 100,
    product_2: 150,
    product_3: 80,
    product_4: 78,
    product_5: 138,
}

//товары в корзине
let basketOfCastomer = {
    product_1: 1,
    product_3: 4,
    product_5: 2,
}

console.log(countBasketPrice(basketOfCastomer, assortmentOfGoods))