import * as React from "react";
import { Link } from "react-router-dom";

import * as ID from "../id/idOfPages";

export default function Day({id, days, photo}) {

    const TravelDays = days.map((day, i) =>
            <div className={`${id}-day widthBox`}>
                <p className={`${id}-day_number`}>{`День ${day.DayNumber}`}</p>
                <Link className={`${id}-day_link`} to={`/${id}-days`}>
                    <img className={`${id}-day_photo`} src={photo[i]} alt={`photo-day${day.DayNumber}`} />
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