
let index_begin_slider_video = 0;

// 
function f_slider_video() {

    // для перебора 3х карточек
    let card_number = 0;

    // 
    let index_for_local = 0;
    // 
    for (let i = 0; i < data_video.length; i++) {
        // 
        if (card_number >= 3) {break;}
        // 
        if (index_begin_slider_video > index_for_local) {index_for_local+=1; continue;}

        // карточка для изменения
        let item = document.querySelectorAll('#block_slider_video > .right > .carousel > .items2 > .v')[card_number];

        // ссылка
        item.setAttribute('data-video_href', data_video[i]['ссылка']);
        // глава
        item.querySelector('.title').innerHTML = data_video[i]['глава'];
        // заголовок
        item.querySelector('.text').innerHTML = data_video[i]['заголовок'];
        // изображение_обложка
        item.style.backgroundImage = 'url(' + data_video[i]['изображение_обложка'] + ')';

        // 
        card_number += 1;
    };


    // де/активация стрелки левой
    if (index_begin_slider_video == 0) {
        document.querySelector('#block_slider_video > .right > .carousel > .a-left').classList.add('active_not');
    } else {
        document.querySelector('#block_slider_video > .right > .carousel > .a-left').classList.remove('active_not');
    }

    // де/активация стрелки правой
    if (index_begin_slider_video >= 10) {
        document.querySelector('#block_slider_video > .right > .carousel > .a-right').classList.add('active_not');
    } else {
        document.querySelector('#block_slider_video > .right > .carousel > .a-right').classList.remove('active_not');
    }
}

f_slider_video();



// нажатие на стрелки
function f_slider_video_arrow_click(side) {

    // если left стрелка
    if (side == 'left') {
        if (! document.querySelector('#block_slider_video > .right > .carousel > .a-left').classList.contains('active_not')) {
            // заменит карточки в соответствии с активным переключателем
            index_begin_slider_video -= 1;
            f_slider_video();
            // f_slider_video(index_begin_slider_video - 1);
        }
    }
    // если right стрелка
    else if (side == 'right') {
        if (! document.querySelector('#block_slider_video > .right > .carousel > .a-right').classList.contains('active_not')) {
            // заменит карточки в соответствии с активным переключателем
            index_begin_slider_video += 1;
            f_slider_video();
            // f_slider_video(index_begin_slider_video + 1);
        }
    }
}

// если нажатие на стрелки
document.querySelector('#block_slider_video > .right > .carousel > .a-left').addEventListener('click', () => {
    f_slider_video_arrow_click('left');
});
document.querySelector('#block_slider_video > .right > .carousel > .a-right').addEventListener('click', () => {
    f_slider_video_arrow_click('right');
});