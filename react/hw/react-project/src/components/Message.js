export default function Message({text}) {
    return (
        <div class='message'>
            <p class='message__text'>Уважаемый пользователь, ваша заявка <span class='message__text_span'>{text}</span></p>
        </div>
    )
}