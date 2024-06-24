
export default function Place({ id, places, photo }) {

    const TravelPlaces = places.map((place, i) =>
        <div class={`${id}-place widthBox`}>
            <a class={`${id}-place_link`} href={`#${id}-places`}>
                <img class={`${id}-place_photo`} src={photo[i]} alt={`photo-place${place.id}`} />
            </a>
            <p class={`${id}-place_shortDescription`}>{place.ShortDescription}</p>
        </div>
    )
    return (
        <div id={`${id}-places`} class={`${id}-places`}>
            {TravelPlaces}
        </div>
    )
}