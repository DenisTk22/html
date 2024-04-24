function Greeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour <= 12) {
        return (
            <div>
                <h1>Доброе утро! Уже {hour} часов</h1>
            </div>
        ) 
    } else if (hour > 12 && hour <= 18) {
        return (
            <div>
                <h1>Добрый день!</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Доброй ночи! Сейчас {hour} час</h1>
            </div>
        )
    }
}

export default Greeting;