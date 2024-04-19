/**
 * Задача 2.
 
Бесконечная лента фотографий
Для создания бесконечной ленты с фотографиями с использованием Unsplash API, выполните следующие шаги:
1. Зарегистрируйтесь на Unsplash:
○ Перейдите на веб-сайт Unsplash (https://unsplash.com/).
○ Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
○ Войдите в свой аккаунт Unsplash.
 
2. Создайте приложение:
○ После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash
(https://unsplash.com/developers).
○ Нажмите на кнопку "Your apps".
○ Нажмите "New Application" (Новое приложение).
○ Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете использовать http://localhost для тестового сайта).
○ После заполнения информации, нажмите "Create Application" (Создать приложение).
 
3. Получите API-ключ:
○ После создания приложения, вы получите API-ключ. Этот ключ будет отображаться в вашей панели управления приложением.
○ API-ключ представляет собой строку вида YOUR_ACCESS_KEY. Скопируйте его.
4. Измените код HTML и JavaScript:
○ Откройте вашу HTML-страницу в текстовом редакторе или
интегрированной среде разработки.
○ Замените 'YOUR_ACCESS_KEY' в коде JavaScript на ваш собственный
API-ключ.
 
5. Реализуйте загрузку фотографий при открытии страницы.
 
6. Реализуйте бесконечную подгрузку фотографий при прокручивании страницы.
 
 
```
<!DOCTYPE html>
<html lang="en">
 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Бесконечная лента с фотографиями</title>
  <style>
    #photo-container {
      display: flex;
      flex-wrap: wrap;
    }
 
    .photo {
      flex: 1 1 calc(33.33% - 20px);
      margin: 10px;
      border: 1px solid #ccc;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
      overflow: hidden;
    }
 
    .photo img {
      width: 100%;
      height: auto;
    }
  </style>
</head>
 
<body>
  <div id="photo-container"></div>
</body>
 
</html>
```
 */
const apiKey = 'XT6IlnHjyqv4r-9wrAcBYJ9m2S4fg7Lnqr4xz940o4Y';
let isFetching = false;
let page = 1;

async function getImages(currentPage) {
    isFetching = true;
    try {
       const response = await fetch(`https://api.unsplash.com/photos?page=${currentPage}`, { headers:  { Authorization: 'Client-ID ' + apiKey } });

      if (!response.ok) {
          throw new Error(response.statusText);
      } 
      const json = await response.json();
      // return new Promise((resolve, reject) => {
      //   reject(new Error('Ой, бля...'))
      // });
      // console.log(json);
      return json;
    }
    //  catch (error) {
    //   throw error;
    // } 
    finally {
      isFetching = false;
    }
}

(async function () { // iife, тогда можно использовать await getImages()
  try {
    const result = await getImages(page++); // getImages() возвращает промис, т.к. она async // result нужно перевести из промиса в обычный массив
  renderImages(result);
  // page++;
  } catch (e) {
    alert("Ошибка");
  }
})();

//через then
// getImages(page++).then((result) => {
//   renderImages(result);
// }).catch((e) => {
//   alert(e);
// })

function renderImages(photoArray) {
  const photoContEl = document.querySelector('#photo-container');
  photoArray.forEach((photo) => {
    photoContEl.insertAdjacentHTML('beforeend', 
    `<img class="photo" src="${photo.urls.regular}" alt="photo">`
  )
  });
}

window.addEventListener('scroll', async () => {
  const scrollHeiht = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  );

  if (window.scrollY >= scrollHeiht*0.75 && !isFetching) {
    try {
      // getImages() возвращает промис, т.к. она async // result нужно перевести из промиса в обычный массив
    renderImages(await getImages(page++));
    } catch (error) {
      alert(error);
      }
  }
});