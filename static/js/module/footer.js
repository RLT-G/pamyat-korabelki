// html подвала
let footer_html = `
<footer>
    <div class="content">
        <div class="top">
            <a href="page1.html">
                <div>
                    <img src="../static/img/index/логоfooter.svg" alt="logo.svg">
                </div>
            </a>
            <div class="right">
                <div class="container first">
                    <a href="page7.html"><div><h1>264-ОПАБ</h1></div></a>
                    <a href="page3.html"><div>История</div></a>
                    <a href="page8.html"><div>Календарь событий</div></a>
                    <a href="page7.html"><div>Участники</div></a>
                    <a href="page9.html"><div>Видеопроект</div></a>
                </div>
                <div class="container second">
                    <a href="page4.html"><div><h1>ПЕРСОНАЛИИ</h1></div></a>
                    <a href="page10.html"><div>Герои</div></a>
                    <a href="page7.html"><div>264-ОПАБ</div></a>
                    <a href="page10.html"><div>Студенты</div></a>
                    <a href="page10.html"><div>Выпускники</div></a>
                    <a href="page10.html"><div>Преподователи</div></a>
                    <a href="page5.html"><div>Факультеты</div></a>
                </div>
                <div class="container thirt">
                    <a href="page3.html"><div><h1>ИСТОРИЯ</h1></div></a>
                    <a href="page11.html"><div><h1>СТАТЬИ</h1></div></a>
                    <a href="page14.html"><div><h1>КОНТАКТЫ</h1></div></a>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="left">
                <a href="http://vk.com/"><div><img src="../static/img/index/vk.svg" alt=""></div></a>
                <a href="https://web.telegram.org/"><div><img src="../static/img/index/tg.svg" alt=""></div></a>
                <a href="http://instagram.com/"><div><img src="../static/img/index/insta.svg" alt=""></div></a>
                <a href="https://www.linkedin.com/"><div><img src="../static/img/index/in.svg" alt=""></div></a>
            </div>
            <div class="right">
                При перепечатке материалов сайта<br>
                ссылка на первоисточник обязательна
            </div>
        </div>
    </div>
</footer>
`

// вставит html подвала в конце body
document.querySelector('body').insertAdjacentHTML('beforeend', footer_html);