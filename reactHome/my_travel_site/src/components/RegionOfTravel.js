
export default function RegionOfTravel({ id, title, text, medal, local_travel }) {
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
                {medal}
            </div>
            {local_travel}
        </section>
    )
}