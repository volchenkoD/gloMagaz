'use strict';
//checkbox
//получение чекбокса
const checkbox = document.getElementById('discount-checkbox');
//получение событие при клике по чекбоксу
checkbox.addEventListener('change', function() {
    //проверка на включеность этого чекбокса
    if(this.checked){
        //добавление следующему элементу после нажатие на чекбокс класса
        this.nextElementSibling.classList.add('checked');
    }else{
        //удаление следующему элементу после нажатие на чекбокс класса
        this.nextElementSibling.classList.remove('checked');
    }
});
/*
//для нескольких чекбоксов
checkbox.forEach((elem) => {
    elem.addEventListener('change', function() {
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
*/
//end checkbox

//корзина


//получение кнопки корзины
const btnCart = document.getElementById('cart');
const modalCard = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close');
btnCart.addEventListener('click', function(){
    modalCard.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', function(){
    modalCard.style.display = 'none';
    document.body.style.overflow = '';
});
//end корзина

//работа с корзиной

//получение всех товаров

const cards = document.querySelectorAll('.goods .card');
const cartWrapper = document.querySelector('.cart-wrapper');
const cartEmpty = document.getElementById('cart-empty');
const countGoods = document.querySelector('.counter');
cards.forEach((card) => {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData();
    });
});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
}

//end работа с корзиной