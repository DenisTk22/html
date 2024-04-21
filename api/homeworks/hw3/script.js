/**
 * Цель: Разработать веб-приложение, которое будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

Регистрация на Unsplash:

• Перейдите на веб-сайт Unsplash (https://unsplash.com/).
• Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было регистрации до этого, новый аккаунт создавать не нужно).

Создание приложения:

• Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
• Нажмите "New Application".
• Заполните необходимую информацию о приложении (можете использовать http://localhost для тестирования).
• Получите свой API-ключ после создания приложения.

Разработка веб-приложения:

• Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
• Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу. Обратите внимание, что должно подгружаться всегда случайное изображение, для этого есть отдельная ручка (эндпоинт) у API.
• Отобразите информацию о фотографе под изображением.
• Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу. Одну фотографию пользователь может лайкнуть только один раз. Также должна быть возможность снять лайк, если ему разонравилась картинка.
• Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался, если будет показана та же самая картинка.
• Реализуйте возможность просмотра предыдущих фото с сохранением их в истории просмотров в localstorage.
• Реализовать все с помощью async/await, без цепочем then.
 */

const apiKey = '';
const photosLsKey = 'photos';
const photos = getLsPhotos();
const photosLiked = [];
// localStorage.clear()

const boxEl = document.querySelector('.box');
const buttonEl = boxEl.querySelector('.box__button');
const dislikeEl = boxEl.querySelector('.box__dislike');
const likesQty = boxEl.querySelector('.box__likes-count');

let count = 0;
let gotLike = false;

async function getRandomPhoto() {
        const url = 'https://api.unsplash.com/photos/random';
        const response = await fetch(url, { headers:  { Authorization: 'Client-ID ' + apiKey } });
        if (!response.ok) {
          throw new Error(response.statusText);
      } 
      const json = await response.json();
      return json;
};

function renderImages(photo) {
    const imgEl = boxEl.querySelector('.box__img');
    const photographer = boxEl.querySelector('.box__photographer')
    imgEl.src = photo.urls.regular;
    photographer.textContent = `Фотограф: ${photo.user.first_name} ${photo.user.last_name}`;
};

const result = await getRandomPhoto();
const photoLocation = result.links.download;
renderImages(result);

if (localStorage.getItem(photosLsKey)) {
    JSON.parse(localStorage.getItem(photosLsKey)).forEach((photo) => {
        if (photo.url === photoLocation) {
            likesQty.textContent = `Понравилось: ${photo.likes}`;
            buttonEl.disabled = true;
        } else {
            console.log('Это новое фото')
        }
    });
};

//получение фотографий из localStorage
function getLsPhotos() { // const photos = getLsPhotos();
    return JSON.parse(localStorage.getItem(photosLsKey));
};

// макет отображения лайкнутых фотографий в HTML
function renderPhotos(photoArray) {
    const likedPhotos = document.querySelector('.likedPhotoes');
    photoArray.forEach((photo) => {
        likedPhotos.insertAdjacentHTML('beforeend', `<img class="photo" src="${photo.url}" alt="photo">`)
    });
  }

buttonEl.addEventListener('click', (e) => {
    count++;
    gotLike = true;
    likesQty.textContent = `Понравилось: ${count}`;

    if (localStorage.getItem(photosLsKey)) {
        const newPhoto = {url: photoLocation, liked: gotLike, likes: count};
        photosLiked.push(newPhoto);
        let allPhotos = [];
        allPhotos = photos;
        allPhotos.forEach((photo) => {
            photosLiked.push(photo)
        })

    localStorage.setItem(photosLsKey, JSON.stringify(photosLiked));
    } else {
        const allPhotos = [];
        allPhotos.push({url: photoLocation, liked: gotLike, likes: count });
        localStorage.setItem(photosLsKey, JSON.stringify(allPhotos));
    } 
    
    buttonEl.disabled = true;
    dislikeEl.disabled = false;
    dislikeEl.style.display = 'block';
    renderPhotos(photosLiked);
});

dislikeEl.addEventListener('click', (e) => {
    count--;
    likesQty.textContent = `Понравилось: ${count}`;
    buttonEl.disabled = false;
    dislikeEl.disabled = true;

    let allPhotos = [];
    allPhotos = photos;
    allPhotos.forEach((photo, i) => {
        if (photo.url === photoLocation) {
            allPhotos.splice(i, 1);
        }
    });
    localStorage.setItem(photosLsKey, JSON.stringify(allPhotos));
    renderPhotos(allPhotos);
})
