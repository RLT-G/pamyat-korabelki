
// 
function f_pop_up_3 (element, img_path) {
    

    console.log(
        // element.backgroundImage.split(/"/)[1]
        // $(element).css("background-image").split(/"/)[1]
    )
    // 
    let popup3_html = `
        <div id="pop_up_3" class="pop_up"">
            <div class="pop_up__body">
                <div class="pop_up__content">
                    <button class="close"></button>
                    <img class="popup3_img" src="`+ img_path +`">
                    <div class="text">`+ element.getAttribute('alt') +`</div>
                </div>
            </div>
        </div>
    `
    
    // 
    document.querySelector('main').insertAdjacentHTML('afterEnd', popup3_html);

    // 
    $("#pop_up_3").fadeIn(300);
    // запретит прокрутку body
    document.body.style.overflow = 'hidden';


    f_pop_up_3_hide();

}


function f_pop_up_3_hide () {

    document.querySelector('#pop_up_3').addEventListener('click', (event)=> {

        // console.log(event.target)
        // 
        if (!event.target.classList.contains('popup3_img') && !event.target.classList.contains('text')) {
            // запретит прокрутку body
            document.body.style.overflow = 'auto';
            // 
            $("#pop_up_3").fadeOut(300);
            $("#pop_up_3").remove();

            return false;
        }

    });
}