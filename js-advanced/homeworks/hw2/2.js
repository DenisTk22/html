"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
  return Math.random().toString(36).slice(2);
}

const initialData = `[
  {
    "id": "uid()",
    "productImg": "./img/iphone.png",
    "product": "Apple iPhone 13",
    "reviews": [
      {
        "id": "uid()",
        "text": "Отличный телефон! Батарея держится долго."
      },
      {
        "id": "uid()",
        "text": "Камера супер, фото выглядят просто потрясающе."
      }
    ]
  },
  {
    "id": "uid()",
    "productImg": "./img/Samsung_Galaxy_Z_Fold_3.jpeg",
    "product": "Samsung Galaxy Z Fold 3",
    "reviews": [
      {
        "id": "uid()",
        "text": "Интересный дизайн, но дорогой."
      }
    ]
  },
  {
    "id": "uid()",
    "productImg": "./img/playStation5.jpg",
    "product": "Sony PlayStation 5",
    "reviews": [
      {
        "id": "uid()",
        "text": "Люблю играть на PS5, графика на высоте."
      }
    ]
  }
]`

const data = JSON.parse(initialData);

const productsEl = document.querySelector(".products");
productsEl.style.display = "flex";
productsEl.style.flexWrap = "wrap";

data.forEach(product => {

  const productEl = document.createElement("div");
  productEl.classList.add("product");

  const productImageEl = document.createElement("img");
  productImageEl.classList.add("product__image");
  productImageEl.src = product.productImg;
  productImageEl.setAttribute("width", "400px");
  productImageEl.setAttribute("alt", product.product);
  productEl.append(productImageEl);

  const productNameEl = document.createElement("h2");
  productNameEl.classList.add("product__name");
  productNameEl.textContent = product.product;
  productEl.append(productNameEl);

  const inputEl = document.createElement("input");
  inputEl.classList.add("product__user-input");
  inputEl.setAttribute("type", "text");
  inputEl.setAttribute("placeholder", "Ваш отзыв");
  productEl.append(inputEl);

  const buttonEl = document.createElement("button");
  buttonEl.classList.add("product__button");
  buttonEl.textContent = "Добавить отзыв";
  productEl.append(buttonEl);

  const errorEl = document.createElement("p");
  errorEl.classList.add("product__error");
  errorEl.textContent = "Отзыв должен быть не менее 50 символов и не более 500.";
  productEl.append(errorEl);

  const productReviewsEl = document.createElement("ul");
  product.reviews.forEach(review => {
    const reviewEl = document.createElement("li");
    reviewEl.textContent = review.text;
    productReviewsEl.append(reviewEl);
  });
  productEl.append(productReviewsEl);

  productsEl.append(productEl);

  buttonEl.addEventListener("click", () => {
    const reviewText = inputEl.value;
    if (reviewText.length >= 50 && reviewText.length <= 500) {
      const reviewEl = document.createElement("li");
      reviewEl.setAttribute("id", uid());
      reviewEl.textContent = reviewText;
      productReviewsEl.append(reviewEl);
      inputEl.value = "";
    } else {
      errorEl.style.display = "block";
    }
  });
});
   
