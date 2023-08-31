
// <!-- pop-up мобильной шапки -->
// <!-- pop-up мобильной шапки -->

function pop_up_header_adaptive () {

    // 
    let popup_html = `
        <div id="pop_up_header_adaptive" class="pop_up">
            <div class="pop_up__body">
                <div class="pop_up__content">
                    <div class="item1">МЕНЮ</div>
                    <div class="item item2 i">История</div>
                    <div class="item item3 i">персоналии</div>
                    <div class="item ii">264-й ОПАБ</div>
                    <div class="item ii">герои</div>
                    <div class="item ii">факультеты</div>
                    <div class="item ii">Студенты</div>
                    <div class="item ii">выпускники</div>
                    <div class="item ii">преподаватели</div>
                    <div class="item ii">общий каталог</div>
                    <div class="item item4 i">контакты</div>
                    <div class="item item5 i">отзывы</div>
                    <div class="item item6 i">поиск</div>
                </div>
            </div>
        </div>
    `
    
    // 
    document.querySelector('main').insertAdjacentHTML('afterEnd', popup_html);

    // 
    $("#pop_up_header_adaptive").fadeIn(300);
    // // запретит прокрутку body
    // document.body.style.overflow = 'hidden';


    f_pop_up_header_adaptive_hide();

}


function f_pop_up_header_adaptive_hide () {
    // 
    document.querySelector('#pop_up_header_adaptive').addEventListener('click', (event)=> {

        // console.log(event.target)
        // 
        if (!event.target.classList.contains('pop_up__content') && !event.target.classList.contains('item')) {
            // запретит прокрутку body
            document.body.style.overflow = 'auto';
            // 
            $("#pop_up_header_adaptive").fadeOut(300);
            $("#pop_up_header_adaptive").remove();

            return false;
        }
    });
}

console.log(document.documentElement.clientWidth)
// 
if (document.documentElement.clientWidth <= 1024) { 
    console.log(1)
    // 
    document.querySelector('.ad-button').addEventListener('click', ()=>{
        pop_up_header_adaptive();
    });
}