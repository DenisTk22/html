
export default function Day({id, days, photo}) {

    const TravelDays = days.map((day, i) =>
        <div id={`${id}-days`} className={`${id}-days`}>
            <div className={`${id}-day widthBox`}>
            <p className={`${id}-day_number`}>{`День ${day.DayNumber}`}</p>
            <a className={`${id}-day_link`} href={`#${id}-days`}>
                <img className={`${id}-day_photo`} src={photo[i]} alt={`photo-day${day.DayNumber}`} />
            </a>
            <p className={`${id}-day_location`}>{day.Location}</p>
            <p className={`${id}-day_shortDescription`}>{day.ShortDescription}</p>
        </div>
        </div>

    )
    return (
        <>
            {TravelDays}
        </>
    )
}