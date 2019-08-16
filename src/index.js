'use strict';
import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckbox from './modules/toggleCheckbox';
import toggleCart from './modules/toggleCart';
import addCart from './modules/addCart';
import actionPage from './modules/actionPage';

(async function(){
    const db = await getData();
    renderCards(db);
    renderCatalog();
    //отслеживание чекбокса
    toggleCheckbox();
    //работа с корзиной и модальным окном
    toggleCart();
    //добавление товара в корзину и изменения в корзине
    addCart();
    //фильтры на страницы при помощи чекбокса и по цене
    actionPage();
}());
//вызов функций
//получение данных сайта
// getData().then((data) => {
//     renderCards(data);
//     renderCatalog();
//     //отслеживание чекбокса
//     toggleCheckbox();
//     //работа с корзиной и модальным окном
//     toggleCart();
//     //добавление товара в корзину и изменения в корзине
//     addCart();
//     //фильтры на страницы при помощи чекбокса и по цене
//     actionPage();
// });