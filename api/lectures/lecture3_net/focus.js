/**
 * <form name="superForm">
        Ваш email: <input type="email" name="input">
        <div class="" id="error"></div>
        
    </form>
 */

const input = document.forms.superForm.input;
const error = document.getElementById('error');
// input.onblur = function () {
//     if (!input.value.includes('@')) { //не ввели @
//         input.classList.add('invalid');
//         error.innerHTML = 'Введите email'; // или error.textContent = 'Введите email';
//     }}; или
input.addEventListener('blur', function (e) {
        if (!input.value.includes('@')) { //не ввели @
            input.classList.add('invalid');
            error.innerHTML = 'Введите email'; // или error.textContent = 'Введите email';
        }
});

input.addEventListener('focus', function (e) {
    if(this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        error.textContent = '';
    }
});