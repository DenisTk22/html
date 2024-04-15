///Обработчик событий
// по атрибуту
// /* <button onclick = 'handler()'> - устарело*/

//по свойству dom
// let btn = document.querySelector('#btn');
// btn.onclick = () => {}; //сработает только последний похожий

//addEventListener
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', handler, options);

/**
 * События мыши
mousedown - кнопка мыши нажата над элементом
mouseup - кнопка мыши отпущена над элементом
click - кнопка мыши нажата и отпущена над элементом
dblclick - двойной клик на элементе
mouseover - курсор мыши наведён на элемент
mouseout - курсор мыши покинул зону элемента
mousemove - произошло любое движение мышью
contextmenu - произошёл вызов контекстного меню
Не всплывающие события, которые не разделяют элемент и его потомков.
Считается, что это один элемент:
mouseenter // курсор мыши наведён на элемент
mouseleave // курсор мыши покинул зону элемента*/



/**
 * События клавиатуры
У клавиатуры имеются два основных события:
● keydown (при нажатии кнопки)
● keyup (при отпускании кнопки)
У события есть свойства с кодом (code) нажатой клавиши и её ключом (key).
Ключ – это символ клавиши. Код — это «физический код клавиши».
Есть отдельные события для нажатых системных клавиш:
shiftKey
altKey
ctrlKey
metaKey //Cmd для Mac
 */


/*
Прокрутка (scroll)
Событие scroll может быть полезно при создании страниц с «бесконечным»
содержимым. Например, когда подгрузка следующей страницы происходит при
достижении самого низа текущей страницы и встраиванием содержимого ниже.
Либо при других потребностях показать дополнительное содержимое
 */


window.addEventListener('scroll', () => {
    document.getElementById('scroll').innerHTML = scrollY + 'px';
    console.log(scrollY);
})
/**
 * <div class='menu'>
 *    <div class='menu-item'>Item 1</div>
 *    <div class='menu-item'>Item 2</div>
 *    <div class='menu-item'>Item 3</div>
 *    <div class='menu-item'>Item 4</div>
 * 
 */

const menuItems = document.querySelectorAll('.menu-item');   

//эффект наведения
menuItems.forEach(item => { 
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'red';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '';
    })
    item.addEventListener('click', () => {
        console.log(textContent);
    })

    item.addEventListener('dblclick', () => {
        item.remove();
    })
    item.addEventListener('keydown', (event) => {
        if (event.code === 'Enter') {
            item.remove();
        }
    })

    item.addEventListener('mousedown', () => {
        console.log('mousedown');
    })


    item.addEventListener('DOMContentLoaded', () => {   
        console.log('DOMContentLoaded');
    }) 


});

