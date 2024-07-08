import * as React from "react";
import { Link } from "react-router-dom";


import * as pageId from "../../id/idOfPages";
import MotivationPointRender from "./MotivationPointRender";
import {myMotivation} from "./data"

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
            <ul>
                {myMotivation.map((motiv) => (<MotivationPointRender key={motiv.title} id={id} {...motiv} />))}
            </ul>
        </section>
    )
}