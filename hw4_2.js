'use strict';

/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

/**
 * функция конструктор объектов покупателя
 * @param   {string} name имя покупателя
 * @returns {object}
 */
function Castomer (name) {
    this.name = name, // имя покупателя
    this.basket = [], // корзина
    
    this.addProduct = function (prodactFromPrice, value) { // метод добавления продуктов в корзину
        this.basket.push({
            'name': prodactFromPrice,   // тут наверное было бы хорошо сделать добавление через поиск товаров в ассортименте, пока 
                                        //надо знать навание товара в магазине
            'count': value,
            'price': assortmentOfGoods[prodactFromPrice]
        });
    },

    this.basketValue = function () { // подсчет суммы товаров в корзине
        let summ = 0;
        for (let key in this.basket) {
            const elem = this.basket[key];
            summ += elem.count * elem.price;
        }
        return (summ);
    }
}

const assortmentOfGoods = { 
    product_1: 100,
    product_2: 150,
    product_3: 80,
    product_4: 78,
    product_5: 138,
};

let newCastomer = new Castomer('newCastomer');
newCastomer.addProduct('product_1', 4);
newCastomer.addProduct('product_3', 2);
newCastomer.addProduct('product_4', 1);
newCastomer.summ