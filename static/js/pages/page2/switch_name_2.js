
// нажатие switch_name_2
function f_switch_name_2_click() {
    document.querySelectorAll('main .content > .info > .inner [data-switch_name_2]').forEach((element) => {
        element.addEventListener('click', () => {

            // если нажато на активный переключатель 
            if (! element.classList.contains('active')) {

                // удалит класс у активного переключателя
                document.querySelector('main .content > .info > .inner [data-switch_name_2].active').classList.remove('active');
                // присвоит класс нажатому переключателю
                element.classList.add('active');
                
                // смена контента при смене switch_name_2
                f_switch_name_2_content(1);
            }

        });
    });
}

// нажатие switch_name_2
f_switch_name_2_click()



// смена контента при смене switch_name_2
function f_switch_name_2_content(index) {
    // console.log(index)

    // подходящий объект
    let switch_data_relevant = switch_data[
            document.querySelector('main .content > .switches > [data-switch_name_1].active').getAttribute('data-switch_name_1')
        ][
            document.querySelector('main .content > .info > .inner [data-switch_name_2].active').getAttribute('data-switch_name_2')
        ];


    // заменит контент на data
    // заменит контент на data

    // текст 
    document.querySelector('main .content > .info > .inner > .data > .left').innerHTML = document.querySelector('main .content > .info > .inner [data-switch_name_2].active').getAttribute('data-switch_name_2') + switch_data_relevant[index]['текст'];
    // изображение 
    document.querySelector('main .content > .info > .inner > .data > .right > .photo').style.backgroundImage = switch_data_relevant[index]['изображение'][0];
    // описание изображения 
    document.querySelector('main .content > .info > .inner > .data > .right > .textt').innerHTML = switch_data_relevant[index]['изображение'][1];
    // индекс
    document.querySelector('main .content > .info > .inner > .arrow > .top > [data-index]').innerHTML = String(index) + '/' + String(switch_data_relevant.length - 1);
    document.querySelector('main .content > .info > .inner > .arrow > .top > [data-index]').setAttribute('data-index', String(index));
    
    
    // стрелки
    // стрелки

    // де/активация стрелки левой
    if (index == 1) {
        document.querySelector('main .content > .info > .inner > .arrow > .bottom > .left').classList.add('active_not');
    } else {
        document.querySelector('main .content > .info > .inner > .arrow > .bottom > .left').classList.remove('active_not');
    }

    // де/активация стрелки правой
    if (index == switch_data_relevant.length - 1) {
        document.querySelector('main .content > .info > .inner > .arrow > .bottom > .right').classList.add('active_not');
    } else {
        document.querySelector('main .content > .info > .inner > .arrow > .bottom > .right').classList.remove('active_not');
    }

}

// f_switch_name_2_content(1);



// нажатие на стрелки
function f_arrow_click(side) {

    // если left стрелка
    if (side == 'left') {
        if (
            ! document.querySelector('main .content > .info > .inner > .arrow > .bottom > .left').classList.contains('active_not')
        ) {
            // заменит карточки в соответствии с активным переключателем
            f_switch_name_2_content(
                Number(document.querySelector('main .content > .info > .inner > .arrow > .top > [data-index]').getAttribute('data-index')) - 1
            );
        }
    }
    // если right стрелка
    else if (side == 'right') {
        if (
            ! document.querySelector('main .content > .info > .inner > .arrow > .bottom > .right').classList.contains('active_not')
        ) {
            // заменит карточки в соответствии с активным переключателем
            f_switch_name_2_content(
                Number(document.querySelector('main .content > .info > .inner > .arrow > .top > [data-index]').getAttribute('data-index')) + 1
            );
        }
    }
}

// если нажатие на стрелки  :not(.active_not)
document.querySelector('main .content > .info > .inner > .arrow > .bottom > .left').addEventListener('click', () => {
    f_arrow_click('left');
});
document.querySelector('main .content > .info > .inner > .arrow > .bottom > .right').addEventListener('click', () => {
    f_arrow_click('right');
});