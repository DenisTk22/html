

export default function LocalTravel({ id, title, text}) { //altai__horseTravel Конный поход, Алтай, июль - август 2022 год
    return (
        <div id={id} className= {`${id} stayYourFeedback`}>
        <h2 className={`${id}_title`}>
            {title}
        </h2>
        <p className={`${id}_text`}>
            {text}
        </p>
        <div id={`${id}-days`} className={`${id}-days`}>
            {/* блок формируется файлом altai.js, horseTravel */}
        </div>
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