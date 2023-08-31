
// проверка наличия изображений по следующему индексу
document.querySelectorAll('main [data-img_block_number][data-img_element="img"]').forEach((element)=> {
    
    // проверка наличия изображений по следующему индексу
    let img_check = new Image();
    img_check.src = element.getAttribute('data-img_path') + '2' + element.getAttribute('data-img_format');
    // де/активация стрелки правой
    img_check.onerror = ()=> {
        document.querySelector('main [data-img_block_number="'+ element.getAttribute('data-img_block_number') +'"][data-img_arrow="right"]').classList.add('active_not');
    }

});




// 
document.querySelectorAll('main [data-img_block_number][data-img_arrow]').forEach((element) => {
    element.addEventListener('click', () => {
        // если стрелка активная
        if (! element.classList.contains('active_not')) {

            // 
            let img_element = document.querySelector('main [data-img_block_number="'+ element.getAttribute("data-img_block_number") +'"][data-img_element="img"]');
            
            // 
            if (element.getAttribute('data-img_arrow') == 'left') {
                // убавить индекс имг
                img_element.setAttribute('data-img_index', Number(img_element.getAttribute('data-img_index') - 1));
            } else {
                // прибавить индекс имг
                img_element.setAttribute('data-img_index', Number(img_element.getAttribute('data-img_index')) + 1);
            }
            
            // сменить картинку в соответствии с индексом
            img_element.style.backgroundImage = 'url(' + img_element.getAttribute('data-img_path') + img_element.getAttribute('data-img_index') + img_element.getAttribute('data-img_format') + ')';


            // стрелки
            // стрелки

            // левая стрелка
            const arrow_left = document.querySelector('main [data-img_block_number="'+ element.getAttribute('data-img_block_number') +'"][data-img_arrow="left"]');
            // правая стрелка
            const right_left = document.querySelector('main [data-img_block_number="'+ element.getAttribute('data-img_block_number') +'"][data-img_arrow="right"]');

            // де/активация стрелки левой
            if (img_element.getAttribute('data-img_index') == '1') {
                arrow_left.classList.add('active_not');
            } else {
                arrow_left.classList.remove('active_not');
            }

            // проверка наличия изображений по следующему индексу
            let img_check = new Image();
            img_check.src = img_element.getAttribute('data-img_path') + String(Number(img_element.getAttribute('data-img_index')) + 1) + img_element.getAttribute('data-img_format');
            // де/активация стрелки правой
            img_check.onerror = ()=> {
                right_left.classList.add('active_not');
            }
            img_check.onload = ()=> {
                right_left.classList.remove('active_not');
            }

        }
    });
});