'use strict';
/*
4*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
4.1. Создать массив товаров (сущность Product);
4.2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
*/

let product = {
    assortmentOfGoods: [
        {
            'title': 'фонарь',
            'price': 100,
            'image': 'image/product1.jpg',
        },
        {
            'title': 'гриль',
            'price': 500,
            'image': 'image/product2.jpg',
        },
        {
            'title': 'насос',
            'price': 250,
            'image': 'image/product3.jpg',
        },
     ],

    /**
     * метод добавления товаров в корзину
     * @param {string} prodactName название товара
     * @param {number} price       цена единицы товара
     * @param {number} quantity    количество товара
     * @param {[[Type]]} image       [[Description]]
     */
    addProduct(prodactName, price, imagePath) {
        let newProduct = {
            'title': prodactName,
            'price': price,
            'image': imagePath,
        };

        return this.assortmentOfGoods.push(newProduct)
    },
    /**
     * метод создает карточку товара
     * @param   {object} obj объект товар
     * @returns {string} строка карточки
     */
    addCardProduct(obj) {
        let product = Object.assign(obj);
        let card = '';
        card += `<h3>${product.title}</h3>
            <img src="${product.image}" alt="image">
            <p>${product.price} руб.</p><br>
            <button id="${product.title}">В корзину</button>`; //проверить, нужен ли div здесь???

        return card
    },

    createCardProduct() {
        for (let i = 0; i < this.assortmentOfGoods.length; i++) {
            let divToCard = document.createElement('div');
            divToCard.classList.add('cardProduct')
            document.querySelector('.product').appendChild(divToCard)
            divToCard.innerHTML = this.addCardProduct(this.assortmentOfGoods[i]); // может быть не лучший способ с innerHTML, но insertAdjastHTML не получилось((
        }
    },

    run() {
        this.createCardProduct()
    }
}

product.run()
