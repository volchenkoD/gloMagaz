export default function getData() {
    const goodsWrapper = document.querySelector('.goods');
    return fetch('../db/db.json')
        .then((Response) => {
            if (Response.ok) {
                return Response.json();
            } else {
                throw new Error('Данные не были получены, ошибка: ' + Response.status);
            }
        })
        .then(data =>{
            return data})
        .catch((err) => {
            console.warn(err);
            goodsWrapper.innerHTML = '<div style = "color: red; font-size: 20px;">Что-то пошло не так</div>';
        });
}