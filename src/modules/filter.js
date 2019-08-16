export default function filter() {
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
    const activeLi = document.querySelector('.catalog-list li.active');
    cards.forEach((card) => {
        const cardPrice = card.querySelector('.card-price');
        const price = parseFloat(cardPrice.textContent);
        const discount = card.querySelector('.card-sale');

        card.parentNode.style.display = '';

        if ((min.value && price < min.value) || (max.value && price > max.value)) {
            card.parentNode.style.display = 'none';
        } else if (discountCheckbox.checked && !discount) {
            card.parentNode.style.display = 'none';
        }else if(activeLi){
            if(card.dataset.category !== activeLi.textContent){
                card.parentNode.style.display = 'none';
            }
        } else {
            card.parentNode.style.display = '';
        }


    });
}