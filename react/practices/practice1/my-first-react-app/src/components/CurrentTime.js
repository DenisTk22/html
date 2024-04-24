export default function CurrentTime() {
    const now = new Date().toLocaleTimeString();
    return (
        <div>
            <p class="time">Текущее время: {now}</p>
        </div>
    )
}