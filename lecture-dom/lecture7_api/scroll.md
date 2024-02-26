**Работа со скроллом**

DOM-интерфейсы Window и Element содержат несколько полей и методов для работы с
полосой прокрутки.
Свойства Element.scrollTop и Element.scrollLeft
Свойства Element.scrollTop и Element.scrollLeft возвращают или устанавливают расстояние от начальной точки содержимого элемента (padding-box элемента) до начальной точки его видимого контента. Когда контент элемента не создаёт полосу прокрутки, его scrollTop или
scrollLeft равен нулю.

Значения свойств Element.scrollTop и Element.scrollLeft могут быть любым целым числом, но
с определёнными оговорками:

1. Если элемент не прокручивается, у него нет переполнения или мы не прокручиваем
элемент, scrollTop (scrollLeft) устанавливается в 0.
2. Если значение меньше нуля, scrollTop (scrollLeft) устанавливается в 0.
3. Если установленное значение больше максимума прокручиваемого контента, scrollTop (scrollLeft) устанавливается в максимум.

const box = document.querySelector('#box')
console.log(box.scrollTop, box.scrollLeft)
// Устанавливаем количество прокрученных пикселей
box.scrollTop = 500

**Свойства Element.scrollHeight и Element.scrollWidth**
Свойства Element.scrollHeight и Element.scrollWidth (только чтение) содержат высоту и ширину содержимого элемента соответственно, включая содержимое, невидимое из-за прокрутки. Значение scrollHeight (scrollWidth) равно минимальному clientHeight (clientWidth),
необходимому, чтобы поместить всё содержимое элемента в видимую область, не используя полосу прокрутки. Это значение включает в себя padding элемента, но не его margin.

Как пример использования свойства Element.scrollHeight рассмотрим код, который определяет, прочитал пользователь текст или нет.

<!DOCTYPE html>
<html>
    <head>
        <style>
            #notice {
            display: inline-block;
            margin-bottom: 12px;
            border-radius: 5px;
            width: 600px;
            padding: 5px;
            border: 2px #7FDF55 solid;
            }
            #rules {
            width: 600px;
            height: 130px;
            padding: 5px;
            border: #2A9F00 solid 2px;
            border-radius: 5px;
            }
        </style>
        <title>Регистрация на сайте</title>
    </head>
    <body>
        <form name="registration">
            <p id="notice">Пожалуйста, прокрутите и прочитайте следующий текст.</p>
            <p>
                <textarea id="rules">
                Регистрируясь на сайте, я соглашаюсь со следующими условиями:
                Условие 1
                Условие 2
                ...
                Условие 99
                Условие 100
                </textarea>
            </p>
            <p>
                <input type="checkbox" id="agree" />
                <label for="agree">Я согласен</label>
                <input type="submit" id="nextstep" value="Далее" />
            </p>
        </form>
        <script>
            const rulesElement = document.getElementById('rules')
            const agreeCheckbox = document.getElementById('agree')
            const nextStepButton = document.getElementById('nextstep')
            const {scrollHeight, scrollTop, clientHeight} = rulesElement
            let isRead = false
            const handleCheckReading = () => {
                if (isRead) {
                    return
                }
                isRead = scrollHeight - scrollTop === clientHeight
                agreeCheckbox.disabled = nextStepButton.disabled = !isRead
            }
            rulesElement.addEventListener('scroll', handleCheckReading, false)
        </script>
    </body>
</html>

**Методы scroll, scrollTo, scrollBy**

Есть три основных метода, которые позволяют программно управлять полосой прокрутки. При использовании с объектом Window они позволяют управлять прокруткой всего документа, а с DOM-элементами — регулировать прокрутку содержимого элемента.
Методы поддерживают два типа синтаксиса: scrollTo(x-coord, y-coord) и scrollTo(options):
1. x-coord — координаты пикселя по горизонтальной оси документа или элемента,
который надо отобразить вверху слева.
2. y-coord — координаты пикселя по вертикальной оси документа или элемента, который
надо отобразить вверху слева.
3. options — объект с тремя возможными параметрами:
a. top — то же, что и y-coord;
b. left — то же, что и x-coord;
c. behavior — строка, содержащая либо smooth, instant, либо auto (по умолчанию
— auto).
window.scrollTo(0, 1000)
// Этот код меняет поведение прокрутки на smooth
window.scrollTo({
top: 1000,
behavior: 'smooth',
})
Методы scroll и scrollTo абсолютно идентичны — мы можем использовать любой из них. Отличие scrollBy в том, что он использует относительные координаты, в то время как scroll и scrollTo используют абсолютные. Последовательно вызывая scrollBy с одними и теми же параметрами, мы будем менять положение полосы прокрутки на значение, переданное в параметрах. В случае scroll и scrollTo изменения произойдут лишь при первом вызове.
Чтобы переместить полосу прокрутки в контексте DOM-элемента, нужно присвоить значения
полям Element.scrollTop и Element.scrollLeft.

**Метод Element.scrollIntoView**
Метод Element.scrollIntoView() интерфейса Element прокручивает текущий контейнер
родителя элемента так, чтобы элемент, на котором вызван scrollIntoView(), был видим
пользователю. Этот метод принимает два типа параметров:
1. alignToTop — необязательный аргумент типа Boolean со следующими возможными
значениями:
a. true — верхняя граница элемента выравнивается по верхней границе видимой
части окна прокручиваемой области. Соответствует scrollIntoViewOptions:
{block: "start", inline: "nearest"}. Значение по умолчанию.
b. false — нижняя граница элемента выравнивается по нижней границе видимой
части окна прокручиваемой области. Соответствует конфигурации
scrollIntoViewOptions: {block: "end", inline: "nearest"}
2. scrollIntoViewOptions — необязательный аргумент типа Object со следующим набором
полей:
a. behavior — определяет анимацию скролла. Необязательный параметр.
Принимает значение auto или smooth. По умолчанию — auto.
b. block — вертикальное выравнивание. Необязательный параметр. Варианты
значений: start, center, end или nearest. По умолчанию — start.
c. inline — горизонтальное выравнивание. Необязательный параметр. Варианты
значений: start, center, end или nearest. По умолчанию — nearest.
<!DOCTYPE html>
<html>
    <head>
        <style>
        .big {
            background: #ccc;
            height: 300px;
        }
        .box {
            background: lightgreen;
            height: 40px;
        }
        </style>
        <title>Пример – Element.scrollIntoView()</title>
    </head>
    <body>
        <button type="button">Нажми на меня</button>
        <div class="big"></div>
        <div id="box" class="box">Скрытый элемент</div>
        <script>
            const hiddenElement = document.getElementById('box')
            const button = document.querySelector('button')
            const handleButtonClick = () => {
                hiddenElement.scrollIntoView({block: 'center', behavior: 'smooth'})
            }
            button.addEventListener('click', handleButtonClick)
        </script>
    </body>
</html>
