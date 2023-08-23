
// новости-статьи-отзывы
document.querySelectorAll('#module_switch_news_article_feedback .news_article_feedback_switch .left > div').forEach((element) => {
    element.addEventListener('click', (event) => {
        // если нажато на активный переключатель 
        if (! element.classList.contains('active')) {
            // удалит класс у активного переключателя
            document.querySelector('#module_switch_news_article_feedback .news_article_feedback_switch .left > div.active').removeAttribute('class', 'active');
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
    document.querySelectorAll('#module_switch_news_article_feedback .news_article_feedback_cards [data-card]').forEach((card) => {
        card.remove();
    });


    // 
    if (switch_type == 'news' || switch_type == 'article') {

        // переберет карточки (item, index, array)
        switch_news_article_feedback_data[switch_type].forEach((item)=> {
            // html карточки
            card_html = `
                <a href="">
                    <div class="card news" data-card="`+ switch_type +`">
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
            document.querySelector('#module_switch_news_article_feedback .news_article_feedback_cards > .arrow-right').insertAdjacentHTML('beforeBegin', card_html);
        });

    } else {

        // переберет карточки (item, index, array)
        switch_news_article_feedback_data[switch_type].forEach((item)=> {
            // html карточки
            card_html = `
                <a href="">
                    <div class="card feedback" data-card="`+ switch_type +`">
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
            document.querySelector('#module_switch_news_article_feedback .news_article_feedback_cards > .arrow-right').insertAdjacentHTML('beforeBegin', card_html);
        });
    }
}


// добавит карточки при загрзке страницы 
f_content_change('news', 'НОВОСТИ');
// f_content_change('feedback', 'ОТЗЫВЫ');