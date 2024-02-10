/*Задание 1
1. Поиск в интернете (бесплатные api примеры).
2. Найти любые данные, на произвольную тему.
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api. */

const animalsData =  `[
    {
        "Title": "Petfinder",
        "Description": "Petfinder is dedicated to helping pets find homes",
        "Image": "https://cs12.pikabu.ru/post_img/big/2022/03/19/10/1647712788131041210.jpg",
        "Note": "petfinder"
    },
    {
        "Title": "Axolotl",
        "Description": "Who am I?",
        "Image": "https://aqufish.ru/wp-content/uploads/2021/11/11-aksolotl.jpg",
        "Note": "axolotl"
    },
    {
        "Title": "Cat",
        "Description": "Daily cat facts",
        "Image": "https://img.razrisyika.ru/kart/2/1200/4751-kot-4.jpg",
        "Note": "cat"
    },
    {
        "Title": "Dog",
        "Description": "Dog is your friend",
        "Image": "https://w.forfun.com/fetch/75/756ac8864b07aaf0393073b2741213ad.jpeg",
        "Note": "dog"
    },
    {
        "Title": "Parrot",
        "Description": "Parrot can speak with you",
        "Image": "https://masyamba.ru/картинки-про-попугаев/39-картинки-попугаев.jpg",
        "Note": "parrot"
    }
]`

/*Задание 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных (картинка загловок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости (по желанию). */

const data = JSON.parse(animalsData);


data.forEach(animalData => {
const contentEl = document.querySelector('.content');    

const animalEl = document.createElement('div');
animalEl.classList.add('animal');

const animalHead = document.createElement('div');
animalHead.classList.add('animal__head');

const animalPack = document.createElement('div');
animalPack.classList.add('animal__pack');

const animalImg = document.createElement('img');
animalImg.classList.add('animal__img');
animalImg.setAttribute('alt', animalData.Note);
animalImg.src = animalData.Image;

const animalTitle = document.createElement('h1');
animalTitle.classList.add('animal__title');
    animalTitle.textContent = animalData.Title;

const animalText = document.createElement('p');
animalText.classList.add('animal__text');
animalText.textContent = animalData.Description;

contentEl.appendChild(animalEl);

animalEl.appendChild(animalImg);
animalEl.appendChild(animalTitle);
animalEl.appendChild(animalText);

});
