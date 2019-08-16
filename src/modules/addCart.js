export default function addCart() {
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