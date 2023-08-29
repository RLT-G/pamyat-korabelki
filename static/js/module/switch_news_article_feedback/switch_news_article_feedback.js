
// новости-статьи-отзывы
document.querySelectorAll('#module_switch_news_article_feedback .news_article_feedback_switch .left > div').forEach((element) => {
    element.addEventListener('click', () => {
        // если нажато на активный переключатель 
        if (! element.classList.contains('active')) {
            // удалит класс у активного переключателя
            document.querySelector('#module_switch_news_article_feedback .news_article_feedback_switch .left > div.active').classList.remove('active');
            // присвоит класс нажатому переключателю
            element.classList.add('active');
            
            // заменит карточки в соответствии с активным переключателем
            f_content_change(0);
        }
    });
});



// заменит карточки в соответствии с активным переключателем
function f_content_change(card_all_index_begin) {

    // название активного переключателя
    const switch_type = document.querySelector('#module_switch_news_article_feedback .news_article_feedback_switch .left .active').getAttribute('data-switch');
    // активный переключатель на русском
    const section_rus = document.querySelector('#module_switch_news_article_feedback .news_article_feedback_switch .left .active button').innerText;
    

    // удалит карточки
    document.querySelectorAll('#module_switch_news_article_feedback .news_article_feedback_cards [data-card]').forEach((element) => {
        element.remove();
    });

    
    // формат карточки в зависимости от типа
    if (switch_type == 'news' || switch_type == 'article') {

        // переберет 3 карточки (item, index, array)
        switch_news_article_feedback_data[switch_type].slice(card_all_index_begin, card_all_index_begin + 3).forEach((item, index)=> {
            // html карточки
            card_html = `
                <a href="">
                    <div class="card news" data-card="`+ switch_type +`" data-index="`+ String(index + card_all_index_begin) +`">
                        <div class="img"></div>
                        <div class="content">
                            <div class="top">
                                <p class="type">`+ section_rus +`</p>
                                <p class="date">`+ item['date'] +`</p>
                            </div>
                            <p class="text">`+ item['text'] +`</p>
                            <p class="then">Читать полностью</p>
                        </div>
                    </div>
                </a>
            `
            // добавит карточку
            document.querySelector('#module_switch_news_article_feedback .news_article_feedback_cards').insertAdjacentHTML('beforeEnd', card_html);
        });

    } else {

        // переберет 3 карточки (item, index, array)
        switch_news_article_feedback_data[switch_type].slice(card_all_index_begin, card_all_index_begin + 3).forEach((item, index)=> {
            // html карточки
            card_html = `
                <a href="">
                    <div class="card feedback" data-card="`+ switch_type +`" data-index="`+ String(index + card_all_index_begin) +`">
                        <div class="content">
                            <div class="top">
                                <p class="type">`+ section_rus +`</p>
                                <p class="date">`+ item['date'] +`</p>
                            </div>
                            <p class="name">`+ item['name'] +`</p>
                            <p class="text">`+ item['text'] +`</p>
                            <p class="then">Читать полностью</p>
                        </div>
                    </div>
                </a>
            `        
            // добавит карточку
            document.querySelector('#module_switch_news_article_feedback .news_article_feedback_cards').insertAdjacentHTML('beforeEnd', card_html);
        });
    }


    // де/активация стрелки левой
    if (card_all_index_begin == 0) {
        document.querySelector('#module_switch_news_article_feedback .news_article_feedback_cards button.arrow-left').classList.add('active_not');
    } else {
        document.querySelector('#module_switch_news_article_feedback .news_article_feedback_cards button.arrow-left').classList.remove('active_not');
    }

    // де/активация стрелки правой
    if (document.querySelectorAll('#module_switch_news_article_feedback .news_article_feedback_cards [data-card]')[2].getAttribute('data-index') == String(switch_news_article_feedback_data[switch_type].length -1)) {
        document.querySelector('#module_switch_news_article_feedback .news_article_feedback_cards button.arrow-right').classList.add('active_not');
    } else {
        document.querySelector('#module_switch_news_article_feedback .news_article_feedback_cards button.arrow-right').classList.remove('active_not');
    }
}


// добавит карточки при загрзке страницы 
f_content_change(0);



// нажатие на стрелки
function f_arrow_click(side) {

    // если left стрелка
    if (side == 'left') {
        // alert('OK left');
        if (
            // document.querySelectorAll('#module_switch_news_article_feedback .news_article_feedback_cards [data-card]')[0].getAttribute('data-index') == '0'
            // &&
            ! document.querySelector('#module_switch_news_article_feedback .news_article_feedback_cards button.arrow-left').classList.contains('active_not')
        ) {
            // заменит карточки в соответствии с активным переключателем
            f_content_change(Number(document.querySelectorAll('#module_switch_news_article_feedback .news_article_feedback_cards [data-card]')[0].getAttribute('data-index')) - 1);
        }
    }
    // если right стрелка
    else if (side == 'right') {
        // alert('OK right');
        if (
            // document.querySelectorAll('#module_switch_news_article_feedback .news_article_feedback_cards [data-card]')[2].getAttribute('data-index') !== String(switch_news_article_feedback_data[document.querySelector('#module_switch_news_article_feedback .news_article_feedback_switch .left .active').getAttribute('data-switch')].length -1)
            // &&
            ! document.querySelector('#module_switch_news_article_feedback .news_article_feedback_cards button.arrow-right').classList.contains('active_not')
        ) {
            // заменит карточки в соответствии с активным переключателем
            f_content_change(Number(document.querySelectorAll('#module_switch_news_article_feedback .news_article_feedback_cards [data-card]')[0].getAttribute('data-index')) + 1);
        }
    }
}

// если нажатие на стрелки  :not(.active_not)
document.querySelector('#module_switch_news_article_feedback .news_article_feedback_cards button.arrow-left').addEventListener('click', (event) => {
    f_arrow_click('left');
});
document.querySelector('#module_switch_news_article_feedback .news_article_feedback_cards button.arrow-right').addEventListener('click', (event) => {
    f_arrow_click('right');
});