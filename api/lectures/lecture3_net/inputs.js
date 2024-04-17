/**
 * <form name="superForm">
        <p>
            Ваш email: <input type="email" name="email">
        </p>
        <div class="">
            selectForm: <select name="selectForm">
            <option value="GeekBrains" selected>ГикБрейнс</option>
            <option value="SkillBox" selected>СкилБокс</option>
            <option value="SkillFactory" selected>СкилФэктори</option>
        </select>
        </div>
        <p>
            checkbox: <input type="checkbox" name="checkbox">
        </p>
        
    </form>
 */

const form = document.forms.superForm;

form.email.addEventListener('change', () => {
    console.log('change - email:', form.email.value);
})

form.email.addEventListener('input', () => {
    console.log('input - email:', form.email.value);
})

form.selectForm.addEventListener('change', () => {
    console.log('change - selectForm:', form.selectForm.value);
})

form.selectForm.addEventListener('input', () => {
    console.log('input - selectForm:', form.selectForm.value);
})

form.checkbox.addEventListener('change', () => {
    console.log('change - checkbox:', form.checkbox.checked);
})
form.checkbox.addEventListener('input', () => {
    console.log('input - checkbox:', form.checkbox.checked);
})

form.email.oncut = form.email.oncopy = form.email.onpaste = (e) => {
    console.log(e.type + ' - ' + e.clipboardData.getData('text/plain'));

}

