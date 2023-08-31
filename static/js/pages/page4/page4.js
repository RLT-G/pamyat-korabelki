
// 
let table_html = '';

// формирование html (3 уровня вложенности)
Object.keys(data_person).forEach((key, index) => {

    // // 1 уровень
    // if (index % 3 === 0 || index === 0) {
    //     table_html += '<div class="line">';
    // }
    // 2 ур
    table_html += '<div class="cell" id="'+ key +'">';

    // 3 ур. буква и начало блока с именами
    table_html += `
            <div class="letter">
                <h2>`+ key +`</h2>
            </div>
            <div class="names">
        `;

    // 3 ур. имена 
    data_person[key].forEach((key_2, index) => {
        table_html += `
                <a href="`+ data_person[key][index]['ссылка'] +`">
                    <h3>`+ data_person[key][index]['имя'] +`</h3>
                </a>
            `;
    });

    // 3 ур. имена
    table_html += '</div>';
    // 2 ур
    table_html += '</div>';
    // // 1 уровень
    // if (index % 3 === 0) {
    //     table_html += '</div>';
    // }

});


// вставка
document.querySelector('main .content .table').insertAdjacentHTML('beforeEnd', table_html);