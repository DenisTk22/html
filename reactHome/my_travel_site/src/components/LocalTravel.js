
export default function LocalTravel({ id, title, text, points}) {
    return (
        <div id={id} className= {`${id} stayYourFeedback`}>
        <h2 className={`${id}_title`}>
            {title}
        </h2>
        <p className={`${id}_text`}>
            {text}
        </p>
        {points}
        <form action="#" className="feedbackTravel">
            <input
                name={id}
                className="feedbackTravel__feedback"
                type="text"
                placeholder="Добавьте отзыв"
                required=""
            />
            <button className="feedbackTravel__saveFeedback">Добавить отзыв</button>
            <button disabled="" className="feedbackTravel__showFeedbacks">
                Скрыть отзывы
            </button>
        </form>
        <ul className="feedbackTravel__listFeedback" />
    </div>
)}