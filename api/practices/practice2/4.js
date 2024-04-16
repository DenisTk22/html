/**
 * Задание 4
Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность для этого опросника, используя HTML, CSS и JavaScript.
1. Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен иметь несколько вариантов ответов.
2. Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов.
3. Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса.
4. При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все вопросы, и отобразить выбранные им варианты ответов.
5. Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить на все вопросы перед завершением опроса.
6. По желанию можно добавить стилизацию опросника с использованием CSS для лучшего пользовательского опыта.
```
<!DOCTYPE html>
<html lang="en">
 
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Modal Window</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
 
    .question {
      margin-bottom: 20px;
    }
 
    .options {
      display: flex;
      flex-direction: column;
    }
 
    label {
      cursor: pointer;
      margin-bottom: 10px;
    }
 
    .result {
      font-weight: bold;
    }
  </style>
</head>
 
<body>
  <div class="question">
    <p>Вопрос 1: Какой ваш любимый цвет?</p>
    <div class="options">
      <label>
        <input type="radio" name="q1" value="Синий"> Синий
      </label>
      <label>
        <input type="radio" name="q1" value="Зеленый"> Зеленый
      </label>
      <label>
        <input type="radio" name="q1" value="Красный"> Красный
      </label>
    </div>
  </div>
 
  <div class="question">
    <p>Вопрос 2: Какое ваше любимое животное?</p>
    <div class="options">
      <label>
        <input type="radio" name="q2" value="Собака"> Собака
      </label>
      <label>
        <input type="radio" name="q2" value="Кот"> Кот
      </label>
      <label>
        <input type="radio" name="q2" value="Попугай"> Попугай
      </label>
    </div>
  </div>
 
  <button id="submit">Завершить опрос</button>
 
  <div class="result" style="display: none;">
    <p>Результаты:</p>
    <p id="result-q1">Вопрос 1: <span></span></p>
    <p id="result-q2">Вопрос 2: <span></span></p>
  </div>
</body>
 
</html>
```
 */

const optionsEl = document.querySelectorAll('.options');
const submitBtn = document.querySelector('#submit');
const containerEl = document.querySelector('.container');
const answerEl = document.querySelector('.answers');


submitBtn.addEventListener('click', () => {
    let resultHtml = '';
    optionsEl.forEach((option, index) => {
        const selectedOption = option.querySelector('input:checked');
        if (!selectedOption) {
            option.classList.add('error');
        } else {
            resultHtml += `
            <p>Вопрос ${index + 1}: ${selectedOption.value}</p>
            `;
        }
    });
    if (optionsEl.length === containerEl.querySelectorAll('input:checked').length) {
        answerEl.innerHTML = resultHtml; // innerHTML перезапишит
        // answerEl.insertAdjacentHTML('beforeend', resultHtml);
        document.querySelector('.result').classList.remove('hidden');
    }
});

containerEl.addEventListener('click', ({target}) => {
    if (target.closest('.options>label')) {
        target.closest('.options').classList.remove('error');
    }
});

