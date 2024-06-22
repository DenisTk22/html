
export default function RegionOfTravel({ id, title, text, medal, local_travel }) { //altai
    return (
        <section id={id} className={id}>
            <div className={`${id}__main`}>
                <div className={`${id}__nav`}>
                    <p className={`${id}__title`}>{title}</p>
                    <a className="toMainPage" href="#main">
                        На главную страницу
                    </a>
                </div>
                {text}
                
                {/* <div className={`${id}__my-travels`}> */}
                    {medal}
                    {/* блок формируется файлом altai.js, altaiTravels */}
                {/* </div> */}
            </div>
            {local_travel}
        </section>

    )
}
/* <div id="altai__horseTravel" className="altai__horseTravel stayYourFeedback">
<h2 className="altai__horseTravel_title">
    Конный поход, Алтай, июль - август 2022 год
</h2>
<p className="altai__horseTravel_text">
    Это был мой первый конный поход, а также первый мой визит на Алтай. Я
    очень рад, что начал свой знакомство с Алтаем имеено с конного похода,
    отдавая на откуп опытным лошадям эти тонкие и извилистые тропы, крытые
    спуски и долгие подъемы. Наш поход длился 8 дней и большую часть времени
    мы провели верхом на наших лошадках. Ночевали мы в палатках, что еще
    больше единило нас с природой. Но сопровождающие нас конюхи предпочитали
    спась вообще под окрытым небом, что повергало некоторых путешественноков,
    привыкших к комфортной жизни в городе в шок. Открывающиеся нашему взору
    горы, равнины, озера и реки говорили о своей первозданности, насколько это
    возможно в современном мире вблизи туристических маршрутах. Но то что я
    там увидел, я сохраню себе на всю свою жизнь!
</p>
<div id="altai__horseTravel-days" className="altai__horseTravel-days">
    /* блок формируется файлом altai.js, horseTravel */
// </div>
// <form action="#" className="feedbackTravel">
//     <input
//         name="altai__horseTravel"
//         className="feedbackTravel__feedback"
//         type="text"
//         placeholder="Добавьте отзыв"
//         required=""
//     />
//     <button className="feedbackTravel__saveFeedback">Добавить отзыв</button>
//     <button disabled="" className="feedbackTravel__showFeedbacks">
//         Скрыть отзывы
//     </button>
// </form>
// <ul className="feedbackTravel__listFeedback" />
// </div>
// <div id="altai__raftingKatun" className="altai__raftingKatun stayYourFeedback"
// >
// <h2 className="altai__raftingKatun_title">
//     Сплав на рафтах, река Катунь, август 2022 год
// </h2>
// <p className="altai__raftingKatun_text">
//     После завершения основного похода, наш ждал еще один сюрприз - однодневный
//     сплав на рафте по река Катунь. Немного изнеможденные, но еще сохранившие
//     немного сил, мы с воодушевлением приняли это новое испытание и это было
//     круто! Мы сплотились еще больше, мы были одним целым. До этого дня, я
//     думал, что уже многое повидал на Алтае, но как оказалось это было еще не
//     все. Бурлящие потоки, бочки и пороги, потрясающие горные вершины и
//     лесистые берега, все радовало и в то же время не давало расслабится. В
//     этом походе я нашел новых друзей, с которыми мы продолжили совместные
//     путешествия.
// </p>
// <div id="altai__raftingKatun-places" className="altai__raftingKatun-places">
//     /* блок формируется файлом altai.js, raftingKatun */
// </div>
// <form action="#" className="feedbackTravel">
//     <input
//         name="altai__raftingKatun"
//         className="feedbackTravel__feedback"
//         type="text"
//         placeholder="Добавьте отзыв"
//         required=""
//     />
//     <button className="feedbackTravel__saveFeedback">Добавить отзыв</button>
//     <button disabled="" className="feedbackTravel__showFeedbacks">
//         Скрыть отзывы
//     </button>
// </form>
// <ul className="feedbackTravel__listFeedback" />
// </div>