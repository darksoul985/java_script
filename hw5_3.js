'use strict';

/*
3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
3.1. Пустая корзина должна выводить строку «Корзина пуста»;
3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

let castomer = {
    name: '',
    basket: [],
    /**
     * метод добавляет элемент в корзину
     * @param {string} prodactName название товара
     * @param {number} price       цена товара
     * @param {number} quantity    количество
     */
    addProduct(prodactName, price, quantity){
        let newProduct = {
            'title': prodactName,
            'price': price,
            'quantity': quantity
        };
        this.basket.push(newProduct)
        return
    },
    
    /**
     * метод расчитывает стоимость корзины
     * @returns {number} сумма товаров в корзине
     */
    basketValue() {
        let summ = 0;
        for (let key in this.basket) {
            let elem = this.basket[key];
            summ += elem.quantity * elem.price;
        }
        
        return (summ);
    },
    
    /**
     * метод запускает отображение количества и суммы товаро в корзине
     */
    run() {
        let basketOnPage = document.querySelector('.basketOnPage')
        if (this.basketValue() == 0) {
           return basketOnPage.textContent = 'Корзина пуста';
        } else {
            return basketOnPage.textContent = `В корзине: ${this.basket.length} товаров на сумму ${this.basketValue()} рублей`
        }
    }
}

castomer.run()