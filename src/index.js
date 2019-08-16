'use strict';
//checkbox
//получение чекбокса
function toggleCheckbox() {
    const checkbox = document.querySelectorAll('.filter-check_checkbox');
    //получение событие при клике по чекбоксу
//     checkbox.addEventListener('change', function () {
//         //проверка на включеность этого чекбокса
//         if (this.checked) {
//             //добавление следующему элементу после нажатие на чекбокс класса
//             this.nextElementSibling.classList.add('checked');
//         } else {
//             //удаление следующему элементу после нажатие на чекбокс класса
//             this.nextElementSibling.classList.remove('checked');
//         }
//     });
// }

//для нескольких чекбоксов
    checkbox.forEach((elem) => {
        elem.addEventListener('change', function() {
            console.log(checkbox);
            //проверка на включеность этого чекбокса
            if(this.checked){
                //добавление следующему элементу после нажатие на чекбокс класса
                this.nextElementSibling.classList.add('checked');
            }else{
                //удаление следующему элементу после нажатие на чекбокс класса
                this.nextElementSibling.classList.remove('checked');
            }
        })
    })
}

//end checkbox

//корзина

function toggleCart() {
    //получение кнопки корзины
    const btnCart = document.getElementById('cart');
    //получение модального окна
    const modalCard = document.querySelector('.cart');
    //получение кнопки закрытия модального окна
    const closeBtn = document.querySelector('.cart-close');
    //создание функции которая реагирует на нажатие на корзину и открывает модальное окно
    btnCart.addEventListener('click', function () {
        modalCard.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    //создание функции которая при нажатии на крестик закрывает модальное окно
    closeBtn.addEventListener('click', function () {
        modalCard.style.display = 'none';
        document.body.style.overflow = '';
    });
}
//end корзина

//работа с корзиной
function addCart() {
    //получение всех карточек товара
    const cards = document.querySelectorAll('.goods .card');
    //получение контейнера модального окна
    const cartWrapper = document.querySelector('.cart-wrapper');
    //получение внутренего дива модального окна
    const cartEmpty = document.getElementById('cart-empty');
    //получение спана в котором указывается количество товаров
    const countGoods = document.querySelector('.counter');
    const cardPrice = document.querySelectorAll('.card-price');
    //перебор всех карточек товаров и клонирование его в модальное окно
    cards.forEach((card) => {
        //получение кнопки карточки
        const btn = card.querySelector('button');
        //отчлеживание событий при нажатии на кнопку
        btn.addEventListener('click', () => {
            //клонирование карточки в модальное окно
            const cardClone = card.cloneNode(true);
            //добавление в корзину карточки товара
            cartWrapper.appendChild(cardClone);
            //вызов функции показывающей количетво товара в корзине
            showData();
            //удаление товаров из корзины
            const removeBtn = cardClone.querySelector('.btn');
            //изменение текста кнопки
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });
    });
    //создание функции которая показывает число добавленых товаров в корзину
    function showData() {
        const cardsCart = cartWrapper.querySelectorAll('.card');
        const cardsPrice = cartWrapper.querySelectorAll('.card-price');
        const cardTotal = document.querySelector('.cart-total span');
        let sum = 0;
        countGoods.textContent = cardsCart.length;
        //сумирование стоимости
        cardsPrice.forEach((cardPrice) => {
            let price = parseFloat(cardPrice.textContent);
            sum += price;
        });
        cardTotal.textContent = sum;

        if (cardsCart.length !== 0) {
            cartEmpty.remove();
        } else {
            cartWrapper.appendChild(cartEmpty);
        }
    }
}
//получение всех товаров

//end работа с корзиной

//фильтр акции
function actionPage(){
    //получение карточек товаров
    const cards = document.querySelectorAll('.goods .card');
    //получение чекбокса
    const discountCheckbox = document.getElementById("discount-checkbox");
    const topCheckbox = document.getElementById("discount-top");
    const stockCheckbox = document.getElementById("discount-stock");
    const goods = document.querySelector('.goods');
    //получение инпута с минимальным значением
    const min = document.getElementById('min');
    //получение инпута с максимальным значением
    const max = document.getElementById('max');
    //получение поля поиска
    const search = document.querySelector('.search-wrapper_input');
    const searchBtn = document.querySelector('.search-btn');

    //отслеживание события и фильтрация карточек
    discountCheckbox.addEventListener('click', () => {
        cards.forEach((card) => {
            //проверка на состояние чекбокса
            if(discountCheckbox.checked){
                //проверка на наличие класса у товара
                if(!card.querySelector('.card-sale')){
                    //удаление карточек без необходимого класса
                    card.parentNode.style.display = 'none';
                }
            }else{
                //вовзращение всех карточек товаров
                card.parentNode.style.display = '';
            }
        });
    });
    //отслеживание события и фильтрация карточек
    topCheckbox.addEventListener('click', () => {
        cards.forEach((card) => {
            //проверка на состояние чекбокса
            if(topCheckbox.checked){
                //проверка на наличие класса у товара
                if(!card.querySelector('.card-sale')){
                    //удаление карточек без необходимого класса
                    card.parentNode.style.display = 'none';
                }
            }else{
                //вовзращение всех карточек товаров
                card.parentNode.style.display = '';
            }
        });
    });
    //отслеживание события и фильтрация карточек
    stockCheckbox.addEventListener('click', () => {
        cards.forEach((card) => {
            //проверка на состояние чекбокса
            if(stockCheckbox.checked){
                //проверка на наличие класса у товара
                if(!card.querySelector('.card-sale')){
                    //удаление карточек без необходимого класса
                    card.parentNode.style.display = 'none';
                }
            }else{
                //вовзращение всех карточек товаров
                card.parentNode.style.display = '';
            }
        });
    });

    //фильтр по цене
    function  filterPrice(){
        cards.forEach((card) => {
            const cardPrice = card.querySelector('.card-price');
            const price = parseFloat(cardPrice.textContent);
            //проверка на наличие значений в полях ввода и проверка цен карточек  и сравнение с элементами
            if((min.value && price < min.value) || (max.value && price > max.value)){
                card.parentNode.remove();
            }else{
                goods.appendChild(card.parentNode);
            }
        });
    }
    //получение события при изменения инпутов
    min.addEventListener('change', filterPrice);
    max.addEventListener('change', filterPrice);


    //поисковые запросы
    searchBtn.addEventListener('click', () => {
        const searchText = new RegExp(search.value.trim(), 'i');
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if(!searchText.test(title.textContent)){
                card.parentNode.style.display = 'none';
            }else{
                card.parentNode.style.display = '';
            }
        })
        search.value = '';
    });
}


//end фильтр акции

//вызов функций
//отслеживание чекбокса
toggleCheckbox();
//работа с корзиной и модальным окном
toggleCart();
//добавление товара в корзину и изменения в корзине
addCart();
//фильтры на страницы при помощи чекбокса и по цене
actionPage()