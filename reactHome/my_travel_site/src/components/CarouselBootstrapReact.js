import { Carousel } from 'react-bootstrap';
import Slider1 from '../images/mainSlider1.JPG';
import Slider2 from '../images/mainSlider2.jpg';
import Slider3 from '../images/mainSlider3.JPG';

function CarouselR() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <a href="#altai__horseTravel">
                    <img
                        className="d-block pic-size"
                        src={Slider1}
                        alt="picture1"
                    />
                </a>
                <Carousel.Caption>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>урочище Сугойна</h5>
                        <p>Алтай</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#altai__horseTravel">
                    <img
                        className="d-block pic-size"
                        src={Slider2}
                        alt="picture2"
                    />  
                </a>
                <Carousel.Caption>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>река Катунь</h5>
                        <p>Алтай</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#altai__horseTravel">
                    <img
                        className="d-block pic-size"
                        src={Slider3}
                        alt="picture3"
                    />
                </a>
                <Carousel.Caption>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>река Чирка-Кемь</h5>
                        <p>Карелия</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselR;