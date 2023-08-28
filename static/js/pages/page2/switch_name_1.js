
// switch_name_1
document.querySelectorAll('main .content > .switches > [data-switch_name_1]').forEach((element) => {
    element.addEventListener('click', () => {

        // если нажато на активный переключатель 
        if (! element.classList.contains('active')) {

            // удалит класс у активного переключателя
            document.querySelector('main .content > .switches > [data-switch_name_1].active').classList.remove('active');
            // присвоит класс нажатому переключателю
            element.classList.add('active');

            // заменит switch_name_2 на актуальные разделы
            f_switch_name_2_html();
        }

    });
});



// заменит switch_name_2 на актуальные разделы
function f_switch_name_2_html() {

    // подходящий объект
    let switch_data_relevant = switch_data[
        document.querySelector('main .content > .switches > [data-switch_name_1].active').getAttribute('data-switch_name_1')
    ];


    let switch_name_2_html = '';
    // html switch_name_1
    if (Object.keys(switch_data_relevant).length < 3) {
        switch_name_2_html += '<div class="hrefs1 less_three" data-hrefs>';
    } else {
        switch_name_2_html += '<div class="hrefs1" data-hrefs>';
    }

    let index_local = 0;
    // переберет ключи словаря определенного switch_name_1
    Object.keys(switch_data_relevant).forEach((key) => {

        index_local += 1;

        // расположит переключатели в два ряда, если больше 3х переключателей
        if (Object.keys(switch_data_relevant).length > 3) {
            if (index_local == 4) {
                switch_name_2_html += '</div><div class="hrefs2" data-hrefs>';
            }
        }

        switch_name_2_html += `
            <a class="" data-switch_name_2="`+ key +`">`+ switch_data_relevant[key][0]['переключатель_название'] +`</a>
        `

    });

    // 
    switch_name_2_html += '</div>';

    // удалит старые switch_name_2
    document.querySelectorAll('main .content > .info > .inner > [data-hrefs]').forEach((element) => {
        element.remove();
    });    

    // вставит html switch_name_2
    document.querySelector('main .content > .info > .inner').insertAdjacentHTML('afterBegin', switch_name_2_html);
    
    // сделает первый переключатель switch_name_2 активным
    document.querySelectorAll('main .content > .info > .inner [data-switch_name_2]')[0].classList.add('active');


    // нажатие switch_name_2
    f_switch_name_2_click()

    // смена контента при смене switch_name_2
    f_switch_name_2_content(1);
}

f_switch_name_2_html();