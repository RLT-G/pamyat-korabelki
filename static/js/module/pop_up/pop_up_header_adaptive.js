
// <!-- pop-up мобильной шапки -->
// <!-- pop-up мобильной шапки -->

function pop_up_header_adaptive () {

    // 
    let popup_html = `
        <div id="pop_up_header_adaptive" class="pop_up">
        <div class="pop_up__body">
            <div class="pop_up__content">
                <div class="item i1">МЕНЮ</div>
                <a href="../other/page3.html"><div class="item i2">История</div></a>
                <a href="../other/page4.html"><div class="item i3">персоналии</div></a>
                <div class="hide-block">
                    <a href="../opab/page7.html"><div class="item ii">264-й ОПАБ</div></a>
                    <a href="../other/page10.html"><div class="item ii">герои</div></a>
                    <a href="../other/page5.html"><div class="item ii">факультеты</div></a>
                    <a href="../other/page10.html"><div class="item ii">Студенты</div></a>
                    <a href="../other/page10.html"><div class="item ii">выпускники</div></a>
                    <a href="../other/page10.html"><div class="item ii">преподаватели</div></a>
                    <a href="../other/page4.html"><div class="item ii">общий каталог</div></a>
                </div>
                <a href="../other/page14.html"><div class="item i4">контакты</div></a>
                <a href="../other/page13.html"><div class="item i5">отзывы</div></a>
                <a href=""><div class="item i6">поиск</div></a>
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