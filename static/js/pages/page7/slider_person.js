
let index_begin_slider_person = 0;

// 
function f_slider_person() {

    // для перебора 3х карточек
    let card_number = 0;
    // на сколько пролистали вправо
    // let arrow_plus = Number(document.querySelector('#block_slider_person > .right > .carousel > .items[data-arrow_plus]').getAttribute('data-arrow_plus'));

    // 
    let index_for_local = 0;
    // 
    for (const key in data_person) {
        // 
        if (card_number >= 3) {break;}
        // 
        for (let i = 0; i < data_person[key].length; i++) {
            // 
            if (card_number >= 3) {break;}
            // 
            if (index_begin_slider_person > index_for_local) {index_for_local+=1; continue;}

            // карточка для изменения
            let item = document.querySelectorAll('#block_slider_person > .right > .carousel > .items > a')[card_number];

            // имя
            item.querySelector('.bottom > .text_main > .name').innerHTML = data_person[key][i]['имя'];
            // ссылка
            item.setAttribute('href', data_person[key][i]['ссылка']);
            // изображение
            item.querySelector('.top').style.backgroundImage = 'url(' + data_person[key][i]['изображение'] + ')';
            // описание
            item.querySelector('.bottom > .text_main > .description').innerHTML = data_person[key][i]['описание'];
            // хештеги
            item.querySelector('.bottom > .hashtag').innerHTML = '';
            data_person[key][i]['хештеги'].forEach((element) => {
                item.querySelector('.bottom > .hashtag').insertAdjacentHTML('beforeEnd', '<span>#' + element + '</span>');
            });
            // 
            card_number += 1;
        };
    };


    // де/активация стрелки левой
    if (index_begin_slider_person == 0) {
        document.querySelector('#block_slider_person > .right > .carousel > .a-left').classList.add('active_not');
    } else {
        document.querySelector('#block_slider_person > .right > .carousel > .a-left').classList.remove('active_not');
    }

    // де/активация стрелки правой
    if (index_begin_slider_person >= 4) {
        document.querySelector('#block_slider_person > .right > .carousel > .a-right').classList.add('active_not');
    } else {
        document.querySelector('#block_slider_person > .right > .carousel > .a-right').classList.remove('active_not');
    }
}

f_slider_person();



// нажатие на стрелки
function f_slider_person_arrow_click(side) {

    // если left стрелка
    if (side == 'left') {
        if (! document.querySelector('#block_slider_person > .right > .carousel > .a-left').classList.contains('active_not')) {
            // заменит карточки в соответствии с активным переключателем
            index_begin_slider_person -= 1;
            f_slider_person();
            // f_slider_person(index_begin_slider_person - 1);
        }
    }
    // если right стрелка
    else if (side == 'right') {
        if (! document.querySelector('#block_slider_person > .right > .carousel > .a-right').classList.contains('active_not')) {
            // заменит карточки в соответствии с активным переключателем
            index_begin_slider_person += 1;
            f_slider_person();
            // f_slider_person(index_begin_slider_person + 1);
        }
    }
}

// если нажатие на стрелки
document.querySelector('#block_slider_person > .right > .carousel > .a-left').addEventListener('click', () => {
    f_slider_person_arrow_click('left');
});
document.querySelector('#block_slider_person > .right > .carousel > .a-right').addEventListener('click', () => {
    f_slider_person_arrow_click('right');
});