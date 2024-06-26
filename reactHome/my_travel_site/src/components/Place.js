import * as React from "react";
import { Link } from "react-router-dom";

export default function Place({ id, places, photo }) {

    const TravelPlaces = places.map((place, i) =>
        <div class={`${id}-place widthBox`}>
            <Link class={`${id}-place_link`} to={`/${id}-places`}>
                <img class={`${id}-place_photo`} src={photo[i]} alt={`photo-place${place.id}`} />
            </Link>
            <p class={`${id}-place_shortDescription`}>{place.ShortDescription}</p>
        </div>
    )
    return (
        <div id={`${id}-places`} class={`${id}-places`}>
            {TravelPlaces}
        </div>
    )
}