import * as React from "react";
import { Link } from "react-router-dom";

import * as pageId from "../id/idOfPages";

export default function RegionOfTravel({ id, title, text, medal, local_travel }) {
    return (
        <section id={id} className={id}>
            <div className={`${id}__main`}>
                <div className={`${id}__nav`}>
                    <p className={`${id}__title`}>{title}</p>
                    <Link className="toMainPage" to={`/${pageId.mainId}`}>
                        На главную страницу
                    </Link>
                </div>
                {text}
                {medal}
            </div>
            {local_travel}
        </section>
    )
}