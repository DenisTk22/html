import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import CarouselTravel from "./CarouselBootstrapReact";

export default function MainPage({ id }) { // id = 'main'
    return (
        <main id={id} className={id}>
            <nav className={`${id}__navigation`}>
                <ul className={`${id}__navigation_list`}>
                    <li ><a className={`${id}__navigation_item`} href="#about">Обо
                        мне</a></li>
                    <li><a className={`${id}__navigation_item`}
                        href="#footer">Контакты</a></li>
                    <li><a className={`${id}__navigation_item`}
                        href="#motivation">Мотивация</a></li>
                </ul>
            </nav>
            <div className={`${id}__burger`}><i
                className="fa-solid fa-bars fa-2xl burgerOpen"></i></div>
            <div className={`${id}__block`}>
                <div className={`${id}__text`}>
                    <q className={`${id}__text_quote`}>Жизнь – не те дни, что прошли, а те,
                        что запомнились.</q>
                    <p className={`${id}__text_quote-auther`}>Габриэль Гарсиа Маркес.</p>
                    <p className={`${id}__text_sentence`}>Отправляясь в путешествие, вы
                        открываете новую главу в своей жизни.</p>
                </div>
                <ul className={`${id}__list`}>
                    <li className={`${id}__list_item`}>Мои путешествия:</li>
                    <li><a className={`${id}__list_item ${id}__list_item_hover`}
                        href="#altai">Алтай</a></li>
                    <li><a className={`${id}__list_item ${id}__list_item_hover`}
                        href="#karelia">Карелия</a></li>
                    <li><a className={`${id}__list_item ${id}__list_item_hover`}
                        href="#solovki">Соловки</a></li>
                </ul>
            </div>
            {/* <!-- Слайдер карусель --> */}
            <CarouselTravel />
        </main>
    )
}