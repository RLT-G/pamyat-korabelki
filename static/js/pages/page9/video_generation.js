
// 
// document.querySelector('#page9_navigation')

function f_video_generation () {

    // 
    let block_video_html = '';

    // 
    for (let i = 0; i < data_video.length; i++) {

        block_video_html += `
            <div id="`+ data_video[i]['id'] + `">
                <div class="p-container">
                    <div class="title"></div>
                    <div class="p">
                        <div class="I1">`+ data_video[i]['глава'] + '. ' + data_video[i]['заголовок'] +`</div>
                    </div>
                </div>
        `

        if (i !== 0) {
            block_video_html += `
                <div class="p-container">
                    <div class="title"></div>
                    <div class="p v">
                        <div class="vv"></div>
                    </div>
                </div>
            `
        } else {
            block_video_html += `
                <div class="p-container">
                    <div class="title">`
            
            for (let i2 = 0; i2 < data_video.length; i2++) {
                block_video_html += '<a href="#'+ data_video[i2]['id'] +'">'+ data_video[i2]['глава'] +'</a>'
            }
                        
            block_video_html += `
                    </div>
                    <div class="p v">
                        <div class="vv"></div>
                    </div>
                </div>
            `
        }

        block_video_html += '</div>'

    };
    
    // 
    document.querySelector('#block_video_generation').innerHTML = block_video_html;

}

f_video_generation();