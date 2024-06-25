import * as React from "react";
import { Link } from "react-router-dom";

import * as ID from "../id/idOfPages";

export default function Medal({ id, travels, photo}) {

    const travelsData = travels.map((travel, i) => 
        
        <div class={`${id}__travel`}>
            <p class={`${id}__travel_name`}>{travel.TravelName}</p>
            <Link class={`${id}__travel_link`} to={travel.Link}>
                <img class={`${id}__travel_photo`} src={photo[i]} alt={travel.TravelName} />
            </Link>
            <p class={`${id}__travel_shortDescription`}>{travel.ShortDescription}</p>
        </div>
    )
    return (
        <div class={`${id}__my-travels`}>
            { travelsData }
        </div>
)}