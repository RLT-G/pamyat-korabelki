
// 
// document.querySelector('#page9_navigation')

function f_video_generation () {

    // 
    let html = '';

    // 
    for (let i = 0; i < data_video.length; i++) {

        // // ссылка
        // item.setAttribute('data-video_href', data_video[i]['ссылка']);
        // // глава
        // item.querySelector('.title').innerHTML = data_video[i]['глава'];
        // // заголовок
        // item.querySelector('.text').innerHTML = data_video[i]['заголовок'];
        // // изображение_обложка
        // item.style.backgroundImage = 'url(' + data_video[i]['изображение_обложка'] + ')';

        let html += `
            <div id="ii">
                <div class="p-container">
                    <div class="title"></div>
                    <div class="p">
                        <div class="I1">Глава II. Ты записался добровольцем?</div>
                    </div>
                </div>
                <div class="p-container">
                    <div class="title"></div>
                    <div class="p v">
                        <div class="vv"></div>
                    </div>
                </div>
            </div>
            `

    };
    
    // 
    document.querySelector('#block_video_generation').insertAdjacentHTML('afterBegin', '');

}