export default function Carousel() {
    return(
        <div id="carouselExampleCaptions" className="carousel slide"
            data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0" className="active" aria-current="true"
                    aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="3" className="active" aria-current="true"
                    aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <a href="#altai__horseTravel">
                        <img
                            src="./images/mainSlider1.JPG" className="d-block pic-size "
                            alt="picture1" /></a>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>урочище Сугойна</h5>
                        <p>Алтай</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <a href="#altai__raftingKatun"><img
                        src="./images/mainSlider2.jpg" className="d-block pic-size "
                        alt="picture2" /></a>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>река Катунь</h5>
                        <p>Алтай</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <a href="#karelia__splavChirkaKem"><img
                        src="./images/mainSlider3.JPG" className="d-block pic-size "
                        alt="picture3" /></a>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>река Чирка-Кемь</h5>
                        <p>Карелия</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <a href="#solovki__trip2023"><img src="./images/solovki2023.jpg"
                        className="d-block pic-size " alt="picture4" /></a>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Крепость из прибрежных камней</h5>
                        <p>остров Соловки</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button"
                data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"
                    aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button"
                data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon"
                    aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}