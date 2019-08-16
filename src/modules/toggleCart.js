export default function toggleCart() {
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