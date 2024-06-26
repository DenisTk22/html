import * as React from "react";
import { Link } from "react-router-dom";

import * as pageId from "../id/idOfPages";

export default function MotivationPage({ id }) { // motivation
    return (
        <section id={id} className={id}>
            <div className={`${id}__nav`}>
                <p className={`${id}__title`}>Мотивация</p>
                <Link className="toMainPage" to={`/${pageId.mainId}`}>
                    На главную страницу
                </Link>
            </div>
            <p className={`${id}__subtitle`}>Что меня вдохновляет ...</p>
            <p className={`${id}__point`}>
                Это <span className={`${id}__point_bold`}>открытия</span>, возможность
                открывать мир вокруг себя, даже прогулка пешком по тем местам, где ты кадый
                день проезжаешь на автомобиле или в автобусе, позволяет тебе открыть эти
                места заново.
            </p>
            <p className={`${id}__point`}>
                Это <span className={`${id}__point_bold`}>осознание</span> того что мир
                вокруг нас очень огромен. Находясь в тысячах километрах от своего дома, ты
                понимаешь на сколько огромна страна, в которой ты живешь, на сколько огромен
                и уникален наш мир.
            </p>
            <p className={`${id}__point`}>
                Это <span className={`${id}__point_bold`}>движение</span>, постоянно
                находясь в движении, ты тренируешь свое тело и очищаешь разум. Ты начинаешь
                тренироваться сам, чтобы быть в тонусе, ты видишь результат и это
                вдохновляет тебя.
            </p>
            <p className={`${id}__point`}>
                Это <span className={`${id}__point_bold`}>знакомство</span> с новыми
                людьми, в походах ты встречаешь и узнаешь новых людей. Ты находишь людей,
                близких тебе по духу и взглядам. Некоторые из них становятся твоими
                друзьями, он все они оставляют свой след в твоей жизни, а ты в их.
            </p>
        </section>
    )
}