export default function EventCard({ name, date, place }) {
    return (
        <div>
            <p class="event">Мероприятие {name} пройдет {date} в {place}</p>
        </div>
    )
}