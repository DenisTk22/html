import * as React from "react";
import { Link } from "react-router-dom";

import * as pageId from "../id/idOfPages";

export default function AboutPage({ id }) { //about
    return (
        <section id={id} className={id}>
            <div className={`${id}__info`}>
                <div className={`${id}__nav`}>
                    <h1 className={`${id}__title`}>Обо мне</h1>
                    <Link className="toMainPage" to={`/${pageId.mainId}`}>
                        На главную страницу
                    </Link>
                </div>
                <h4 className={`${id}__preview`}>
                    Меня зовут Денис Ткачёв, я живу в Нижнем Новгороде. Я люблю
                    путешествовать. И не важно нужно ли для этого куда-то лететь или просто
                    выйти на улицу. Для меня, прогулку в своем городе тоже можно превратить в
                    петешествие - разработать маршрут, взять термос с любимым напитком,
                    подпопник и вперед!
                    <br />
                    <span>
                        Путешествие начинается, когда вы закрываете за собой дверь.
                    </span>
                </h4>
                <p className={`${id}__text`}>
                    Цель данного сайти мотивировать людей на приключения, показать что
                    приключения вокруг нас. А также объединить людей в поисках приключений.
                    Общаясь с людьми, я понял, что тех, кто хотел бы пойти в поход одного дня
                    или на несколько дней, очень много. Порой не хватеат мотивации,времени, но
                    чаще всего не хватате компании, с кем можно было бы пойти куда глаза
                    глядят. Вместе всегда веселей и надежнее.
                </p>
            </div>
            <div className={`${id}__photobox`}>
                <img className={`${id}__photo`} src="./images/about.jpg" alt="myPhoto" />
            </div>
        </section>
    )
}