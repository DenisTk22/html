import * as React from "react";
import { Link } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';

import CarouselTravel from "./CarouselBootstrapReact";
import * as pageId from "../id/idOfPages";

export default function MainPage({ id }) { // id = 'main'
    return (
        <main id={id} className={id}>
            <nav className={`${id}__navigation`}>
                <ul className={`${id}__navigation_list`}>
                    <li ><Link to={`/${pageId.aboutId}` } className={`${id}__navigation_item`}  >Обо
                        мне</Link></li>
                    <li ><Link to={`/${pageId.footerId}`} className={`${id}__navigation_item`}
                        >Контакты</Link></li>
                    <li ><Link to={`/${pageId.motivationId}`} className={`${id}__navigation_item`}
                        >Мотивация</Link></li>
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
                    <li><Link className={`${id}__list_item ${id}__list_item_hover`}
                        to={`/${pageId.altaiId}`}>Алтай</Link></li>
                    <li><Link className={`${id}__list_item ${id}__list_item_hover`}
                        to={`/${pageId.kareliaId}`}>Карелия</Link></li>
                    <li><Link className={`${id}__list_item ${id}__list_item_hover`}
                        to={`/${pageId.solovkiId}`}>Соловки</Link></li>
                </ul>
            </div>
            {/* <!-- Слайдер карусель --> */}
            <CarouselTravel />
        </main>
    )
}