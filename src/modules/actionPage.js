import filter from './filter';
export default function actionPage() {
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
            if (discountCheckbox.checked) {
                //проверка на наличие класса у товара
                if (!card.querySelector('.card-sale')) {
                    //удаление карточек без необходимого класса
                    card.parentNode.style.display = 'none';
                }
            } else {
                //вовзращение всех карточек товаров
                card.parentNode.style.display = '';
            }
        });
    });
    //отслеживание события и фильтрация карточек
    topCheckbox.addEventListener('click', () => {
        cards.forEach((card) => {
            //проверка на состояние чекбокса
            if (topCheckbox.checked) {
                //проверка на наличие класса у товара
                if (!card.querySelector('.card-sale')) {
                    //удаление карточек без необходимого класса
                    card.parentNode.style.display = 'none';
                }
            } else {
                //вовзращение всех карточек товаров
                card.parentNode.style.display = '';
            }
        });
    });
    //отслеживание события и фильтрация карточек
    stockCheckbox.addEventListener('click', () => {
        cards.forEach((card) => {
            //проверка на состояние чекбокса
            if (stockCheckbox.checked) {
                //проверка на наличие класса у товара
                if (!card.querySelector('.card-sale')) {
                    //удаление карточек без необходимого класса
                    card.parentNode.style.display = 'none';
                }
            } else {
                //вовзращение всех карточек товаров
                card.parentNode.style.display = '';
            }
        });
    });

    //получение события при изменения инпутов
    min.addEventListener('change', filter);
    max.addEventListener('change', filter);


    //поисковые запросы
    searchBtn.addEventListener('click', () => {
        const searchText = new RegExp(search.value.trim(), 'i');
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if (!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        })
        search.value = '';
    });
}