import * as React from "react";

export default function Medal({ id, travels, photo}) {

    const travelsData = travels.map((travel, i) => 
        
        <div class={`${id}__travel`}>
            <p class={`${id}__travel_name`}>{travel.TravelName}</p>
            <a class={`${id}__travel_link`} href={travel.Link}>
                <img class={`${id}__travel_photo`} src={photo[i]} alt={travel.TravelName} />
            </a>
            <p class={`${id}__travel_shortDescription`}>{travel.ShortDescription}</p>
        </div>
    )
    return (
        <div class={`${id}__my-travels`}>
            { travelsData }
        </div>
)}