



// новости-статьи-отзывы
document.querySelectorAll('main .container4 .left > div').forEach((element) => {
    element.addEventListener('click', (event) => {
        // если нажато на активный переключатель 
        if (! element.classList.contains('active')) {
            // удалит класс у активного переключателя
            document.querySelector('main .container4 .left > div.active').removeAttribute('class', 'active');
            // присвоит класс нажатому переключателю
            element.setAttribute('class', 'active');
            
            // заменит контент в соответствии с переключателем
            f_content_change(element);
        }
    });
});


// 
let switch_news = [
    {
        image_path: '',
        date: '22 июня 2022',
        text: '22 июня 1941 г. в 4 часа утра фашистская Германия вероломно напала на Советский Союз',
    },
    {
        image_path: '',
        date: '22 июня 2022',
        text: '22 июня 1941 г. в 4 часа утра фашистская Германия вероломно напала на Советский Союз',
    },
    {
        image_path: '',
        date: '22 июня 2022',
        text: '22 июня 1941 г. в 4 часа утра фашистская Германия вероломно напала на Советский Союз',
    },
];
// 
// let switch_article = 
// 
// let switch_feedback = 


// 
function f_content_change(element) {
    alert(element.getAttribute('data-switch'))
}