

export default function RegionOfTravel({ id }) { //karelia
    return (
        <section id="karelia" className="karelia">
            <div className="karelia__main">
                <div className="karelia__nav">
                    <p className="karelia__title">Карелия</p> 
                    <a className="toMainPage" href="#main">
                        На главную страницу
                    </a>
                </div>
                <p className="karelia__text">
                    Карелия - моя мечта со стеденческой скамьи. Проезжая эти места на поезда,
                    я мечтал окунуться в них, да да именно окунуться, в эти бесконечные леса и
                    озера. И вот новое приключение - сплав на байдарках по реке Чирка-Кемь, до
                    полярного круга рукой подать. Конечно же одним сплавом мы не
                    удовлетворились, ведь преодолевая такие расстояния, хочется как можно
                    больше увидеть и прочуствовать.
                </p>
                <div className="karelia__my-travels">
                    {/* блок формируется файлом karelia.js, kareliaTravels */}
                </div>
            </div>
            <div
                id="karelia__splavChirkaKem"
                className="karelia__splavChirkaKem stayYourFeedback"
            >
                <h2 className="karelia__splavChirkaKem_title">
                    Сплав на байдарках, река Чирка-Кемь, август 2023 год
                </h2>
                <p className="karelia__splavChirkaKem_text">
                    До этого у меня уже был опыт спалава на байдарках, поэтому нам дали
                    двухместную байдарку без опутного инструктора. И это было не забываемо!
                    Ежедневные преодоления порогов, языков и быстрин давали уверенности в
                    своих силах. Неделя незабываемых приключений - потоки бурлящей воды,
                    походная баня, рыбалка, самосплав, болота с морошкой и все это на фоне
                    потрясающих видов нашей огромной страны. Встречались и местные, живущие в
                    глуши и таком отдалении от цивилизации, что было завидно и непостижимо
                    одновременно. Но все они были очень гостеприимны, ведь это основа
                    выживания в таких местах - взаимопощь и выручка здесь на первом месте.
                </p>
                <div
                    id="karelia__splavChirkaKem-days"
                    className="karelia__splavChirkaKem-days"
                >
                    {/* блок формируется файлом karelia.js, splavChirkaKem */}
                </div>
                <form action="#" className="feedbackTravel">
                    <input
                        name="karelia__splavChirkaKem"
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
            <div id="karelia__kem" className="karelia__kem stayYourFeedback">
                <h2 className="karelia__kem_title">городок Кемь</h2>
                <p className="karelia__kem_text">
                    Я даже не представляю, при каких еще обстоятельствах я мог очутиться в
                    этом городе, но имеено он был воротам и пропуском к нашему следующиму
                    приключению. Сам город довольно неказист, много советсвикх построек, что
                    отправляло на в прошлое - светлое и городое. Город начинает по-немногу
                    оживать за счет туристических потоков. Здесь можно отведать вкусной рыбки,
                    а в ресторане услышать фразу - эти продукты у нас уже закончились... Но в
                    любом случае это было незабываемое ощущение - ощуенеи, что ты находишься
                    практически на краю земли в тысячах километрах от дома и это все еще твоя
                    страны. Ты понимаешь на сколько ты мал и на сколько огромен этот мир, хоть
                    это его еще небольшая часть.
                </p>
                <div id="karelia__kem-places" className="karelia__kem-places">
                    {/* блок формируется файлом karelia.js, kem */}
                </div>
                <form action="#" className="feedbackTravel">
                    <input
                        name="karelia__kem"
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
        </section>
    )
}