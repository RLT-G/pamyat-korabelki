
// новости-статьи-отзывы
document.querySelectorAll('main .container4 .left > div').forEach((element) => {
    element.addEventListener('click', (event) => {
        // если нажато на активный переключатель 
        if (! element.classList.contains('active')) {
            // удалит класс у активного переключателя
            document.querySelector('main .container4 .left > div.active').removeAttribute('class', 'active');
            // присвоит класс нажатому переключателю
            element.setAttribute('class', 'active');
            
            // заменит карточки в соответствии с активным переключателем
            f_content_change(element.getAttribute('data-switch'), element.querySelector('button').innerText);
        }
    });
});




// заменит карточки в соответствии с активным переключателем
function f_content_change(switch_type, section_rus) {

    // удалит карточки
    document.querySelectorAll('main .container5 > [data-card]').forEach((card) => {
        card.remove();
    });


    // база карточки
    let card_base = document.querySelectorAll('body > [data-block_js] > [data-card="'+ switch_type +'"]');
    // let card_base = document.querySelectorAll('body > [data-block_js] > [data-card="'+ switch_type +'"]'); 

    // переберет карточки (item, index, array)
    switch_container5[switch_type].forEach((item)=> {
        
        // 
        let card = card_base[0].cloneNode(true);
        
        card.querySelector('.card .bottom .h1').innerHTML = section_rus;
        card.querySelector('.card .bottom .h2').innerHTML = item['date'];
        card.querySelector('.card .bottom .item2').innerHTML = item['text'];

        // 
        if (switch_type == 'news' || switch_type == 'article') {
            // card.querySelector('.card .bottom .item2').innerHTML = item['text'];
        } else {
            card.querySelector('.card .bottom .name').innerHTML = item['name'];
        }

        // добавит карточку
        document.querySelector('main .container5 > .arrow-right').insertAdjacentHTML('beforeBegin', card.outerHTML);
    });
}

// добавит карточки при загрзке страницы 
f_content_change('news', 'НОВОСТИ');
// f_content_change('feedback', 'НОВОСТИ');