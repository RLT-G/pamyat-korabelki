// html шапки
let header_html = `
<header>
    <div class="content">
        <div class="top">
            <a class="logo-href" href="page1.html">
                <div class="logo"></div>
            </a>
            <button class="ad-button"></button>
            <div class="nav">
                <a href="page7.html">264-Й ОПАБ</a>
                <a href="page3.html">ИСТОРИЯ</a>
                <a href="page4.html">ПЕРСОНАЛИИ</a>
                <a href="page14.html">КОНТАКТЫ</a>
                <a href="page13.html">ОТЗЫВЫ</a>
                <!-- Поп каво? -->
                <a href="/">
                    <img src="../../static/img/index/поиск.svg" alt="поиск.svg">
                </a>
            </div>
        </div>

        <div class="bottom">
            <a class="base-href" href="page10.html">
                <div class="c1">Герои</div>
            </a>

            <div data-popup_list>
                <div class="c1">264-ОПАБ</div>
                <div class="all-block opab" data-active="false">
                    <a href="page3.html">
                        <div class="block">ИСТОРИЯ</div>
                    </a>
                    <a href="page8.html">
                        <div class="block">КАЛЕНДАРЬ СОБЫТИЙ</div>
                    </a>
                    <a href="page7.html">
                        <div class="block">УЧАСТНИКИ</div>
                    </a>
                    <a href="page9.html">
                        <div class="block">ВИДЕОПРОЕКТ</div>
                    </a>
                </div>
            </div>

            <div data-popup_list>
                <div class="c1">Факультеты</div>
                <div class="all-block fuck" data-active="false">
                    <a href="page6.html">
                        <div class="block">Кораблестроения<br>и океанотехники</div>
                    </a>
                    <a href="page6.html">
                        <div class="block">корабельной<br>энергетики<br>и автоматики</div>
                    </a>
                    <a href="page6.html">
                        <div class="block">морского<br>приборостроения</div>
                    </a>
                    <a href="page6.html">
                        <div class="block">Инженерно-<br>экономический</div>
                    </a>
                    <a href="page6.html">
                        <div class="block">цифровых<br>промышленных<br>технологий</div>
                    </a>
                    <a href="page6.html">
                        <div class="block">естественнонаучного<br>и гуманитарного<br>образования</div>
                    </a>
                </div>
            </div>

            <a class="base-href" href="page10.html">
                <div class="c1">Студенты</div>
            </a>
            <a class="base-href" href="page10.html">
                <div class="c1">Преподователи</div>
            </a>
            <a class="base-href" href="page10.html">
                <div class="c1">Выпускники</div>
            </a>
        </div>
    </div>
</header>
`

// вставит html шапки в начале body
document.querySelector('body').insertAdjacentHTML('afterBegin', header_html);



// нажатие на странице
document.addEventListener('click', (event) => {
    if (document.querySelector('header .bottom [data-popup_list] .all-block[data-active]').getAttribute('data-active') == 'true') {
        alert(2)
        document.querySelector('header .bottom [data-popup_list] .all-block[data-active]').setAttribute('data-active', 'false');
    }
});


document.querySelectorAll('header .bottom [data-popup_list]').forEach((element) => {
    element.addEventListener('mouseover', () => {
        if (element.querySelector('.all-block[data-active]').getAttribute('data-active') == 'false') {
            element.querySelector('.all-block[data-active]').setAttribute('data-active', 'true');
        }
    });
    element.addEventListener('mouseout', () => {
        if (element.querySelector('.all-block[data-active]').getAttribute('data-active') == 'true') {
            element.querySelector('.all-block[data-active]').setAttribute('data-active', 'false');
        }
    });
});