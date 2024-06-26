import * as React from "react";
import { Link } from "react-router-dom";

import * as travelId from "../id/idOfTravels";
import * as pagesId from "../id/idOfPages";

import { Carousel } from 'react-bootstrap';
import Slider1 from '../images/mainSlider1.JPG';
import Slider2 from '../images/mainSlider2.jpg';
import Slider3 from '../images/mainSlider3.JPG';
import Slider4 from '../images/solovki2023.jpg';

function CarouselTravel() {
    return (
        <Carousel>
            <Carousel.Item>
                <Link to={`/${pagesId.altaiId}#${travelId.horseId}`}>
                    <img
                        className="d-block pic-size"
                        src={Slider1}
                        alt="picture1"
                    />
                </Link>
                <Carousel.Caption>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>урочище Сугойна</h5>
                        <p>Алтай</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Link to={`/${pagesId.altaiId}#${travelId.raftKatunId}`}>
                    <img
                        className="d-block pic-size"
                        src={Slider2}
                        alt="picture2"
                    />  
                </Link>
                <Carousel.Caption>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>река Катунь</h5>
                        <p>Алтай</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Link to={`/${pagesId.kareliaId}#${travelId.splavKemId}`}>
                    <img
                        className="d-block pic-size"
                        src={Slider3}
                        alt="picture3"
                    />
                </Link>
                <Carousel.Caption>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>река Чирка-Кемь</h5>
                        <p>Карелия</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Link to={`/${pagesId.solovkiId}#${travelId.solovki23Id}`}>
                    <img
                        className="d-block pic-size"
                        src={Slider4}
                        alt="picture3"
                    />
                </Link>
                <Carousel.Caption>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Крепость из прибрежных камней</h5>
                        <p>остров Соловки</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselTravel;