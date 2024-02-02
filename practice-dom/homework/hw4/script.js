/*1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться. */
const inputEl = document.getElementById('from');
const spanEl = document.querySelector('.inputSpan');

// console.log(inputEl);
// console.log(spanEl);

inputEl.addEventListener('input', e => {
    spanEl.textContent = e.target.value;
});

/*2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'. */
const buttonEL = document.querySelector('.messageBtn');
const divEl = document.querySelector('.message');

buttonEL.addEventListener('click', ev => {
    divEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
    divEl.setAttribute('visibility', 'visible');
});

/*3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать. */

const formEl = document.querySelector('.form');
const formCOntrol1El = formEl.querySelector('input.form-control');
const formCOntrol2El = formEl.querySelector('select.form-control');

// console.log(formEl);

const checkFilling = (e) => {
        e.preventDefault();
        if (e.target.value === '') {
            e.target.classList.add('error');
        }
};

const checkInput = (e) => {
    if (e.target.value === '') {
        e.target.classList.add('error');
    } else {
        e.target.classList.remove('error');
    }
};


formEl.addEventListener('submit', checkFilling);
formEl.addEventListener('input',checkInput);
// formEl.addEventListener('select', checkInput);