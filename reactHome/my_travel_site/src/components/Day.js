import * as React from "react";
import { Link } from "react-router-dom";

import * as ID from "../id/idOfPages";

export default function Day({id, days, photo}) {

    // Функция получения модального окна
    const getActivePhoto = (photo, events) => {
        const blockEvents = photo.parentElement.parentElement.parentElement;
        events.forEach(day => {
            if (Number(day.id) === Number(photo.alt.at(-1))) {
                const activeEl = document.createElement('div');
                activeEl.classList.add('currentActive');
                blockEvents.append(activeEl);

                const activePhotoEl = document.createElement('img');
                activePhotoEl.classList.add('currentActive__photo');
                activePhotoEl.src = day.Photo;
                activePhotoEl.setAttribute('alt', `photo-day${day.DayNumber}`);
                activeEl.append(activePhotoEl);

                const activeDescriptionEl = document.createElement('p');
                activeDescriptionEl.classList.add('currentActive__description');
                activeDescriptionEl.textContent = day.Description;
                activeEl.append(activeDescriptionEl);

                const activeCloseEl = document.createElement('button');
                activeCloseEl.classList.add('currentActive__close');
                activeCloseEl.textContent = 'X';
                activeEl.append(activeCloseEl);

                const darkingFeeld = document.createElement('div');
                darkingFeeld.classList.add('currentActive__dark');
                blockEvents.append(darkingFeeld);
            }
        });
    };

    // Функция закрытия модального окна
    const closeActivePhoto = (close) => {
        const closeEl = close.parentElement.parentElement.parentElement;
        const activePhoto = close.parentElement;
        const darkEl = closeEl.querySelector('.currentActive__dark');
        activePhoto.remove();
        darkEl.remove();
    };

    const TravelDays = days.map((day, i) =>
            <div className={`${id}-day widthBox`}>
                <p className={`${id}-day_number`}>{`День ${day.DayNumber}`}</p>
                <Link className={`${id}-day_link`} to={`/${id}-days`}>
                <img className={`${id}-day_photo`} onClick={getActivePhoto(photo[i], days)} src={photo[i]} alt={`photo-day${day.DayNumber}`} />
                </Link>
                <p className={`${id}-day_location`}>{day.Location}</p>
                <p className={`${id}-day_shortDescription`}>{day.ShortDescription}</p>
            </div>

    )
    return (
        <div id={`${id}-days`} className={`${id}-days`}>
            {TravelDays}
        </div>
    )
}

// Обработка кликов по фото
// daysHTravelEl.addEventListener('click', ({ target }) => {
//     if (target.classList.contains('altai__horseTravel-day_photo')) {
//         getActivePhoto(target, horseTravelDays);
//     };

//     if (target.classList.contains('currentActive__close')) {
//         closeActivePhoto(target);
//     };
// });