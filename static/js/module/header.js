// html шапки
let header_html = `
<header>
            <div class="content">
                <div class="top">
                    <a class="logo-href" href="page1.html">
                        <div class="logo"></div>
                    </a>
                    <div class="nav">
                        <a href="page7.html">264-Й ОПАБ</a>
                        <a href="page3.html">ИСТОРИЯ</a>
                        <a href="page4.html">ПЕРСОНАЛИИ</a>
                        <a href="page14.html">КОНТАКТЫ</a>
                        <a href="page13.html">ОТЗЫВЫ</a>
                        <!-- Поп каво? -->
                        <a href="/">
                            <img src="../static/img/index/поиск.svg" alt="поиск.svg">
                        </a>
                    </div>
                </div>
                <div class="bottom">
                    <a class="base-href" href="page10.html">
                        <div class="c1">Герои</div>
                    </a>
                    <details>
                        <summary>264-ОПАБ</summary>
                        <div class="all-block opab">
                            <div class="block">
                                <a href="page3.html">ИСТОРИЯ</a>
                            </div>
                            <div class="block">
                                <a href="page8.html">КАЛЕНДАРЬ СОБЫТИЙ</a>
                            </div>
                            <div class="block">
                                <a href="page7.html">УЧАСТНИКИ</a>
                            </div>
                            <div class="block last">
                                <a href="page9.html">ВИДЕОПРОЕКТ</a>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>Факультеты</summary>
                        <div class="all-block fuck">
                            <div class="block">
                                <a href="page6.html">Кораблестроения<br>и океанотехники</a>
                            </div>
                            <div class="block">
                                <a href="page6.html">корабельной<br>энергетики<br>и автоматики</a>
                            </div>
                            <div class="block">
                                <a href="page6.html">морского<br>приборостроения </a>
                            </div>
                            <div class="block">
                                <a href="page6.html">Инженерно-<br>экономический</a>
                            </div>
                            <div class="block">
                                <a href="page6.html">цифровых<br>промышленных<br>технологий</a>
                            </div>
                            <div class="block last">
                                <a href="page6.html">естественнонаучного<br>и гуманитарного<br>образования</a>
                            </div>
                        </div>
                    </details>
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