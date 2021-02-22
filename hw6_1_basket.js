'use strict';

/*
1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
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
    addGood(prodactName, price, quantity = 0) {
        quantity = parseInt(prompt('Введите, количество: '))
        let newProduct = {
            'title': prodactName,
            'price': price,
            'quantity': quantity
        };
        this.basket.push(newProduct)
        return alert('Товар добавлен в корзину')
    },

    /**
     * метод расчитывает стоимость корзины
     * @returns {number} сумма товаров в корзине
     */
    basketValue() {
        return this.basket.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0)
    },

    /**
     * метод запускает отображение количества и суммы товаро в корзине
     */
    infoAboutBasket() {
        let basketOnPage = document.querySelector('.basketOnPage');
        
        if (this.basketValue() == 0) {
            return basketOnPage.textContent = 'Корзина пуста';
        } else {

            return basketOnPage.textContent = `В корзине: ${this.basket.length} товар(ов) на сумму ${this.basketValue()} рублей`
        }
    },
    /**
     * Инициализация работы 
     */
    init() {
        document.querySelector('.product').addEventListener('click', (event) => {
            this.clickOnProduct(event)
        });
        this.infoAboutBasket()
    },

    clickOnProduct(event) {

        if (event.target.tagName !== 'BUTTON') return;
        let good = event.target.id;
        for (let itm in this.basket) {
            if (this.basket[itm].title == good) {
                this.basket[itm].quantity += parseInt(prompt('Введите, количество: '));
                return this.infoAboutBasket()
            }
        }

        for (let i in product.assortmentOfGoods) {
            if (product.assortmentOfGoods[i].title == good) {
                this.addGood(product.assortmentOfGoods[i]['title'], product.assortmentOfGoods[i].price);
                return this.infoAboutBasket()
            }
        }

    },
    
}

castomer.init()
//castomer.cleanBasket()
