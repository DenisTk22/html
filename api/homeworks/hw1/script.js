/**
 * Необходимо создать веб-страницу с динамическими элементами с расписанием занятий.

На странице должна быть таблица с расписанием занятий, на основе JSON-данных.
Каждая строка таблицы должна содержать информацию о занятии, а именно:
- название занятия
- время проведения занятия
- максимальное количество участников
- текущее количество участников
- кнопка "записаться"
- кнопка "отменить запись"

Если максимальное количество участников достигнуто, либо пользователь уже записан на занятие, сделайте кнопку "записаться" неактивной.
Кнопка "отменить запись" активна в случае, если пользователь записан на занятие, иначе она должна быть неактивна.

Пользователь может записаться на один курс только один раз.

При нажатии на кнопку "записаться" увеличьте количество записанных участников.
Если пользователь нажимает "отменить запись", уменьшите количество записанных участников.
Обновляйте состояние кнопок и количество участников в реальном времени.

Если количество участников уже максимально, то пользователь не может записаться, даже если он не записывался ранее.

Сохраняйте данные в LocalStorage, чтобы они сохранялись и отображались при перезагрузке страницы.

Начальные данные (JSON):
 */

const scheduleData =
[
    {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 15
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 5
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 6
    }
];

// localStorage.clear();

const scheduleKey = 'schedule';
const schedule = getLsSchedule();
const scheduleEl = document.querySelector('.schedule');


if (!localStorage.getItem(scheduleKey)) {
    localStorage.setItem(scheduleKey, JSON.stringify(scheduleData));
};

// получение расписания из LS
function getLsSchedule() {
    return JSON.parse(localStorage.getItem(scheduleKey));
};
// сохранение расписания в LS
function saveSchedule(schedule) {
    localStorage.setItem(scheduleKey, JSON.stringify(schedule));
}
// макет урока в HTML
function getLessonHtml(lesson, noRecord) {
    return `
        <div class="lesson" data-id="${lesson.id}">
            <h3 class="name">Занятие: ${lesson.name}</h3>
            <p class="time">Время проведения: ${lesson.time}</p>
            <p class="maxParticipants">Максимальное количество участников: ${lesson.maxParticipants}</p>
            <p class="currentParticipants">Текущее количество участников: ${lesson.currentParticipants}</p>
            <button class="getLesson" ${noRecord}>Записаться</button>
            <button class="cancelLesson" disabled>Отменить запись</button>
       </div>
        `;
}

// вывод расписания
schedule.forEach(lesson => {
    if (lesson.currentParticipants >= lesson.maxParticipants) {
        scheduleEl.insertAdjacentHTML('beforeend', getLessonHtml(lesson, 'disabled'));
    } else {
        scheduleEl.insertAdjacentHTML('beforeend', getLessonHtml(lesson, null));
    }
});

scheduleEl.addEventListener('click', ({target}) => {
    // запись на урок
    if (target.closest('.getLesson')) {
        const lessonEl = target.closest('.lesson');

        const lessonId = lessonEl.dataset.id;
        const schedule = getLsSchedule();
        const editingLesson = schedule.find(lesson => lesson.id === Number(lessonId));

        editingLesson.currentParticipants = Number(editingLesson.currentParticipants) + 1;

        if (Number(editingLesson.currentParticipants) > Number(editingLesson.maxParticipants)) {
            alert("Записаться нельзя!");
            return;
        }

        saveSchedule(schedule);

        lessonEl.querySelector('.currentParticipants').textContent = 
        `Текущее количество участников: ${editingLesson.currentParticipants}`;

        lessonEl.querySelector('.cancelLesson').disabled = false;
        lessonEl.querySelector('.getLesson').disabled = true;
    }

    // отмена записи
    if (target.closest('.cancelLesson')) {
        const lessonEl = target.closest('.lesson');
        const lessonId = lessonEl.dataset.id;
        const schedule = getLsSchedule();

        const editingLesson = schedule.find(lesson => lesson.id === Number(lessonId));

        editingLesson.currentParticipants = Number(editingLesson.currentParticipants) - 1;

        saveSchedule(schedule);

        lessonEl.querySelector('.currentParticipants').textContent = 
        `Текущее количество участников: ${editingLesson.currentParticipants}`;

        lessonEl.querySelector('.cancelLesson').disabled = true;
        lessonEl.querySelector('.getLesson').disabled = false;
    }
})