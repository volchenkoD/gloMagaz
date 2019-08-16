//получение чекбокса
export default function toggleCheckbox() {
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
        elem.addEventListener('change', function () {
            //проверка на включеность этого чекбокса
            if (this.checked) {
                //добавление следующему элементу после нажатие на чекбокс класса
                this.nextElementSibling.classList.add('checked');
            } else {
                //удаление следующему элементу после нажатие на чекбокс класса
                this.nextElementSibling.classList.remove('checked');
            }
        })
    })
}

//end checkbox